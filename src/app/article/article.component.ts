import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() proprio: string;

  @Input() description: string;

  @Input() id: number;

 contenuAnnonce: string;

  constructor() { }

  ngOnInit() {
    this.contenuAnnonce = 'La maison à ' + this.proprio;
  }

}
