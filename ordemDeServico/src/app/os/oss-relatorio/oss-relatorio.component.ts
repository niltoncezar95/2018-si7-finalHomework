import { Component, OnInit } from '@angular/core';
import { Os } from '../os';
import { OsService } from '../os.service';

@Component({
  selector: 'app-oss-relatorio',
  templateUrl: './oss-relatorio.component.html',
  styleUrls: ['./oss-relatorio.component.css']
})
export class OssRelatorioComponent implements OnInit {

  osService = new OsService();
  oss: Os[] = [];

  constructor() { }

  ngOnInit() {
    this.loadOss();
  }

  loadOss() {
    this.osService.getOss().subscribe(
      oss => this.oss = oss
    );
  }


}
