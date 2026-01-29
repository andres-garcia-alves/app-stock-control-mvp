import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {

  usuario = '';

  constructor() { }

  ngOnInit() {
    this.usuario = (sessionStorage.getItem('user') != null) ? sessionStorage.getItem('user') : '';
  }
}
