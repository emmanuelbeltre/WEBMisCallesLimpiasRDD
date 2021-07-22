import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MispuntosService {

  constructor(public http: HttpClient) { }


  obtenerMisPuntos(cod_usuario: any){
    return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarInfMisPuntos?cod_usuario=' + cod_usuario);
  }
 
//   return this.http.get('https://localhost:44371/api/MisCallesLimpiasRD/ConsultarInfMisPuntos/' + cod_usuario);
// }



ProcesarOrden(cod_usuario: any, puntos_reportes: any){
  return this.http.get('http://localhost:53059/api/MisCallesLimpiasRD/ProcesarOrden?cod_usuario='+ cod_usuario+'&puntosacumulados=' + puntos_reportes);
}
}
