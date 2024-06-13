import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalesPorCategoriaPage } from './locales-por-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: LocalesPorCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalesPorCategoriaPageRoutingModule {}
