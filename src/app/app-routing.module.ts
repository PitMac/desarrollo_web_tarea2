import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounoComponent } from './couno/couno.component';
import { CodosComponent } from './codos/codos.component';
import { CotresComponent } from './cotres/cotres.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },

  { path: 'componente1', component: CounoComponent },
  { path: 'componente2', component: CodosComponent },
  { path: 'componente3', component: CotresComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
