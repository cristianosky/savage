import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tarjetas } from 'src/app/models/generador/generador.model';
import { GeneradorService } from 'src/app/services/generador/generador.service';

@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html',
  styleUrls: ['./generador.component.css']
})
export class GeneradorComponent {
  formulario: FormGroup;
  tarjetas: Tarjetas[] = [];
  resultado = new FormControl('')
  cargando: boolean = false;
  constructor(private _generador: GeneradorService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      bin: ['', [Validators.required]],
      mes: ['random'],
      anio: ['random'],
      cvv: [''],
    });
  }

  generar() {
    const { bin, mes, anio, cvv } = this.formulario.value;
    let body = {
      data: `${bin}|${mes}|${anio}|${cvv ? cvv : 'random'}`,
    }
    this.cargando = true
    this._generador.generarData(body).subscribe((data: any) => {
      if(data.status == 'success'){
        this.resultado.setValue(data.data);
        let datos: string[] = data.data.split('\n');
        datos.forEach((dato: string) => {
          if(dato.length == 0) return; // Salta la ultima linea vacia del array de datos
          let separacion: string[] = dato.split('|');
          this.tarjetas.push({
            tarjeta: separacion[0],
            mes: separacion[1],
            anio: separacion[2],
            cvv: separacion[3],
          })
        });
      }
      this.cargando = false
    });
  }

}
