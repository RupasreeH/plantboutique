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
  plants:any[]=[];
//still working
  getData() {
    return this.http.get('./assets/data/plants-data.json');
    
  }
  ngOnInit() {

    this.plants = [
      { id: 1, name: 'Neem', cost: 25, About: 'Plant description Plant description Plant description Plant description Plant description Plant description' },
      { id: 2, name: 'Vinka', cost: 30, About: 'bob@example.com' },
      { id: 3, name: 'Jasmin', cost: 28, About: 'charlie@example.com' },
      { id: 1, name: 'Neem', cost: 25, About: 'Plant description Plant description Plant description Plant description Plant description Plant description' },
      { id: 2, name: 'Vinka', cost: 30, About: 'bob@example.com' },
      { id: 3, name: 'Jasmin', cost: 28, About: 'charlie@example.com' },
      { id: 1, name: 'Neem', cost: 25, About: 'Plant description Plant description Plant description Plant description Plant description Plant description' },
      { id: 2, name: 'Vinka', cost: 30, About: 'bob@example.com' },
    ];

    this.getData().subscribe({
      next: (data) => {
        //this.plants = data;
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
