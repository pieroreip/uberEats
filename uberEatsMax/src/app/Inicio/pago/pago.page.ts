import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  constructor(public fs:FirebaseService) { }
  lista:any
  cantidad:number=0
  subtotal_estimado:number=0
  costo_envio:number=1500
  tarifas:number=261
  total:number=0

  isOpen:boolean=false

  ngOnInit() {
    this.getCarro()
  }

  setOpen(abrir:boolean){
    this.isOpen=abrir;
  }

  getCarro(){
    this.fs.obtenerColeccion('Carrito').subscribe((res)=>{
      this.lista=res;
      this.cantidad=this.lista.length;
      if(this.lista.length>0){
        this.subtotal_estimado=0;
        this.lista.forEach((element:any) => {
          this.subtotal_estimado+=element.precio_cantidad
        });
        this.total=this.subtotal_estimado+this.costo_envio+this.tarifas
      }
      else{
        this.subtotal_estimado=0;
      }
    })
  }


}
