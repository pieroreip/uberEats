import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacionPromoPage } from './notificacion-promo.page';

const routes: Routes = [
  {
    path: '',
    component: NotificacionPromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificacionPromoPageRoutingModule {}
