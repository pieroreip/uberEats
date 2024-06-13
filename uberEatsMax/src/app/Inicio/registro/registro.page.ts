import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private as:AuthService, public ac:AlertController, public nc:NavController) { }

email:string=""
password:string=""
password2:string=""
  ngOnInit() {
  }

vaciarCampos(){
  this.email="";
  this.password="";
  this.password2="";
}


  async register() {
    //funcion para poder obtener resultado boolean
    if(this.password==this.password2){

    
    const result = await this.as.signUp(this.email, this.password);

    //variable para poder ser personalizada en el alert
    let mensaje = "";


    
    if (result !== true) {
      //this.errorMessage = result;
      mensaje = "Error en los campos";
    } else {
      mensaje = "Bienvenido, debes iniciar sesion ahora";
    }
    //creacion de alert
    const alert = await this.ac.create({
      header: 'Sesion',
      message: mensaje,
      buttons: [{
        text:'Ok',
        handler:()=>{
          if(result){
            this.nc.navigateRoot('/iniciar-sesion')
            console.log("se pudo")
            this.vaciarCampos();
          }
        }
      }],
    });

    await alert.present();
  }else{
    const alert = await this.ac.create({
      header:'Sesion',
      message:'La contraseña no coincide con la de confirmacion',
      buttons:[{
        text:'Ok'
      }]
    });
    await alert.present();
  }
}
}
