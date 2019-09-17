import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-slide-sets',
  templateUrl: './slide-sets.page.html',
  styleUrls: ['./slide-sets.page.scss'],
})
export class SlideSetsPage implements OnInit {

  constructor(
    public slidesService: SlidesService
  ) { }

  ngOnInit() {
  }

}
