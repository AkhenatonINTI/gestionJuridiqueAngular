import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AffaireService } from '../service/affaire.service';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.css']
})
export class AffaireComponent implements OnInit {

  affaires: any[];
affaire: Affaire = new Affaire();
myForm: FormGroup;
selectedFiles:FileList;
currentFilesUpload: File;

  constructor(private formBuilder: FormBuilder ,private affaireService : AffaireService,
    private router :Router) { }

  ngOnInit() {

    this.localAffaire();
    this.myForm = this.formBuilder.group(
      {
        titreA:['',Validators.required],
        descriptionA:['',Validators.required],
        referenceA:['',Validators.required],
        statutA:['',Validators.required]
  
      }
    )
  }
  localAffaire()
  {
    this.affaireService.getAllAffaire().subscribe
    (data => {this.affaires = data;},
      error => {console.log(error);}
    )
    
  }
  
  deleteAffaire(affaire)
  {
    this.affaireService.deleteAffaire(affaire.idAffaire).subscribe(
    () => {this.localAffaire();},
      error => {console.log(error);}
    )
    
  }
  
  selectFile(event)
  {
    this.selectedFiles = event.target.files;
  }
  createAffaire()
  {
    this.currentFilesUpload = this.selectedFiles.item(0);
    
  }
  editAffaire(affaire)
  {
    localStorage.removeItem("editAffaireId");
    localStorage.setItem("editAffaireId",affaire.idAffaire.toString());
    this.router.navigate(['update',affaire.idAffaire]);
  
  }
}
