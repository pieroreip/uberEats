import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-notificacion-promo',
  templateUrl: './notificacion-promo.page.html',
  styleUrls: ['./notificacion-promo.page.scss'],
})
export class NotificacionPromoPage implements OnInit {

  constructor(public nc:NavController) { }

  ngOnInit() {
  }
  volver(){
    this.nc.back();
  }
}
