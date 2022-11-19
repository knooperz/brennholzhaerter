import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holztransporte',
  templateUrl: './holztransporte.component.html',
  styleUrls: ['./holztransporte.component.scss']
})
export class HolztransporteComponent implements OnInit {
  greatImag: string = "../../assets/images/laster.jpg";
  images: string[] = ["../../assets/images/laster.jpg", "../../assets/images/brennholz.jpg", "../../assets/images/teamNew.png" ]

  constructor() { }

  ngOnInit(): void {
  }

  changeImage(path: string){
    this.greatImag = path;
  }
}
