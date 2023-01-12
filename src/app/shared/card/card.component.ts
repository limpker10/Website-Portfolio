import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('data') proyects : proyect[] = [];
}
export type proyect = {
  title : string,
  description : string,
  img: string,
  resources : string
}