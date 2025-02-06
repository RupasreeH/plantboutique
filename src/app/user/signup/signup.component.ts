import { Component, Input, ViewChild } from '@angular/core';
import { AddressComponent } from "../address/address.component";
import { PlantsInterestComponent } from "../plants-interest/plants-interest.component";
import { FormControl, FormGroup, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-signup',
  imports: [AddressComponent, PlantsInterestComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  @ViewChild(PlantsInterestComponent) plantsInterestComponent!: PlantsInterestComponent;
  @ViewChild(AddressComponent) addressComponent!: AddressComponent;
  // user :UserModel= new UserModel("","","","","", AddressModel,"");
  user !:UserModel;
  fname="";
  lname="";
  email="";
  password="";
  cnPassword=""

  signUpForm = new FormGroup({
  fname: new FormControl('',{
    validators:[Validators.required]
  }),
  lname: new FormControl('',{

  }),
  email: new FormControl('',{
    validators:[Validators.email, Validators.required]
  }),
  password: new FormControl('',{
    validators:[Validators.required, Validators.minLength(6)]
  }),
  cnPassword: new FormControl('',{
    validators:[Validators.required, Validators.minLength(6)]
  }),
})

OnSubmit(){
  console.log(this.signUpForm.value.fname);

 if(this.signUpForm.valid && this.plantsInterestComponent.plantInterestForm.valid && this.addressComponent.addressForm.valid){
// alert("yes your good to go");
this.user = new UserModel(this.signUpForm.value.fname,
  this.signUpForm.value.lname,
  this.signUpForm.value.email,
  this.signUpForm.value.password,
  this.signUpForm.value.cnPassword,
  this.addressComponent.address,this.plantsInterestComponent.plantInterest)
console.log("signupformdata", this.user);


}
}


}
