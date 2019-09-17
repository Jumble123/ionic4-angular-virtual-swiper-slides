import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../slides.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slides-list',
  templateUrl: './slides-list.page.html',
  styleUrls: ['./slides-list.page.scss'],
})
export class SlidesListPage implements OnInit {

  id = 0;
  slideSet;

  constructor(
    private slidesService: SlidesService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.id = +this.activatedRoute.snapshot.params.id || 0;
    this.slideSet = this.slidesService.slideSets[this.id];
  }

  ngOnInit() {
  }

}
