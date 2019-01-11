import { Component, OnInit } from '@angular/core';

import {PresentationService} from './presentation.service'

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(private presentationService : PresentationService) { }

  ngOnInit() {
  }

}
