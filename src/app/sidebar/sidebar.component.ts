import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

interface SidenavToggle {
  screenWith: number,
  collapsed: boolean
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('asTitle') asTitle: ElementRef | undefined
  @Output() onToggleSideNav: EventEmitter<SidenavToggle> = new EventEmitter()

  collapsed = false;
  title = 'angularTests';
  list = ['Desarrollador de Software', 'Desarrollador Web']
  public sidebarShow: boolean = false;
  ngAfterViewInit(): void {

  }

  toggleCollapse() {
    this.collapsed = !this.collapsed
  }

}
