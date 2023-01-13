import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('asTitle') asTitle: ElementRef | undefined
  title = 'angularTests';
  list = ['Angular Typewriter Effect', 'Hello World...']
  
  ngAfterViewInit(): void {

  }

  initEfect() {
    
  }

}
