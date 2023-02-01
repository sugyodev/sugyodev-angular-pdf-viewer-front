import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalPages = 0;
  page = this.totalPages ? 1 : 0;
  title = 'angular-pdf-viewer-example';
  pdfSrc = "";
  // pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor(private httpClient: HttpClient) { }
  nextPage() {
    this.page++;
  }

  sendGetRequest() {
    this.httpClient.get('http://localhost:8080/getPDF').subscribe((responseBody : any) => {
      if(responseBody){
        this.pdfSrc = responseBody.pdfUrl;
      }
    });
  }

  prevPage() {
    this.page--;
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.page = 1
  }
}
