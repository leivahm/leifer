import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  public listdeVideos:Array<any> = []

  constructor(private RestService:RestService){

  }

  ngOnInit(): void {
    this.cargarData();

  }

  public cargarData(){
    this.RestService.get('http://localhost:3000/posts')
    .subscribe(respuesta => {
      console.log(respuesta);
    })
  }
}
