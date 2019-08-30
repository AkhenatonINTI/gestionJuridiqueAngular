import { Component } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'INTI Formation';
  person : string ='John Doe';
  alignement : string='left';
  

  modifierPersonne()
  {
    this.person='Jane Doe';
  }
  tel:number;
  tel2:number;
  calc;
 
 
  calculer()
  {
    this.calc=this.tel+this.tel2;
  }
}
