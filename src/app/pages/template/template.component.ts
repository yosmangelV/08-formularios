import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PaisService} from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: '',
    correo: '',
    apellido: '',
    pais: '',
    genero: ''
  };
  paises: any[] =  [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe( data => {
      this.paises = data;
      this.paises.unshift({
        nombre: '[Seleccione un Pais]',
        codigo: ''
      });
      console.log(this.paises);
    });
  }

  guardar(forma: NgForm) {
    if (forma.invalid) {
      Object.values(forma.controls).forEach( control => {
        control.markAsTouched();
      });
    }
    console.log(forma);
  }
}
