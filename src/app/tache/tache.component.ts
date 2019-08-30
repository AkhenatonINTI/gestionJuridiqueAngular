import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TacheService } from '../service/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {

  taches: any[];
tache: Tache = new Tache();
myForm: FormGroup;
selectedFiles:FileList;
currentFilesUpload: File;
  constructor(private formBuilder: FormBuilder ,private tacheService : TacheService,
    private router :Router) { }

  ngOnInit() {

    this.localTache();
    this.myForm = this.formBuilder.group(
      {
        dateCreationT:['',Validators.required],
        titreT:['',Validators.required],
        descriptionT:['',Validators.required],
        statutAudienceT:['',Validators.required]
  
      }
    )
  }

  localTache()
{
  this.tacheService.getAllTache().subscribe
  (data => {this.taches = data;},
    error => {console.log(error);}
  )
  
}

deleteTache(tache)
{
  this.tacheService.deleteTache(tache.idTache).subscribe(
  () => {this.localTache();},
    error => {console.log(error);}
  )
  
}

selectFile(event)
{
  this.selectedFiles = event.target.files;
}
createTache()
{
  this.currentFilesUpload = this.selectedFiles.item(0);
  
}
editTache(tache)
{
  localStorage.removeItem("editTacheId");
  localStorage.setItem("editTacheId",tache.idTache.toString());
  this.router.navigate(['update',tache.idTache]);

}

}
