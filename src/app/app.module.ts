import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WhatComponent } from './what/what.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';
import { ServicesComponent } from './services/services.component';
import { BackComponent } from './back/back.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { ClientesComponent } from './clientes/clientes.component';
import { MeetComponent } from './meet/meet.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MenuHeaderComponent,
    WelcomeComponent,
    WhatComponent,
    RecentWorkComponent,
    ServicesComponent,
    BackComponent,
    OurBlogComponent,
    ClientesComponent,
    MeetComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
