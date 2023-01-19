import { Component, OnChanges, SimpleChanges } from '@angular/core';

interface SidenavToggle {
  screenWith: number,
  collapsed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  title = 'Portafolio-Web';
  isSideNavCollapsed = false;

  onToggleSidenav(data : SidenavToggle) {
    console.log(data.collapsed)  
    this.isSideNavCollapsed = data.collapsed
  }
  onToggleSideBar(data : SidenavToggle){
    this.isSideNavCollapsed = data.collapsed
  }
}
