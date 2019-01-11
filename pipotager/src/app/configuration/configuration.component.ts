import { Component, OnInit } from '@angular/core';

import {ConfigurationService} from './configuration.service'
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  configuration={};
  constructor(private configurationService : ConfigurationService) { }

  ngOnInit() {
    this.configurationService.getConfig()
      .subscribe((data : {}) =>
      this.configuration=data
    );
  }



  enregistrer() {
    this.configurationService.sendConfig(this.configuration)
  }

}
