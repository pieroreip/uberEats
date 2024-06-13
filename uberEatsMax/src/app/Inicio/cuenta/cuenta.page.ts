import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor() { }

  opciones=[
    {
      icono:"person",
      opcion:"Sesion",
      ruta:"/registro"
    },
    {
      icono:"people",
      opcion:"Perfil familiar",
      ruta:"/cuenta"
    },
    {
      icono:"car",
      opcion:"Viaje",
      ruta:"/cuenta"
    },
    {
      icono:"pricetags",
      opcion:"Promociones",
      ruta:"/cuenta"
    },
    {
      icono:"help-buoy",
      opcion:"Ayuda",
      ruta:"/cuenta"
    },


    {
      icono:"briefcase",
      opcion:"Configura tu perfil de negocios",
      ruta:"/cuenta"
    },
    {
      icono:"person-add",
      opcion:"Invitar a amigos",
      ruta:"/cuenta"
    },
    {
      icono:"eye-off",
      opcion:"Privacidad",
      ruta:"/cuenta"
    },
    {
      icono:"phone-portrait",
      opcion:"Comunicacion",
      ruta:"/cuenta"
    },


    {
      icono:"briefcase",
      opcion:"Genera ganancias",
      ruta:"/cuenta"
    },
    {
      icono:"mic",
      opcion:"Configuracion comando de voz",
      ruta:"/cuenta"
    },

    {
      icono:"information-circle",
      opcion:"Quienes somos",
      ruta:"/cuenta"
    },
  ]

  ngOnInit() {
  }

}
