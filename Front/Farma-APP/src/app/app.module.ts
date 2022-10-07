import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxCurrencyModule } from 'ngx-currency';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemediosComponent } from './remedios/remedios.component';
import { NavComponent } from './shared/nav/nav.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { RemedioService } from './services/remedio.service';
import { FooterComponent } from './shared/footer/footer.component';
import { TableComponent } from './shared/table/table.component';
import { TituloComponent } from './shared/titulo/titulo.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    RemediosComponent,
    NavComponent,
    BodyComponent,
    HomeComponent,
    CadastroComponent,
    FooterComponent,
    TableComponent,
    TituloComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    progressBar: true
    })
  ],
  providers: [RemedioService,
    { provide: LOCALE_ID, useValue: 'pt' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
