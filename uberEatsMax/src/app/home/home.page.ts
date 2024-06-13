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
  listaCategoria=[
    { categoria:'Desayuno' },
    { categoria:'Cafe' },
    { categoria:'Retail' },
    { categoria:'Super' },
    { categoria:'Farmacia' },

    { categoria:'Opciones saludables' },
    { categoria:'Helado' },
    { categoria:'BBQ' },
    { categoria:'Articulos para mascota' },
    { categoria:'Alitas' },
    { categoria:'Comidas reconfortables' },
  ]
  listaFiltros=[
    { filtro: 'Ofertas' },
    { filtro: 'Menos de 30 minutos' },
    { filtro: 'Costo' },
    { filtro: 'Costo de envio' },

    { filtro: 'Paga con pluxee' },
    { filtro: 'Tipo de dieta' },
    { filtro: 'Mayor clasificacion' },
    { filtro: 'Organizar' },
  ]

  listaTiendas=[
    {
      imagen:"",
      tienda:""
    }
  ]


  ngOnInit(){
    this.mensaje="oye"
  }
  
  cambiar(){

  }

}
