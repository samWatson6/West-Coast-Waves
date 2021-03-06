import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../Location'

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;

  constructor() { }

  ngOnInit() {
  }

}
