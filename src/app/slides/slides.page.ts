import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../slides.service';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper/js/swiper.esm.bundle';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  id = 0;
  slideId = 0;
  swiper;
  slides = [];
  slidesData = {
    offset: 0,
    from: 0,
    to: 0,
    slides: []
  };

  constructor(
    private slidesService: SlidesService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.id = +this.activatedRoute.snapshot.params.id || 0;
    this.slideId = +this.activatedRoute.snapshot.params.slideId || 0;
    this.slides = this.slidesService.slideSets[this.id].slides;
    console.log('slides', this.slides);
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.initialiseSlides();
  }

  initialiseSlides() {
    this.swiper = new Swiper('.swiper-container', {
      initialSlide: this.slideId,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 400,
      spaceBetween: 100,
      on: {
        init: () => {
          console.log('Swiper has initialized!');
        },
      },
      virtual: {
        slides: this.slides,
        renderExternal: data => {
          this.slidesData = data;
        }
      }
    });
  }

}
