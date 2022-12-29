import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { verificarIP } from 'src/app/models/generador/generador.model';
import { GeneradorService } from 'src/app/services/generador/generador.service';

@Component({
  selector: 'app-verip',
  templateUrl: './verip.component.html',
  styleUrls: ['./verip.component.css']
})
export class VeripComponent {
  ip = new FormControl('')
  data: verificarIP | null = null;
  cargando: boolean = false;

  constructor(private _GeneradorService: GeneradorService) { }

  varificarIP() {
    if(!this.ip.value) return
    this.cargando = true;
    let body = {
      data: this.ip.value
    }
    this._GeneradorService.verificarIP(body).subscribe(
      (data: any) => {
        if(data.status === "success") {
          var regex = /(\d+)/g;
          this.data = {
            ...data.result,
            valor: parseInt(data.result.score.match(regex)[0]) == 0 ? 0.5 : parseInt(data.result.score.match(regex)[0])
          };
        }
        this.cargando = false;
      }
    );
  }

}
