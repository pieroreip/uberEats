import { Component, OnInit } from '@angular/core';
import { interval,timer} from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  constructor(public ac:AlertController, public nav:NavController) { }
  conta:number=120
  segundo:number=10
  minuto:number=0
  estado:boolean=false

  async showMensaje(header:string,subHeader:string,mensaje:string){
    const alerta=await this.ac.create({
      header:header,
      subHeader:subHeader,
      message:mensaje,
      buttons:[
        {
          text:'Confirmar',
          handler:(()=>{
            this.nav.navigateRoot('/home')
          })
        }
      ]
    })
    alerta.present();
  }

  ngOnInit(): void {
    const contador = interval(1000);
    const subscription = contador.subscribe(async () => {
      if (this.segundo > 0) {
        this.segundo--;
      } else {
        if (this.minuto > 0) {
          this.minuto--;
          this.segundo = 59;
        } else {
          subscription.unsubscribe(); // Detener el intervalo cuando minutos y segundos lleguen a cero
          if(!this.estado){
            this.showMensaje('Pedido','Tiempo terminado','El pedido sera tomado')
          }
          
        }
      }
      this.conta--; // Reducir el contador total
      if (this.conta === 0) {
        subscription.unsubscribe(); // Asegurarse de detener el intervalo cuando el contador total llegue a cero
      }
    });
  }
  volver(){
  this.estado=true;
    this.nav.back();
  }

}
