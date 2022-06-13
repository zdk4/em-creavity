import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { CotizadorServiceService } from './cotizador-service.service';
import Swal from 'sweetalert2';

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
    if (this.user.state === 'CIUDAD DE MEXICO' || this.user.state === 'ESTADO DE MEXICO') {
      this.getCotizaciones();
    } else {
      this.getAlert();
    }
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
        element.hospitals = element.hospitals.split(',');
        // element.price = Number(element.price),
        // element.deductible = Number(element.deductible)
        this.cambioCobertura('basico');
      });
    });
  }

  getAlert() {
    const message = 'Por el momento solo tenemos tarifa en CDMX y Edo. Mexico. En breve un ejecutivo se pondrá en contacto con usted para hacerle llegar las cotizaciones';
    Swal.fire(
      '',
      message,
      'warning'
    )
  }
}
