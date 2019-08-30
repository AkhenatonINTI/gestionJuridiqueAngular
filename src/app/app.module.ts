import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule }from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { SqrtPipe } from './sqrt.pipe';
import { RoleComponent } from './role/role.component';
import { HttpClientModule } from '@angular/common/http';
import { RoleService } from './service/role.service';
import { UserService } from './service/user.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TacheComponent } from './tache/tache.component';
import { AffaireComponent } from './affaire/affaire.component';
import { DocumentComponent } from './document/document.component';
import { TribunalComponent } from './tribunal/tribunal.component';
import { PhaseComponent } from './phase/phase.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MyDirectiveDirective,
    SqrtPipe,
    RoleComponent,
    EditUserComponent,
    TacheComponent,
    AffaireComponent,
    DocumentComponent,
    TribunalComponent,
    PhaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RoleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
