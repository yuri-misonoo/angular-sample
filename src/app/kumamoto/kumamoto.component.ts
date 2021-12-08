import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kumamoto',
  templateUrl: './kumamoto.component.html',
  styleUrls: ['./kumamoto.component.scss']
})
export class KumamotoComponent implements OnInit {
  title!:string;
  subtitle!:string;
  message!:string;

  constructor() { }

  ngOnInit(): void {
    this.title = "熊本";
    this.subtitle = "Kumamoto";
    this.message = "山あり海あり、ご飯もおいしい熊本を紹介！"
  }

}
