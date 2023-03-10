import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent  {
  
  proyects : proyect[] = [{
    title : "proyecto1",
    description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eaque ab at qui ut repellat! Suscipit, facere ea porro ab praesentium exercitationem magni laboriosam inventore, expedita nulla mollitia recusandae ad. ",
    img: "../../../assets/img/image-background-desktop.jpg",
    resources : ["angular","angular"]
  },
  {
    title : "proyecto1",
    description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eaque ab at qui ut repellat! Suscipit, facere ea porro ab praesentium exercitationem magni laboriosam inventore, expedita nulla mollitia recusandae ad. ",
    img: "../../../assets/img/image-background-desktop.jpg",
    resources : ["angular","angular"]
  },
  {
    title : "proyecto1",
    description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eaque ab at qui ut repellat! Suscipit, facere ea porro ab praesentium exercitationem magni laboriosam inventore, expedita nulla mollitia recusandae ad. ",
    img: "../../../assets/img/image-background-desktop.jpg",
    resources : ["angular","angular"]
  }]

  icons : { name:string,path:string }[] = [
    {name:"angular",path:"../../assets/icons/angular.svg"},
    {name:"react",path:"../../assets/icons/react.svg"},
    {name:"scss",path:"../../assets/icons/scss.svg"},
    {name:"django",path:"../../assets/icons/django.svg"},
    {name:"springBoot",path:"../../assets/icons/spring-boot.svg"}
  ]
}

export type proyect = {
  title : string,
  description : string,
  img: string,
  resources : string[]
}
