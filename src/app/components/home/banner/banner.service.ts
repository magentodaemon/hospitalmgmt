import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BannerService {
  public banners;
  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost/healtcareapi/mockdata/banners.php';

  getBanners() {
    return this.http.get(this.configUrl);
  }
}
