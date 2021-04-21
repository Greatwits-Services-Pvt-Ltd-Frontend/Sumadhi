import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers:[NgbCarouselConfig],
})
export class HomepageComponent implements OnInit {

  constructor() { }

  
  images = [201, 20, 30].map((n) => `https://picsum.photos/id/${n}/1400/508`);
  ngOnInit(): void {
  }
// ---------------------------------------







// var slideIndex = 1  ;
// showSlides(slideIndex);

// function plusSlides(n:any) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n:any) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n:any) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }












}



