import { BmiCalculateComponent } from './components/bmi-calculate/bmi-calculate.component';
import { InfoComponent } from './components/info/info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'vki-nedir',component:InfoComponent},
  {path:'',component:BmiCalculateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
