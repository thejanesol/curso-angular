# Curso de Angular

### Preparando o ambiente

* Node (npm incluso)
* Typescript: npm install -g typescript
* Angular: npm install @angular cli -g

### Criando primeiro projeto
* Comando para criar projeto: ng new **aplicacao** 
* Comando para rodar o projeto: cd **aplicacao** && ng serve **aplicacao**

### Criação de componentes
* Automaticamente: ng generate component **header**
* Manualmente: criar a pasta do componente, arquivos de style (scss), template (html), classe (ts com os metadados e import do angular), chamar no app.module e teplate principal

### Extensões úteis no VS code
* angular language service
* ts lint
* typescript hero
* + extensão no chrome: augury

### Padronização de commits
* feat: nova funcionalidade no app
* fix: solução de bugs
* chore: tudo que não se encaixa nos dois anteriores...

### Anotações minimalistas das práticas
* **Data, property e event binding + two way data binding**
* **Diretivas** (ngif, ngfor, ngclass)
* **View encapsulation** (default = encapsulation: viewEncapsulation.Emulated)
* **[Life Cycle Hooks](https://angular.io/guide/lifecycle-hooks)** - ciclo de vida dos componentes
    * construtor
    * ngOnChanges (quando o valor do propertyBinding atualizado)
    * ngOnInit (componente inicializado)
    * ngOnCheck - a cada ciclo de verificação de mudanças (ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked)
    * ngOnDestroy
* **Pipes** - tubos que transformam!!
    * pipes built in: currency, decimalpipe (formatação do número por parametros), date, uppercase...
* **Localization**
* **Rotas**
    * router link
* **Bootstrap**
    * referencia do bootstrap (cdn) no index.html - evitar! Não é uma boa prática!
    * npm install bootstrap
* **Services** (ex: ng generate service `extrato/extrato` - criando service na pasta do comp extrato) e injeção de dependência
* **Módulos** (ex: ng generate module `shared` e importar no módulo principal + exportar todos os componentes que foram criados no novo módulo no array exports, dentros dos metadados)
    * vantagem de separar a aplicação em módulos: carregamento sob demanda
* Chamadas HTTP (request/cliente = json - HTTP methods - server)
    * HTTP client, módulo do angular p/ comunicação com o backend a ser importado no app.module
* Interfaces
* Variáveis de Ambiente
* Loading e Tratamento de Erro
* Operadores do RxJS
* Observables e RxJS
    * promises para tratar dados asincronos
* Paginação
* Rotas parametrizadas (angular router - router, activatedRouter)
* Formulários (template driven: html vs data driven: reativo)
    * FormsModule
    * Diretiva ngModel
    * Validação
    * Estilos na validação dos campos
    * ViewChild
* 


# Aplicacao

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
