import { Component, OnInit } from '@angular/core';
import { Location } from '../Location';
import { LocationService } from '../location.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: Location[];
  selectedLocation: Location;


  onSelect(location: Location): void {
    this.selectedLocation = location;
  }

  constructor(private locationService: LocationService) { }

  getLocations(): void {
    this.locationService.getLocations()
      .subscribe(locations => this.locations = locations);
  }

  ngOnInit() {
    this.getLocations();
  }

}



