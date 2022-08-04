import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remedios',
  templateUrl: './remedios.component.html',
  styleUrls: ['./remedios.component.scss']
})
export class RemediosComponent implements OnInit {

  public remedios: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRemedios();
  }

  public getRemedios(): void {
    this.http.get('https://localhost:5001/api/remedios').subscribe(
      response => this.remedios = response,
      error => console.log(error)
    );
  }

}
