import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class GeneradorService {

  url = environment.api;
  constructor(private _http: HttpClient, private _AppService: AppService) { }

  generarData(body: any) {
    return this._http.post(`${this.url}gen`, body);
  }

  clearData(body: any) {
    return this._http.post(`${this.url}clear`, body);
  }
}
