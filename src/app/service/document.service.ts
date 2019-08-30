import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private httpClient: HttpClient) { }

  public getAllDocument(): Observable <any>

  {
return this.httpClient.get('http://localhost:9090/documents').map(response => response);
  }

  public getDocument(id:number): Observable <any>

  {
    return this.httpClient.get('http://localhost:9090/documents/'+id);
  }

  public saveDocument(user:any): Observable <any>

  {
    return this.httpClient.post('http://localhost:9090/documents',user);  
  }


  public deleteDocument(id:number): Observable <any>

  {
    return this.httpClient.delete('http://localhost:9090/documents/'+id);
  }

  public updateDocument(document:any):Observable<any>
  {
    var documentParse=JSON.parse(document);
    return this.httpClient.put('http://localhost:9090/documents/'+documentParse.idDocument,documentParse);
  }
}
