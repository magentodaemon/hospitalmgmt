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

  constructor(private testService: TestService) { this.testService = testService; }

  ngOnInit() {
    this.testService.getTests().subscribe((data)=> {console.log(data);this.tests = data.tests; this.nextPage = data.next; this.previousPage = data.previous;});
  }

}
