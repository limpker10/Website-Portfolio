import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DownloadFileService } from '../core/services/download-file.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  theme: Theme = 'dark-theme';
 
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.initializeTheme();
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
