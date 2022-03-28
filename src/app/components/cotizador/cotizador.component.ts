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

  public estados = [
    { clave: "AGS", nombre: "AGUASCALIENTES" },
    { clave: "BC",  nombre: "BAJA CALIFORNIA" },
    { clave: "BCS", nombre: "BAJA CALIFORNIA SUR" },
    { clave: "CHI", nombre: "CHIHUAHUA" },
    { clave: "CHS", nombre: "CHIAPAS" },
    { clave: "CMP", nombre: "CAMPECHE" },
    { clave: "CMX", nombre: "CIUDAD DE MEXICO" },
    { clave: "COA", nombre: "COAHUILA" },
    { clave: "COL", nombre: "COLIMA" },
    { clave: "DGO", nombre: "DURANGO" },
    { clave: "GRO", nombre: "GUERRERO" },
    { clave: "GTO", nombre: "GUANAJUATO" },
    { clave: "HGO", nombre: "HIDALGO" },
    { clave: "JAL", nombre: "JALISCO" },
    { clave: "MCH", nombre: "MICHOACAN" },
    { clave: "MEX", nombre: "ESTADO DE MEXICO" },
    { clave: "MOR", nombre: "MORELOS" },
    { clave: "NAY", nombre: "NAYARIT" },
    { clave: "NL",  nombre: "NUEVO LEON" },
    { clave: "OAX", nombre: "OAXACA" },
    { clave: "PUE", nombre: "PUEBLA" },
    { clave: "QR",  nombre: "QUINTANA ROO" },
    { clave: "QRO", nombre: "QUERETARO" },
    { clave: "SIN", nombre: "SINALOA" },
    { clave: "SLP", nombre: "SAN LUIS POTOSI" },
    { clave: "SON", nombre: "SONORA" },
    { clave: "TAB", nombre: "TABASCO" },
    { clave: "TLX", nombre: "TLAXCALA" },
    { clave: "TMS", nombre: "TAMAULIPAS" },
    { clave: "VER", nombre: "VERACRUZ" },
    { clave: "YUC", nombre: "YUCATAN" },
    { clave: "ZAC", nombre: "ZACATECAS" } 
];
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
