import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaReproduccionesComponent } from './lista-reproducciones/lista-reproducciones.component';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    ListaReproduccionesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    MenubarModule,
    FormsModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    InputNumberModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
