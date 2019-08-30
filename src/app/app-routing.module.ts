import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AffaireComponent } from './affaire/affaire.component';
import { TribunalComponent } from './tribunal/tribunal.component';
import { TacheComponent } from './tache/tache.component';
import { PhaseComponent } from './phase/phase.component';


const routes: Routes = [

  {
    path : 'user',
    
    component : UserComponent
    
  },
  {
    path : 'role',
    
    component : RoleComponent
    
  },
  {
    path : 'affaire',
    
    component : AffaireComponent
    
  },
  {
    path : 'tribunal',
    
    component : TribunalComponent
    
  },
  {
    path : 'tache',
    
    component : TacheComponent
    
  },

  {
    path : 'phase',
    
    component : PhaseComponent
    
  },

  {
    path : 'update/:id',
    
    component : EditUserComponent
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
