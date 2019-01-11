import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent }   from './dashboard/dashboard.component';
import { ChartComponent }   from './chart/chart.component';
import {AproposComponent}   from './apropos/apropos.component';
import {BiographieComponent}   from './biographie/biographie.component';
import { ConfigurationComponent}   from './configuration/configuration.component';
import { PhotosComponent }   from './photos/photos.component';
import { PresentationComponent }   from './presentation/presentation.component';
import { SigninComponent }   from './signin/signin.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'charts', component: ChartComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'biographie', component: BiographieComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'presentation', component:  PresentationComponent},
  { path: 'signin', component:  SigninComponent},
  { path: '',  redirectTo: '/signin',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
