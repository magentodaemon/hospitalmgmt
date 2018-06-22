import { Component, OnInit } from '@angular/core';

import { TestService } from './test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
  providers: [TestService]
})
export class TestsComponent implements OnInit {
  private tests;
  private testService;
  private nextPage;
  private previousPage;

  constructor(private tstService: TestService) { this.testService = tstService; }

  ngOnInit() {
    this.testService.getTests().subscribe((data)=> {
        this.tests = data.tests;
        this.nextPage = data.next ? data.currentPage++ : false;
        this.previousPage = data.previous ? data.currentPage-- : false;
      }
    );
  }

  search(searchString, pageNumber = '1'){

    this.testService.getTests(pageNumber , searchString).subscribe(
      (data)=> {
       this.tests = data.tests;
       this.nextPage = data.next ? data.currentPage++ : false;
       this.previousPage = data.previous ? data.currentPage-- : false;
    });
  }

}
