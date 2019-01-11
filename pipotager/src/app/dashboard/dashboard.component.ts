import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  lastAquisition={};

  arrosageActivated=false;

  reservoirEmpty=false;

  constructor(
    private router: Router,
    private dashboardService : DashboardService ) { }


  ngOnInit() {
    if( localStorage.getItem('x-auth-token') == null){
      this.router.navigate(['/signin']);
    }


    this.dashboardService.getLastAcquisition()
      .subscribe(
        data => {
          console.log(data);
          this.lastAquisition = data;
        },
        err=>{console.log(err)}
        );
  }

}

