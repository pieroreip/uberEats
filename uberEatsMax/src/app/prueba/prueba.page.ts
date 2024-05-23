import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  constructor(
    public navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  volver(){
    this.navCtrl.back()
  }
}
