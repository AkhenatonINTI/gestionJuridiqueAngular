import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from '../service/role.service';
import { Role } from '../model/role';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles: any[];
  role: Role = new Role();
  myForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder ,private roleService : RoleService) { }
  
    ngOnInit() {
      this.localRole();
      this.myForm = this.formBuilder.group(
        {
          libelle:['',Validators.required],
         
        }
      )
    }

  localRole()
  {
    this.roleService.getAllRole().subscribe
    (data => {this.roles = data;},
      error => {console.log(error);}
    )
    
  }
  
  deleteRole(role)
  {
    this.roleService.deleteRole(role.idRole).subscribe(
    () => {this.localRole();},
      error => {console.log(error);}
    )
    
  }
  createRole()
  {
    this.roleService.saveRole(this.role).subscribe(()=>{this.localRole();this.role=new Role();})
  }
  }
  