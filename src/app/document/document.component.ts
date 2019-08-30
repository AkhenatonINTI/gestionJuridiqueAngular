import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentService } from '../service/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  documents: any[];
  document: Document = new Document();
  myForm: FormGroup;
  selectedFiles:FileList;
  currentFilesUpload: File;

  constructor(private formBuilder: FormBuilder ,private documentService : DocumentService,
    private router :Router) { }

  ngOnInit() {

    this.localDocument();
    this.myForm = this.formBuilder.group(
      {
        dateCreationD:['',Validators.required],
        nomD:['',Validators.required],
        descriptionD:['',Validators.required]
  
      }
    )
  }
  localDocument()
  {
    this.documentService.getAllDocument().subscribe
    (data => {this.documents = data;},
      error => {console.log(error);}
    )
    
  }
  
  deleteDocument(document)
  {
    this.documentService.deleteDocument(document.idDocument).subscribe(
    () => {this.localDocument();},
      error => {console.log(error);}
    )
    
  }
  
  selectFile(event)
  {
    this.selectedFiles = event.target.files;
  }
  createDocument()
  {
    this.currentFilesUpload = this.selectedFiles.item(0);
    
  }
  editDocument(document)
  {
    localStorage.removeItem("editDocumentId");
    localStorage.setItem("editDocumentId",document.idDocument.toString());
    this.router.navigate(['update',document.idDocument]);
  
  }
  
}
