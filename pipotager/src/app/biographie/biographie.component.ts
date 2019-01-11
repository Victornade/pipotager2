import { Component, OnInit } from '@angular/core';
import {BiographieService} from './biographie.service';
@Component({
  selector: 'app-biographie',
  templateUrl: './biographie.component.html',
  styleUrls: ['./biographie.component.css']
})
export class BiographieComponent implements OnInit {

  constructor(private biographieService: BiographieService) { }

  ngOnInit() {
  }

}
