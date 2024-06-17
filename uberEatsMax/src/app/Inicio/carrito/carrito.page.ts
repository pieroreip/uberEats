import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(public nav:NavController ,private fs:FirebaseService) { }
  estado:boolean=false
  mensaje:string=""
  lista:any
  total:number=0


  ngOnInit() {
    this.getCarro();
  }
  getCarro(){
    this.fs.obtenerColeccion('Carrito').subscribe((res)=>{
      this.lista=res;
      this.mensaje=this.lista.length;
      if(this.lista.length>0){
        this.estado=true;
        this.total=0;
        this.lista.forEach((element:any) => {
          this.total+=element.precio_cantidad
        });
      }
      else{
        this.estado=false;
        this.total=0;
      }
    })
  }

  quitar(prod:any){
    this.fs.eliminarProdCarro(prod.id);
  }

  sumar(prod:any){
    prod.cantidad+=1;
    prod.precio_cantidad=prod.precio*prod.cantidad
    this.fs.agregarAlCarro(prod,prod.id);
  }
  restar(prod:any){
    if(prod.cantidad==1){
      this.fs.eliminarProdCarro(prod.id)
    }
    else{
      prod.cantidad-=1;
      prod.precio_cantidad=prod.precio*prod.cantidad
      this.fs.agregarAlCarro(prod,prod.id);
    }
  }
  volver(){
    this.nav.navigateRoot('/home');
  }
}
