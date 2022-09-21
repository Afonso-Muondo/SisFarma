import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Remedio } from '../../models/Remedio';
import { RemedioService } from '../../services/remedio.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public remedios: Remedio[] = [];
  public remediosFiltrados: Remedio[] = [];
  private _filtroLista: string = '';
  modalRef?: BsModalRef;
  public remedioId = 0;

  constructor(private remedioService: RemedioService,
              private toastr: ToastrService,
              private modalService: BsModalService,
              private router: Router) { }

  public ngOnInit(): void {
    // this.detalheRemedio();
    this.carregarRemedios();
  }

  public carregarRemedios(): void {
    this.remedioService.getRemedios().subscribe({
      next: (remedios: Remedio[]) => {
        this.remedios = remedios;
        this.remediosFiltrados = this.remedios;
      },
      error: (error: any) => {
          this.toastr.error('Erro ao Carregar os Remédios.', 'Erro!');
      },
    });
  }

  openModal(event: any, template: TemplateRef<any>, remedioId: number): void {
    event.stopPropagation();
    this.remedioId = remedioId
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef.hide();

    this.remedioService.deleteRemedio(this.remedioId).subscribe(
      (result: string ) => {
        console.log(result);
        this.toastr.success('Produto Deletado com sucesso.', 'Deletado!');
        this.carregarRemedios();
      },
      (error: any) => {
        console.error(error)
        this.toastr.error(`Erro ao tentar Deletar Produto`, 'Erro!');
      }
    );
  }

  decline(): void {
    this.modalRef?.hide();
  }

  detalheRemedio(id: number): void {
    this.router.navigate([`cadastro/${id}`])

    addEventListener("click", ()  => {
      location.reload()
    })
  }
}
