import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {

  constructor(private httpClient: HttpClient) { }

  public getAllAffaire(): Observable <any>

  {
return this.httpClient.get('http://localhost:9090/affaires').map(response => response);
  }

  public getAffaire(id:number): Observable <any>

  {
    return this.httpClient.get('http://localhost:9090/affaires/'+id);
  }

  public saveAffaire(user:any): Observable <any>

  {
    return this.httpClient.post('http://localhost:9090/affaires',user);  
  }


  public deleteAffaire(id:number): Observable <any>

  {
    return this.httpClient.delete('http://localhost:9090/affaires/'+id);
  }

  public updateAffaire(affaire:any):Observable<any>
  {
    var affaireParse=JSON.parse(affaire);
    return this.httpClient.put('http://localhost:9090/affaires/'+affaireParse.idAffaire,affaireParse);
  }
}
