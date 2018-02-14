import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // RECIBE COMO PARAMETRO UN ELEMENTO HTML y con esto ya se puede tener una referencia sin importar en que compomente estoy
  @ViewChild('txtPorcentaje') txtPorcentaje: ElementRef;

  // tslint:disable-next-line:no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda'; // se van a recibir desde fuera *NOTA* cuando inicializo un valor en la propiedad ese valor es el que tendra por defecto
  // *NOTA* si aca el atributo se llama "leyenda" dentro del html del padre se puede mandar el atributo con llaves cuadradas [leyenda]="" (progress.component.html)
  @Input() porcentaje: number = 50;

  // tslint:disable-next-line:no-output-rename
  @Output('nombrecualquiera') cambioValor: EventEmitter<number> = new EventEmitter();
  // Emitir un numero como un evento

  constructor() {
    // console.log('Leyenda constructor', this.leyenda);
    // console.log('Porcentaje constructor', this.porcentaje);
  }

  ngOnInit() {
    // console.log('Leyenda onInit', this.leyenda);
    // console.log('Porcentaje onInit', this.porcentaje);
  }

  cambiarValor( valor: number ) {

    if ( this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
    }

    if ( this.porcentaje <= 0 && valor < 0 ) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit( this.porcentaje );
    // emite el valor de la variable porcentaje PERO EN ESTE PRECISO MOMENTO, osea despues de realizar las validaciones
  }

  onChanges( newValue: number ) {

    // let elemHTML: any = document.getElementsByName( 'porcentaje' )[0];
    // console.log( elemHTML.value );
    // console.log( this.txtPorcentaje );

    // console.log('newValue: ', newValue);
    // console.log( event );

    if ( newValue > 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <= 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    // elemHTML.value = this.porcentaje;
    this.txtPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );

    this.txtPorcentaje.nativeElement.focus();
  }

}
