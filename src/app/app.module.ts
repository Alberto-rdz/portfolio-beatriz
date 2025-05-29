import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 👇 IMPORTAMOS LOS COMPONENTES COMO STANDALONE
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  // 👇 USAMOS imports en lugar de declarations
  imports: [
    BrowserModule,
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
