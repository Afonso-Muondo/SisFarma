import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RemediosComponent } from './remedios/remedios.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: RemediosComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/:id', component: CadastroComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
