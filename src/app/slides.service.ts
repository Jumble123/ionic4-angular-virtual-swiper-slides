import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  public slideSets = [
    {
      title: 'Words starting with a',
      slides: [
        ['above', 'about', 'abroad'],
        ['accept', 'account', 'academic'],
        ['adjust', 'adjourn', 'admire'],
        ['app', 'apple', 'apathy'],
      ]
    },
    {
      title: 'Multiples of 3',
      slides: [
        ['3', '6', '9'],
        ['12', '15', '18'],
        ['21', '24', '27'],
        ['30', '33', '36'],
        ['120', '123', '126', '129'],
      ]
    },
    {
      title: 'Multiples of 7',
      slides: (() => {
        const slides = [];
        for (let i = 0; i < 150; i += 3) {
          const first = (i + 1) * 7;
          const slide = [first, first + 7, first + 14];
          slides.push(slide);
        }
        return slides;
      })()
    }
  ];

  constructor() { }
}
