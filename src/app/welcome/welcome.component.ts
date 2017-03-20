import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() {
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }

  ngOnInit() {

    // $('a.page-scroll').bind('click', function (event) {
    //   const $anchor = $(this);
    //   $('html, body').stop().animate({
    //     scrollTop: ($($anchor.attr('href')).offset().top - 50)
    //   }, 1250, 'easeInOutExpo');
    //   event.preventDefault();
    // });

    // // Highlight the top nav as scrolling occurs
    // (<any>$('body')).scrollspy({
    //   target: '.navbar-fixed-top',
    //   offset: 100
    // });

    // // Closes the Responsive Menu on Menu Item Click
    // $('.navbar-collapse ul li a').click(function () {
    //   $('.navbar-toggle:visible').click();
    // });

    // // Offset for Main Navigation
    // (<any>$('#mainNav')).affix({
    //   offset: {
    //     top: 50
    //   }
    // });

  }

}
