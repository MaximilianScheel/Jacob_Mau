import { Component,  } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    { name: 'BER_Aktuell_1.jpg', caption: 'vorbereitung der erstbegehung - mit ideen im gepäck'},
    { name: 'BER_Aktuell_3.jpg', caption: 'sichtbeton-sockel und hinterlüftete holzlattung vertikal und horizontal /// wohnhaus mit 2 wohneinheiten in stralsund, derzeit lph 5 & 6'},
    { name: 'BER_Aktuell_4.jpg', caption: ' monolith an der ecke /// erweiterung einer doppelhaushälfte in stralsund, derzeit lph 3'},
  ];
}
