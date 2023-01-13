import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('data') proyects : proyect[] = [];
  @Input('card-icons') icons : icons[] =[];
}
export type proyect = {
  title : string,
  description : string,
  img: string,
  resources : string[]
}
export type icons = {
  name:string,
  path:string
}