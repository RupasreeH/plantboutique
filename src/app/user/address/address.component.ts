import { Component } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { AddressModel } from './address.model';

@Component({
  selector: 'app-address',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  address !:AddressModel;
  street?:"";
  addressLine2 ?:""; 
  city?:"";
  state?:"";
  zipCode?:"";
  country?:"";
  pNumber?:"";

  addressForm = new FormGroup({
    street: new FormControl('',),
    addressLine2: new FormControl('',),
    city: new FormControl('',),
    state: new FormControl('',),
    zipCode: new FormControl('',{
      validators:[Validators.required]
    }),
    country: new FormControl('',),
    pNumber: new FormControl('',),
  })
ngOnInit(){
  this.address = new AddressModel(
    this.addressForm.value.street,
    this.addressForm.value.addressLine2,
    this.addressForm.value.city,
    this.addressForm.value.state,
    this.addressForm.value.zipCode,
    this.addressForm.value.country,
    this.addressForm.value.pNumber);
}

}
