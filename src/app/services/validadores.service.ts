import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {rejects} from 'assert';

interface ErrorValidate {
    [s: string]: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control: FormControl): ErrorValidate {
    if (control.value?.toLowerCase() === 'herrera') {
      return {
        noHerrera: true
      };
    }
    return null;
  }

  passwordsIguales(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1];
      const pass2Control = formGroup.controls[pass2];
      if ( pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors( {noEsIgual: true});
      }
    };
  }

  existeUSuario(control: FormControl): Promise <any> | Observable <any> {
    if (!control.value) {
      return Promise.resolve(null);
    }
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if (control.value === 'strider') {
          resolve({existe: true});
        } else {
          resolve(null);
        }
      }, 3500);
    });
  }
}
