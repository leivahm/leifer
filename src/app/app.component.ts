import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  public listdeVideos:Array<any> = []

  ngOnInit(): void {

    this.listdeVideos = [
      {
        title:'Video 1',
        subtitle:'Subtitle video 1',
        img:'https://picsum.photos/536/354'
      },
      {
        title:'Video 2',
        subtitle:'Subtitle video 2',
        img:'https://picsum.photos/536/353'
      },
      {
        title:'Video 3',
        subtitle:'Subtitle video 3',
        img:'https://picsum.photos/536/352'
      }

    ]

  }
}
