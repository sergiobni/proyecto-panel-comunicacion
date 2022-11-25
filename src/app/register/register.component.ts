import { Component, OnInit } from '@angular/core';
// import { SesionService } from '../services/sesion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  nombre: string | null = '';
  apellido: string | null = '';
  constructor()
  // (private Sesion: SesionService)
  {
    // this.getData();
  }

  ngOnInit(): void {}
}

  // getData() {
  //   this.nombre = localStorage.getItem('Nombre');
  //   this.apellido = localStorage.getItem('Apellido');
  //   this.email = localStorage.getItem('Email')
  // }

