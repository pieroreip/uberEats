import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private as:AuthService) { }

  usuario : any;

  async ngOnInit() {
    this.usuario = await this.as.getUser()
  }

}
