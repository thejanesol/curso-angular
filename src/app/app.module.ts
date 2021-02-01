import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localePt, "pt")

@NgModule({ //decorator que indica que a classe é um module + metadados
  declarations: [ //importação dos componentes
    AppComponent,
    LoginComponent,
    ExtratoComponent,
  ],

  imports: [ //importação de outros modules
    BrowserModule, //prepara a aplicação para rodar no browser - só é declarado 1 vez
    AppRoutingModule, //modulo de roteamento
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ //services fornecidas
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent] //só é declarado 1 vez
})
export class AppModule { }
