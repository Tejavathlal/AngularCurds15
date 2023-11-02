import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsermodelModule {

  firstName!: string;
  lastName!: string;
  email!: string;
  mobile!: number;
  weight!: number;
  height!: number;
  bmi!: number;
  bmiResult!: string;
  gender!: string;
  requireTrainer!: string;
  package!: string;
  important!: string[];
  haveGymBefore!: string;
  enquiryDate!: string;
  id!: number;

}
