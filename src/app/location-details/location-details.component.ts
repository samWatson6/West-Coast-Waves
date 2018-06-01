import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../Location'
import { SelectedLocationService } from '../selected-location.service.ts'

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;

  chart = [];

  constructor(private tides: SelectedLocationService) { }


  getTides(): void {
    this.tides.getTides()
      .subscribe(res => console.log(res));
  }


  ngOnInit() {
    this.getTides(this.location)
  }

}

