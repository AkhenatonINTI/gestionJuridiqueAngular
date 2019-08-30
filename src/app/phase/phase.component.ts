import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhaseService } from '../service/phase.service';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.css']
})
export class PhaseComponent implements OnInit {

  phases: any[];
  phase: Phase = new Phase();
  myForm: FormGroup;
  selectedFiles:FileList;
  currentFilesUpload: File;


  constructor(private formBuilder: FormBuilder ,private phaseService : PhaseService,
    private router :Router) { }

  ngOnInit() {

    this.localPhase();
    this.myForm = this.formBuilder.group(
      {
        nomP:['',Validators.required],
        dateDebutP:['',Validators.required],
        dateFinP:['',Validators.required]

  
      }
    )
         }

  localPhase()
  {
    this.phaseService.getAllPhase().subscribe
    (data => {this.phases = data;},
      error => {console.log(error);}
    )
    
  }
  
  deletePhase(phase)
  {
    this.phaseService.deletePhase(phase.idPhase).subscribe(
    () => {this.localPhase();},
      error => {console.log(error);}
    )
    
  }
  
  selectFile(event)
  {
    this.selectedFiles = event.target.files;
  }
  createPhase()
  {
    this.currentFilesUpload = this.selectedFiles.item(0);
    
  }
  editPhase(phase)
  {
    localStorage.removeItem("editPhaseId");
    localStorage.setItem("editPhaseId",phase.idPhase.toString());
    this.router.navigate(['update',phase.idPhase]);
  
  }

}
