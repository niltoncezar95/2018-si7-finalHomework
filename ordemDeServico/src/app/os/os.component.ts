import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})
export class OsComponent implements OnInit {

  constructor( 
    private location: Location
  ) {}

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
}

}
