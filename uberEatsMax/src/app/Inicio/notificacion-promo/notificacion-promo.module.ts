import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NotificacionPromoPageRoutingModule } from './notificacion-promo-routing.module';

import { NotificacionPromoPage } from './notificacion-promo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionPromoPageRoutingModule
  ],
  declarations: [NotificacionPromoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class NotificacionPromoPageModule {}
