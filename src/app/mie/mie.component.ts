import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mie',
  templateUrl: './mie.component.html',
  styleUrls: ['./mie.component.scss']
})
export class MieComponent implements OnInit {
  title!:string;
  subtitle!:string;
  message!:string;

  constructor() { }

  ngOnInit(): void {
    this.title = '三重';
    this.subtitle = 'Mie';
    this.message = 'それ三重なんです！！名古屋や静岡じゃありません！';
  }

}
