import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtratoComponent } from './logged-area/extrato/extrato.component';
import { SharedModule } from './shared/shared.module';

//Os módulos importados nesse arquivo alimentam toda a aplicação

registerLocaleData(localePt, "pt")

@NgModule({ //decorator que indica que a classe é um module + metadados
  declarations: [ //importação dos componentes
    AppComponent,
    ExtratoComponent,
  ],

  imports: [ //importação de outros modules
    BrowserModule, //prepara a aplicação para rodar no browser - só é declarado 1 vez
    AppRoutingModule, //modulo de roteamento
    BrowserAnimationsModule, // required animations module 
    ToastrModule.forRoot(), // ToastrModule added
    SharedModule,
    HttpClientModule
  ],
  providers: [{ //services fornecidas
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent] //só é declarado 1 vez
})
export class AppModule { }
