import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Os } from './os';
import { OsService } from './os.service';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})
export class OsComponent implements OnInit {

 newOs : Os;

 oss : Os[];

 showMessageError : boolean;

  constructor(private osService : OsService, private location: Location) {}

  ngOnInit() {
    this.newOs = new Os();
    this.showMessageError = false;
    this.loadOss();
  }

  loadOss() {
    this.osService.getOss().subscribe(
      oss => this.oss = oss
    );
  }

  saveOs() {
    console.log("Teste")
    console.log(this.oss)
  }


  goBack(): void {
    this.location.back();
}

}
