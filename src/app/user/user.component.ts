import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
users: any[];
user: User = new User();
myForm: FormGroup;
selectedFiles:FileList;
currentFilesUpload: File;

  constructor(private formBuilder: FormBuilder ,private userService : UserService,
    private router :Router) { }

  ngOnInit() {
    this.localUser();
    this.myForm = this.formBuilder.group(
      {
        nomU:['',Validators.required],
        prenomU:['',Validators.required],
        emailU:['',Validators.required],
        file:['',Validators.required]
  //  this.users = this.userService.users
      }
    )
  }

localUser()
{
  this.userService.getAllUtilisateur().subscribe
  (data => {this.users = data;},
    error => {console.log(error);}
  )
  
}

deleteUser(user)
{
  this.userService.deleteUtilisateur(user.idUtilisateur).subscribe(
  () => {this.localUser();},
    error => {console.log(error);}
  )
  
}

selectFile(event)
{
  this.selectedFiles = event.target.files;
}
createUser()
{
  this.currentFilesUpload = this.selectedFiles.item(0);
  
}
editUser(user)
{
  localStorage.removeItem("editUserId");
  localStorage.setItem("editUserId",user.idUtilisateur.toString());
  this.router.navigate(['update',user.idUtilisateur]);

}

}
