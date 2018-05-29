import { Component, OnInit } from '@angular/core';
import {Location} from '../Location'

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  location: Location = {
    id: 1,
    name: 'Pacifica'
  };

  constructor() { }

  ngOnInit() {
  }

}

