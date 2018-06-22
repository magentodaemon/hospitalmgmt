import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {
  public banners;
  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost/healtcareapi/mockdata/tests.php';

  getTests(pageNumber : string = '1', searchString : string = '') {
    return this.http.get(this.configUrl + '?page='+ pageNumber + '&search=' + searchString);
  }
}
