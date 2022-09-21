import { Component, OnInit, TemplateRef } from '@angular/core';
import { Remedio } from '../models/Remedio';
import { RemedioService } from '@app/services/remedio.service';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remedios',
  templateUrl: './remedios.component.html',
  styleUrls: ['./remedios.component.scss'],
  // providers: [RemedioService]
})
export class RemediosComponent implements OnInit {

  public remedios: Remedio[] = [];
  public remediosFiltrados: Remedio[] = [];
  private _filtroLista: string = '';
  modalRef?: BsModalRef;
  public remedioId = 0;
  form: FormGroup;

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.remediosFiltrados = this.filtroLista ? this.filtrarRemedios(this.filtroLista) : this.remedios;
  }

  public filtrarRemedios (filtrarPor: string): Remedio[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.remedios.filter(
      (remedios: any) => remedios.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || remedios.volume.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  constructor(private remedioService: RemedioService,
              private toastr: ToastrService,
              private modalService: BsModalService,
              private router: Router) { }

  public ngOnInit(): void {
    this.getRemedios();
    this.carregarRemedios();
  }

  public getRemedios(): void {
    this.remedioService.getRemedios().subscribe({
      next: (remedios: Remedio[]) => {
        this.remedios = remedios;
        this.remediosFiltrados = this.remedios;
      },
        error: (error: any) => console.log(error)
    });
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

  public resetForm(): void {
    this.form.reset();
  }
}
