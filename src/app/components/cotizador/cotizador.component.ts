import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss']
})
export class CotizadorComponent implements OnInit {

  constructor() { }
  public cotizadorWindow = false;
  public mostrarMasInformacion = false;
  public nivelCobertura = {
    basica: false,
    estandar: false,
    premium: false,
    todas: false,
  };

  public formaPago = {
    mensual: false,
    trimestral: false,
    semestral: false,
    anual: false,
  };

  public registro = new FormGroup({
    nombre: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.email),
    tellefono: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }

  sendUser() {
    this.cotizadorWindow = true;
  }
  
  cambioCobertura(cobertura: string) {
    this.nivelCobertura = {
      basica: false,
      estandar: false,
      premium: false,
      todas: false,
    };

    this.nivelCobertura[cobertura] = true;
  }

  cambioFormaPago(pago: string) {
    this.formaPago = {
      mensual: false,
      trimestral: false,
      semestral: false,
      anual: false,
    };

    this.formaPago[pago] = true;
  }
}
