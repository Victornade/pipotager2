import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'; //Pour le routage des liens
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms'; //Pour les formulaires

import { ApiInterceptor} from './interceptor/httpconfig.interceptor';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PhotosComponent } from './photos/photos.component';
import { AproposComponent } from './apropos/apropos.component';
import { BiographieComponent } from './biographie/biographie.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent,
    DashboardComponent,
    ChartComponent,
    ConfigurationComponent,
    PresentationComponent,
    PhotosComponent,
    AproposComponent,
    BiographieComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
