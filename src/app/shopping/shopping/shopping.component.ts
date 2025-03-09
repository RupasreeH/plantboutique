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

    this.http.get<any[]>('assets/data/plants-data.json')
      .subscribe({
        next: (data) => {
          this.plants = data;
        },
        error: (error) => {
          console.error('Failed to fetch data:', error);
        }
      });

  }
}
