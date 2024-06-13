import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaPageRoutingModule } from 'src/app/Inicio/cuenta/cuenta-routing.module';

import { CuentaPage } from 'src/app/Inicio/cuenta/cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule
  ],
  declarations: [CuentaPage]
})
export class CuentaPageModule {}
