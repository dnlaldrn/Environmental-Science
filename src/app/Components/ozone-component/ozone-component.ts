import { Component } from '@angular/core';

@Component({
  selector: 'app-ozone-component',
  imports: [],
  templateUrl: './ozone-component.html',
  styleUrl: './ozone-component.css',
})
export class OzoneComponent {
   play = false;

  playVideo(){
    this.play = !this.play;
  }
}
