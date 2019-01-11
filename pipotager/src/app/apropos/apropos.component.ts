import { Component, OnInit } from '@angular/core';
import{AproposService} from './apropos.service'

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {

  constructor(private aproposService: AproposService) { }

  ngOnInit() {
  }

}
