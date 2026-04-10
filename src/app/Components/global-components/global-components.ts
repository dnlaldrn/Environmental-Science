import { Component } from '@angular/core';

@Component({
  selector: 'app-global-components',
  imports: [],
  templateUrl: './global-components.html',
  styleUrl: './global-components.css',
})
export class GlobalComponents {
  isVideoPlaying = false;

  playVideo(){
    this.isVideoPlaying = !this.isVideoPlaying;
    console.log(this.isVideoPlaying)
  }
}
