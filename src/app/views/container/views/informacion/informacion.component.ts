import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FakeData } from 'src/app/models/generador/generador.model';
import { GeneradorService } from 'src/app/services/generador/generador.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  codigo = new FormControl('')
  data: FakeData | null = null
  cargando: boolean = false
  constructor(private _GeneradorService: GeneradorService) { }

  generarData(){
    this.cargando = true
    this._GeneradorService.genearInfo({data: this.codigo.value}).subscribe((res: any) => {
      this.cargando = false
      if(res.status == 'success'){
        this.data = res.result
      }
    })
  }
}
