import { ComidasService } from '../services/comidas.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage implements OnInit {

  categorias: any[] = [];
  traducciones: { [key: string]: string } = {
    Beef: 'Carne de res',
    Chicken: 'Pollo',
    Dessert: 'Postres',
    Lamb: 'Cordero',
    Miscellaneous: 'Tacos',
    Pasta: 'Pastas',
    Pork: 'Carne de cerdo',
    Seafood: 'Mariscos',
    Side: 'Acompañamientos',
    Starter: 'Aperitivos',
    Vegan: 'Vegana',
    Vegetarian: 'Vegetariana',
    Breakfast: 'Desayuno',
    Goat: 'Carne de cabra'
  };

  constructor(private comidasService: ComidasService, private fire: FirebaseService,private router: Router) { }

  ngOnInit() {
    this.comidasService.getCategoriasConImagen().subscribe(categorias => {
      // Traducir los nombres de las categorías
      this.categorias = categorias.map(categoria => ({
        nombre: this.traducirCategoria(categoria.nombre),
        imagen: categoria.imagen
      }));
    });
  }

  traducirCategoria(nombreCategoria: string): string {
    return this.traducciones[nombreCategoria] || nombreCategoria;
  }
  mostrarLocales(categoria: string) {
    // Navegar a la página 'locales-por-categoria' y pasar el parámetro de la categoría
    this.router.navigate(['locales-por-categoria', categoria]);
  }

}
