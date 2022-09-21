import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { RemedioService } from './../services/remedio.service';
import { Remedio } from './../models/Remedio';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  remedio = {} as Remedio;
  public remedios: Remedio[] = [];
  public remediosFiltrados: Remedio[] = [];
  form: FormGroup;
  estadoSalvar = 'post'

  get f(): any {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder,
              private router: ActivatedRoute,
              private remedioService: RemedioService,
              private toastr: ToastrService) { }

  public carregarRemedio(): void {
    const remedioIdParam = this.router.snapshot.paramMap.get('id');

    if (remedioIdParam != null) {

      this.estadoSalvar = 'put'

      this.remedioService.getRemedioById(+remedioIdParam).subscribe(
        (remedio: Remedio) => {
          this.remedio = {...remedio};
          this.form.patchValue(this.remedio);
        },
        (error: any) => {
          console.error(error);
        },
        () => {},
      )
    }
  }

  ngOnInit(): void {
    this.carregarRemedio();
    this.validation();
  }

  public validation(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(150)]],
      volume: ['', Validators.required],
      preco: ['', Validators.required],
      qtdEstoque: ['', Validators.required],
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

  public resetForm(): void {
    this.form.reset();
  }

  public salvarProduto(): void {
    if (this.form.valid) {

      if (this.estadoSalvar == 'post') {
        this.remedio = { ...this.form.value}
        this.remedioService.postRemedio(this.remedio).subscribe(
          () => this.toastr.success('Produto salvo com Sucesso', 'Sucesso!'),

          (error: any) => {
            console.error(error);
            this.toastr.error('Erro ao salvar Produto', 'Erro!')
          },
        );
      } else {
        this.remedio = {id: this.remedio.id, ...this.form.value}
        this.remedioService.putRemedio(this.remedio.id, this.remedio).subscribe(
          () => this.toastr.success('Produto salvo com Sucesso', 'Sucesso!'),

          (error: any) => {
            console.error(error);
            this.toastr.error('Erro ao salvar Produto', 'Erro!')
          },
        );
      }
    }
  }

}
