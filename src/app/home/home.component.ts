import { Component,  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    { name: 'BER_Aktuell_1.jpg', caption: 'caption1'},
    { name: 'BER_Aktuell_2.jpg', caption: 'caption2'},
    { name: 'BER_Aktuell_3.jpg', caption: 'caption3'},
    { name: 'BER_Aktuell_4.jpg', caption: 'caption4'},
  ];
}
