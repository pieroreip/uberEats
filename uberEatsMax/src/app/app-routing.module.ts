import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'verificacion',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./Inicio/home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'direcciones',
    loadChildren: () => import('./Inicio/direcciones/direcciones.module').then( m => m.DireccionesPageModule)
  },
  {
    path: 'explorar',
    loadChildren: () => import('./Inicio/explorar/explorar.module').then( m => m.ExplorarPageModule)
  },
  {
    path: 'locales-por-categoria/:categoria',
    loadChildren: () => import('./Inicio/locales-por-categoria/locales-por-categoria.module').then( m => m.LocalesPorCategoriaPageModule)
  },
  {
    path: 'notificacion-promo',
    loadChildren: () => import('./Inicio/notificacion-promo/notificacion-promo.module').then( m => m.NotificacionPromoPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('src/app/Inicio/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./Inicio/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./Inicio/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./Inicio/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./Inicio/pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./Inicio/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },  {
    path: 'pedido',
    loadChildren: () => import('./Inicio/pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'boleta',
    loadChildren: () => import('./Inicio/boleta/boleta.module').then( m => m.BoletaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Inicio/perfil/perfil.module').then( m => m.PerfilPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
