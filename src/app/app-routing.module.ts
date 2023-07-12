import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadioFormComponent } from './radio-form/radio-form.component';
import { DropDownComponent } from './drop-down/drop-down.component';

const routes: Routes = [
  {path : 'radioForm', component : RadioFormComponent},
  {path : 'droupDownForm', component : DropDownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
