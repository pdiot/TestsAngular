import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-wrapper',
  templateUrl: './articles-wrapper.component.html',
  styleUrls: ['./articles-wrapper.component.css']
})
export class ArticlesWrapperComponent implements OnInit {

  listMaisons = [
    {
      id: 1,
      proprio:'Jean Guy',
      description:'Charmante propriété de bord de mer'
    },
    {
      id: 2,
      proprio:'René',
      description:'Charmante propriété de bord de rocade'
    },
    {
      id: 3,
      proprio:'Guy de Lusignan',
      description:'De la MERDE'
    }
    ];

  constructor() { }

  ngOnInit() {
  }

}
