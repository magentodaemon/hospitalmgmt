import { Component, OnInit } from '@angular/core';

import { BannerService } from './banner.service'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [BannerService]
})
export class BannerComponent implements OnInit {
   private banners;
   private bannerService;

  constructor(bannerService: BannerService) {
     this.bannerService= bannerService;
  }

  ngOnInit() {
    this.bannerService.getBanners().subscribe((data) => {this.banners = data;} );
  }
}
