import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalesPorCategoriaPageRoutingModule } from './locales-por-categoria-routing.module';

import { LocalesPorCategoriaPage } from './locales-por-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalesPorCategoriaPageRoutingModule
  ],
  declarations: [LocalesPorCategoriaPage]
})
export class LocalesPorCategoriaPageModule {}
