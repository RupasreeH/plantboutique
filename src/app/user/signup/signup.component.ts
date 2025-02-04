import { Component } from '@angular/core';
import { AddressComponent } from "../address/address.component";
import { PlantsInterestComponent } from "../plants-interest/plants-interest.component";

@Component({
  selector: 'app-signup',
  imports: [AddressComponent, PlantsInterestComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
