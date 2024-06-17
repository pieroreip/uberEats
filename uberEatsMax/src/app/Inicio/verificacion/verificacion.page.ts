import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage implements OnInit {

  constructor(private router: Router, private as:AuthService ) { }

  desplazamientoActivado = false;
  

 async ngOnInit() {
    setTimeout(async () => {
      const uid=await this.as.getUser()
      if(uid){
      this.router.navigate(['/home'])
      }
      else {
        this.router.navigate(['/iniciar-sesion'])
      }
    this.desplazamientoActivado= true;},3000);
  }

}
