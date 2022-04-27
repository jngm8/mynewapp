import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  promedio:number = 0;

  getSeries() {
    this.serieService.getSeries().subscribe(Serie => {
      this.series = Serie;
      this.promedio = this.getSeasonsAverage(Serie);
    });
  }
  ngOnInit() {
    this.getSeries();
  }

  getSeasonsAverage(series: Serie[]): number {
    let seasonsAverage: number = 0;
    series.forEach((serie) => seasonsAverage = seasonsAverage + serie.seasons);
    return (seasonsAverage/series.length);
  }
}
