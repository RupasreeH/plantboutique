import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-shopping',
  imports: [],
  standalone: true,
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {
  constructor(private http: HttpClient) {}
//still working
  getData() {
    return this.http.get('assets/plants-data.json');
    
  }
  ngOnInit() {
    this.getData().subscribe({
      next: (data) => {
        console.log("plants data", data);
      },
      error: (error) => {
        console.error("Error fetching data:", error);
      }
    });

    // this.getData().subscribe(data => {
    //   console.log("plants data", data);
    //   // work with your data here
    // });

    
  }
}
