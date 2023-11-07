import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   @ViewChild('imageContainer') imageContainer!: ElementRef;
  currentImageIndex = 0;
  images: string[] = [
    'assets/BER_Aktuell_1.jpg',
    'assets/BER_Aktuell_2.jpg',
    'assets/BER_Aktuell_3.jpg',
    'assets/BER_Aktuell_4.jpg'
  ];
  texts: string[] = [
    'Text für Bild 1',
    'Text für Bild 2',
    'Text für Bild 3',
    'Text für Bild 4'
  ];
  currentText: string = '';

  ngOnInit() {
    this.currentText = this.texts[0];
    setInterval(() => this.showNextImage(), 3000); // Wechsel alle 3 Sekunden
  }

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.imageContainer.nativeElement.style.backgroundImage = `url(${this.images[this.currentImageIndex]})`;
    this.currentText = this.texts[this.currentImageIndex];
  }
}
