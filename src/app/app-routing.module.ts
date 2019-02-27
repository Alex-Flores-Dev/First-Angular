import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one/page-one.component'
import { from } from 'rxjs';
const routes:Routes=[
  {path: 'one', component:PageOneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
  
})
export class AppRoutingModule { }
