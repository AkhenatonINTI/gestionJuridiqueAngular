import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class TribunalService {

  constructor(private httpClient: HttpClient) { }

  public getAllTribunal(): Observable <any>

  {
return this.httpClient.get('http://localhost:9090/tribunals').map(response => response);
  }

  public getTribunal(id:number): Observable <any>

  {
    return this.httpClient.get('http://localhost:9090/tribunals/'+id);
  }

  public saveTribunal(user:any): Observable <any>

  {
    return this.httpClient.post('http://localhost:9090/tribunals',user);  
  }


  public deleteTribunal(id:number): Observable <any>

  {
    return this.httpClient.delete('http://localhost:9090/tribunals/'+id);
  }

  public updateTribunal(tribunal:any):Observable<any>
  {
    var tribunalParse=JSON.parse(tribunal);
    return this.httpClient.put('http://localhost:9090/tribunals/'+tribunalParse.idTribunal,tribunalParse);
  }
}
