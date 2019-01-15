import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

import {ChartService} from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  moistureChart = {
    Highcharts : Highcharts, // required
    chartConstructor :'chart', // optional string, defaults to 'chart'
    chartOptions: {
    } // required
  };

  updateChart=false;

  arrosageActivated : boolean=false;
  reservoirEmpty: boolean=false;


  constructor(private chartService : ChartService) { }

  ngOnInit() {
    this.chartService.getAllData()
      .subscribe(
        data => {
          var plot=[];
          for(var d in data){
            plot.push({ type: 'area',  name: d, data: data[d]})
          }
          this.moistureChart={
            Highcharts : Highcharts, // required
              chartConstructor :'chart', // optional string, defaults to 'chart'
              chartOptions: {
                chart: {
                  zoomType: 'x'
                }, xAxis: {
                  type: 'datetime',
                  dateTimeLabelFormats: {
                    month: '%e. %b',
                    year: '%b'
                  }
                },legend: {
                  enabled: true
                },
              series: plot
            } // required
          };
          this.updateChart=true;

      },
      err=>{console.log(err)}
    );
  };

}
