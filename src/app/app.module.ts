import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgbCarouselModule,
  NgbModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesFilmeComponent } from './pages/detalhes-filme/detalhes-filme.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListaFilmeComponent } from './shared/lista-filme/lista-filme.component';
import { CardFilmeComponent } from './shared/card-filme/card-filme.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalhesFilmeComponent,
    NavbarComponent,
    ListaFilmeComponent,
    CardFilmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    NgbNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
