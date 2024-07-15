import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private as:AuthService, public nav:NavController, public ac:AlertController) { }

  usuario : any;

  async ngOnInit() {
    this.usuario = await this.as.getUser()
  }
  volver(){
    this.nav.back();
  }
  async cerrar(){
    const alerta=await this.ac.create({
      header:'Sesion',
      subHeader:'Cerrar Sesion',
      message:'¿Estas seguro de cerrar sesion?',
      buttons:[
        {
          text:'Confirmar',
          handler:(async ()=>{
            await this.as.logOut().then(()=>{this.nav.navigateRoot('/');});
          })
        },
        {text:'Cancelar'}
      ]
    });
    alerta.present();
  }
}
