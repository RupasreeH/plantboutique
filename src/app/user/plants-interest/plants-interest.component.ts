import { Component, Output, EventEmitter, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-plants-interest',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './plants-interest.component.html',
  styleUrl: './plants-interest.component.css'
})
export class PlantsInterestComponent implements OnInit{
// @Output() textChanged = new EventEmitter<any>();
//plantInterest = new FormControl('');
plantInterest?:"";
plantInterestForm = new FormGroup({
  plantInterest: new FormControl('',{
    validators:[Validators.required]
  }
),

})
ngOnInit() {
 // this.plantInterest = this.
}

}
