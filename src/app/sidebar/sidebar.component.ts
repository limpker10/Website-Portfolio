import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

interface SidenavToggle {
  screenWith: number,
  collapsed: boolean
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild('asTitle') asTitle: ElementRef | undefined
  @Output() onToggleSideBar: EventEmitter<SidenavToggle> = new EventEmitter()

  title = 'angularTests';
  list = ['Desarrollador de Software', 'Desarrollador Web']

  

  collapse(){
    this.onToggleSideBar.emit({collapsed:false,screenWith:0})
  }

}
