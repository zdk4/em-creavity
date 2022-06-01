import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { CotizadorServiceService } from './cotizador-service.service';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss']
})
export class CotizadorComponent implements OnInit {

  constructor(private cotizadorService: CotizadorServiceService) { }
  public mostrarMasInformacion = false;
  public nivelCobertura = {
    basico: true,
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
  public user = null;
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.user);
    this.getCotizaciones();
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

  getCotizaciones() {
    this.cotizadorService.getCotizaciones(this.user).toPromise().then(arg => {
      this.precios = arg.data
      this.precios.forEach(element => {
        console.log(element);
        element.hospitals = element.hospitals.split(',');
        // element.price = Number(element.price),
        // element.deductible = Number(element.deductible)
        this.cambioCobertura('basico');
      });
    });
  }
}
