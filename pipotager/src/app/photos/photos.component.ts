import { Component, OnInit } from '@angular/core';

import {PhotosService} from './photos.service'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private photosService : PhotosService) { }

  ngOnInit() {
  }

}
