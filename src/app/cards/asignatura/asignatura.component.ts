import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css'],
})
export class AsignaturaComponent implements OnInit {
  pictogramsList: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getPictogramsByCategory('Alimento de origen animal')
      .subscribe((data) => {
        this.pictogramsList = data;
        console.log(data);
      });
  }
}

