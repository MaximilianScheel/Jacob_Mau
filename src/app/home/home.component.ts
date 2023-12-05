import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    { name: 'BER_Aktuell_1.jpg', caption: 'monolith an der ecke <br>/// erweiterung einer doppelhaushälfte in stralsund, derzeit lph 3' },
    { name: 'BER_Aktuell_4.jpg', caption: 'sichtbeton-sockel und hinterlüftete holzlattung vertikal und horizontal <br>/// wohnhaus mit 2 wohneinheiten in stralsund, derzeit lph 5 & 6' },
  ];
}

