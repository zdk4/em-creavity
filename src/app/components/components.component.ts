import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
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
    public registro = null;
    constructor(public router: Router){}

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }

        this.registro = new FormGroup({
            full_name: new FormControl('', Validators.required),
            age: new FormControl(Validators.min(0), Validators.max(64)),
            state: new FormControl('', Validators.required),
            gender: new FormControl('', Validators.required),
            email: new FormControl('', Validators.email),
            phone: new FormControl('', Validators.required),
          });
    }

    sendUser() {
        sessionStorage.setItem("user",JSON.stringify(this.registro.value));
        this.router.navigate(['cotizador']);
    }

    isInputNumber(evt) {
        let ch = String.fromCharCode(evt.which);
    
        if (!(/[0-9]/.test(ch))) {
          evt.preventDefault();
        }
      }
}
