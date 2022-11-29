import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private apiService: ApiService) {}
  @Input() pictogramsList: any;

 getPictograms(categoria: string) {
    this.apiService.getPictogramsByCategory(categoria).subscribe((data) => {
      this.pictogramsList = data;
    });
  }
}

