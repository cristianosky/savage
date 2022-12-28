import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GeneradorService } from 'src/app/services/generador/generador.service';

@Component({
  selector: 'app-limpiador',
  templateUrl: './limpiador.component.html',
  styleUrls: ['./limpiador.component.css']
})
export class LimpiadorComponent {
  envio = new FormControl('')
  resultado = new FormControl('')
  constructor(private _GeneradorService: GeneradorService) { }

  limpiar() {
    console.log(this.envio.value);
    let data = {
      data: this.envio.value
    }

    this._GeneradorService.clearData(data).subscribe((res: any) => {
      console.log(res);
      this.resultado.setValue(res.data);
    });
  }
}
