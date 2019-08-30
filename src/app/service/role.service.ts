import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient: HttpClient) { }

  public getAllRole(): Observable <any>

  {
return this.httpClient.get('http://localhost:9090/roles').map(response => response);
  }

  public getRole(id:number): Observable <any>

  {
    return this.httpClient.get('http://localhost:9090/roles/'+id);
  }

  public saveRole(role:any): Observable <any>

  {
    return this.httpClient.post('http://localhost:9090/roles',role);  
  }

  public deleteRole(id:number): Observable <any>

  {
    return this.httpClient.delete('http://localhost:9090/roles/'+id);
  }

}
