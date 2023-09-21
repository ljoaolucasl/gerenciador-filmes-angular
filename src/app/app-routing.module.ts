import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesFilmeComponent } from './pages/detalhes-filme/detalhes-filme.component';
import { ListaFilmeComponent } from './shared/lista-filme/lista-filme.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filmes/home',
    pathMatch: 'full',
  },
  {
    path: 'filmes/home',
    component: HomeComponent,
  },
  {
    path: 'filmes/detalhes/:id',
    component: DetalhesFilmeComponent,
  },
  {
    path: 'filmes/lista',
    component: ListaFilmeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
