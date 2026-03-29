import { Component } from '@angular/core';
import {ClimateComponent} from '../../Components/climate-component/climate-component'


@Component({
  selector: 'app-climate-change',
  imports: [ClimateComponent],
  templateUrl: './climate-change.html',
  styleUrl: './climate-change.css',
})
export class ClimateChange {}
