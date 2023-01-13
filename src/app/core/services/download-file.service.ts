import { Injectable } from '@angular/core';

@Injectable()
export class DownloadFileService {

  constructor() { }

  static downloadFile(path:string, filename:string){
    const downloadInstance = document.createElement('a');
    downloadInstance.href = path;
    downloadInstance.target = '_blank';
    downloadInstance.download = filename;

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);

  }
}
