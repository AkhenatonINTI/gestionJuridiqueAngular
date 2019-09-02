import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TribunalService } from '../service/tribunal.service';
import { Tribunal } from '../model/tribunal';

@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  styleUrls: ['./tribunal.component.css']
})
export class TribunalComponent implements OnInit {
  tribunals: any[];
  tribunal: Tribunal = new Tribunal();
  myForm: FormGroup;
  selectedFiles:FileList;
  currentFilesUpload: File;


  constructor(private formBuilder: FormBuilder ,private tribunalService : TribunalService,
    private router :Router) { }

  ngOnInit() {

    this.localTribunal();
    this.myForm = this.formBuilder.group(
      {
        adresseT:['',Validators.required],
        faxT:['',Validators.required],
        telT:['',Validators.required],
        regionT:['',Validators.required]

  
      }
    )
  }
  localTribunal()
  {
    this.tribunalService.getAllTribunal().subscribe
    (data => {this.tribunals = data;},
      error => {console.log(error);}
    )
    
  }
  
  deleteTribunal(tribunal)
  {
    this.tribunalService.deleteTribunal(tribunal.idTribunal).subscribe(
    () => {this.localTribunal();},
      error => {console.log(error);}
    )
    
  }
  
  selectFile(event)
  {
    this.selectedFiles = event.target.files;
  }
  createTribunal()
  {
    this.currentFilesUpload = this.selectedFiles.item(0);
    
  }
  editTribunal(tribunal)
  {
    localStorage.removeItem("editTribunalId");
    localStorage.setItem("editTribunalId",document.idTribunal.toString());
    this.router.navigate(['update',document.idTribunal]);
  
  }
}
