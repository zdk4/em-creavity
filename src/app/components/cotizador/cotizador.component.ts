import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss']
})
export class CotizadorComponent implements OnInit {

  constructor() { }
  public cotizadorWindow = false;
  public mostrarMasInformacion = false;
  ngOnInit(): void {
  }

  sendUser() {
    this.cotizadorWindow = true;
  }
  
}
