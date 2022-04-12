import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CotizadorServiceService } from './cotizador-service.service';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss']
})
export class CotizadorComponent implements OnInit {

  constructor(private cotizadorService: CotizadorServiceService) { }
  public cotizadorWindow = false;
  public mostrarMasInformacion = false;
  public nivelCobertura = {
    basico: false,
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
  public precios = [];
  public itemFiltrado = [];
  public registro = null;

  public estados = [
    { clave: "AGUASCALIENTES", nombre: "AGUASCALIENTES" },
    { clave: "BAJA CALIFORNIA", nombre: "BAJA CALIFORNIA" },
    { clave: "BAJA CALIFORNIA SUR", nombre: "BAJA CALIFORNIA SUR" },
    { clave: "CHIHUAHUA", nombre: "CHIHUAHUA" },
    { clave: "CHIAPAS", nombre: "CHIAPAS" },
    { clave: "CAMPECHE", nombre: "CAMPECHE" },
    { clave: "CIUDAD DE MEXICO", nombre: "CIUDAD DE MEXICO" },
    { clave: "COAHUILA", nombre: "COAHUILA" },
    { clave: "COLIMA", nombre: "COLIMA" },
    { clave: "DURANGO", nombre: "DURANGO" },
    { clave: "GUERRERO", nombre: "GUERRERO" },
    { clave: "GUANAJUATO", nombre: "GUANAJUATO" },
    { clave: "HIDALGO", nombre: "HIDALGO" },
    { clave: "JALISCO", nombre: "JALISCO" },
    { clave: "MICHOACAN", nombre: "MICHOACAN" },
    { clave: "ESTADO DE MEXICO", nombre: "ESTADO DE MEXICO" },
    { clave: "MORELOS", nombre: "MORELOS" },
    { clave: "NAYARIT", nombre: "NAYARIT" },
    { clave: "NUEVO LEON", nombre: "NUEVO LEON" },
    { clave: "OAXACA", nombre: "OAXACA" },
    { clave: "PUEBLA", nombre: "PUEBLA" },
    { clave: "QUINTANA ROO", nombre: "QUINTANA ROO" },
    { clave: "QUERETARO", nombre: "QUERETARO" },
    { clave: "SINALOA", nombre: "SINALOA" },
    { clave: "SAN LUIS POTOSI", nombre: "SAN LUIS POTOSI" },
    { clave: "SONORA", nombre: "SONORA" },
    { clave: "TABASCO", nombre: "TABASCO" },
    { clave: "TLAXCALA", nombre: "TLAXCALA" },
    { clave: "TAMAULIPAS", nombre: "TAMAULIPAS" },
    { clave: "VERACRUZ", nombre: "VERACRUZ" },
    { clave: "YUCATAN", nombre: "YUCATAN" },
    { clave: "ZACATECAS", nombre: "ZACATECAS" }
  ];
  ngOnInit(): void {
    this.registro = new FormGroup({
      full_name: new FormControl('', Validators.required),
      age: new FormControl(Validators.min(0), Validators.max(64)),
      state: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      phone: new FormControl('', Validators.required),
    });
  }

  cambioCobertura(cobertura: string) {
    this.itemFiltrado = [];
    this.nivelCobertura = {
      basico: false,
      estandar: false,
      premium: false,
      todas: false,
    };
    this.nivelCobertura[cobertura] = true;
    if ( this.nivelCobertura.todas) {
      this.itemFiltrado = this.precios;
    } else {
      this.itemFiltrado = this.precios.filter(item => item.level === cobertura.toUpperCase());
    }    
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

  isInputNumber(evt) {
    let ch = String.fromCharCode(evt.which);

    if (!(/[0-9]/.test(ch))) {
      evt.preventDefault();
    }
  }

  getCotizaciones() {
    this.cotizadorService.getCotizaciones(this.registro.value).toPromise().then(arg => {
      this.precios = arg.data
      this.precios.forEach(element => {
        element.hospitals = element.hospitals.split(',');
        // element.price = Number(element.price),
        // element.deductible = Number(element.deductible)
      });
      this.cotizadorWindow = true;
    });
  }
}
