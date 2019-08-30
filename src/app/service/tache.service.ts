import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class TacheService {


  constructor(private httpClient: HttpClient) { }
 
  public getAllTache(): Observable <any>

  {
return this.httpClient.get('http://localhost:9090/taches').map(response => response);
  }

  public getTache(id:number): Observable <any>

  {
    return this.httpClient.get('http://localhost:9090/taches/'+id);
  }

  public saveTache(tache:any): Observable <any>

  {
    return this.httpClient.post('http://localhost:9090/taches',tache);  
  }


  public deleteTache(id:number): Observable <any>

  {
    return this.httpClient.delete('http://localhost:9090/taches/'+id);
  }

  public updateTache(tache:any):Observable<any>
  {
    var tacheParse=JSON.parse(tache);
    return this.httpClient.put('http://localhost:9090/taches/'+tacheParse.idTache,tacheParse);
  }
}
