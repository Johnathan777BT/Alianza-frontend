import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { MatIconModule  } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListarclientesComponent } from './componentes/listarclientes/listarclientes.component';
import { CrearclientesComponent } from './componentes/crearclientes/crearclientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {DatePipe} from '@angular/common';



@NgModule({
  

  declarations: [
    AppComponent,
    SidenavComponent,
    ListarclientesComponent,
    CrearclientesComponent,
  ],
  imports: [
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient
    (withFetch(),
    
  ),
    DatePipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
