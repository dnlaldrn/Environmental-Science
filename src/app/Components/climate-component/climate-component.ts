import { Component } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";


@Component({
  selector: 'app-climate-component',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './climate-component.html',
  styleUrl: './climate-component.css',
})
export class ClimateComponent {
  isVideo1playing = false;
   isVideo2playing = false;


  playVideo1(){
    this.isVideo1playing = true;
  
  }
  playVideo2(){
     this.isVideo2playing = true;

  }
}
