import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-wrapper',
  templateUrl: './articles-wrapper.component.html',
  styleUrls: ['./articles-wrapper.component.css']
})
export class ArticlesWrapperComponent implements OnInit {

  listGens: Array<string> = ['Jean Guy', 'René', 'Guy de Lusignan'];
  constructor() { }

  ngOnInit() {
  }

}
