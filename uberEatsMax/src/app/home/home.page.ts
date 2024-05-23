import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}

  mensaje:String="mensajito"
  title="Holaaa"

  ngOnInit(){
    this.mensaje="oye"
  }
  
  cambiar(){

  }

}
