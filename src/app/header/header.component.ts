import { Component, EventEmitter, Inject, OnInit, Output, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DownloadFileService } from '../core/services/download-file.service';

interface SidenavToggle {
  screenWith: number,
  collapsed: boolean
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  collapsed = true
  theme: Theme = 'dark-theme';
  @Output() onToggleSideNav: EventEmitter<SidenavToggle> = new EventEmitter()
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.initializeTheme();
  }

  toggleCollapse() {
    //console.log("hikas")
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWith:0})
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }

  dowloadFile() {
    DownloadFileService.downloadFile("http://localhost:4200/assets/files/CanoVilcapazaJoseMiguel_CV.pdf","Cano_Jose_CV");
  }
  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);
}

export type Theme = 'light-theme' | 'dark-theme'
