import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.scss']
})
export class StartseiteComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Brennholzbestellung', cols: 3, rows: 3,
    img: ''},
    {text: 'Holztransporte', cols: 1, rows: 6,img: ''},
    {text: 'Lohnspalten', cols: 1, rows: 6,img: ''},
    {text: 'Sonderfällungen', cols: 2, rows: 3,img: '../../assets/images/teamNew.png'},
    {text: 'Winterdienst', cols: 3, rows: 3, img: ''}, {text: 'Winterdienst', cols: 3, rows: 3, img: ''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
export interface Tile {
  rows: number;
  text: string;
  img: string
  cols: number;
}
