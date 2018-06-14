import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titreheader = 'Bienvenue sur mon site';

  prenom: string;

  constructor() { }

  ngOnInit() {

  }


}
