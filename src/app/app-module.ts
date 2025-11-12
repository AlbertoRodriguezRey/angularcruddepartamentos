import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepartamentos } from './services/service.departamentos';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponent } from './components/details-component/details-component';
import { EditComponent } from './components/edit-component/edit-component';


@NgModule({
  declarations: [
    App,
    MenuComponent,
    DepartamentosComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceDepartamentos
  ],
  bootstrap: [App]
})
export class AppModule { }
