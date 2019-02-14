import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

import {ChartService} from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
/*
  moistureChart = {
    Highcharts : Highcharts, // required
    chartConstructor :'chart', // optional string, defaults to 'chart'
    chartOptions: {
      xAxis: {
        type: 'datetime'
      },
      series:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
    } // required
  };
*/
  moistureChart:any;
  envChart:any;
  airChart:any;

  updateChart : boolean=false;

  arrosageActivated : boolean=false;
  reservoirEmpty: boolean=false;


  constructor(private chartService : ChartService) { }

  ngOnInit() {
    this.chartService.getAllData()
      .subscribe(
        data => {

          this.plotMoisture(data);
          this.plotEnvironment(data);
          this.plotAirQuality(data);

          this.updateChart=true;

      },
      err=>{console.log(err)}
    );
  };

  plotMoisture(data){
    var series=[];
    for(var d=0; d<data.length; d++){
      if(data[d].name.indexOf('hum') >=0 || data[d].name == 'temperature' ||data[d].name == 'lux') {
        series.push(data[d])
      }
    }
    console.log(series)
    this.moistureChart={
      Highcharts : Highcharts, // required
      chartConstructor :'chart', // optional string, defaults to 'chart'
      chartOptions: {
        chart :{zoomType: 'x'},
        xAxis: { type: 'datetime' },
        yAxis: [{title: {  text: 'humidité (%)'}},
                {title: {  text: 'Température (°C)'}}
                ],
               series:series
      } // required
    };
  };


  plotAirQuality(data){
    var series=[];
    for(var d=0; d<data.length; d++){
      if(data[d].name.indexOf('pm') ==0 ) {
        series.push(data[d])
      }
    }
    console.log(series)
    this.airChart={
      Highcharts : Highcharts, // required
      chartConstructor :'chart', // optional string, defaults to 'chart'
      chartOptions: {
        chart :{zoomType: 'x'},
        xAxis: { type: 'datetime' },
        yAxis: [{title: {  text: 'ug/ppm'}},
              ],
        series:series
      } // required
    };
  }


  plotEnvironment(data){
    var series=[];
    for(var d=0; d<data.length; d++){
      if(data[d].name.indexOf('pression') >=0 || data[d].name == 'temperature' ||data[d].name == 'lux'||data[d].name == 'humidite_air') {
        series.push(data[d])
      }
    }
    console.log(series)
    this.envChart={
      Highcharts : Highcharts, // required
      chartConstructor :'chart', // optional string, defaults to 'chart'
      chartOptions: {
        chart :{zoomType: 'x'},
        xAxis: { type: 'datetime' },
        yAxis: [{title: {  text: 'Lumière & humidité (%)'}},
                {title: {  text: 'Température (°C)'}},
                {title: {  text: 'Pression (hPa)'}, opposite:true }
                      ],
        series:series
      } // required
    };

  }

}
