import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { DetailPageComponentComponent } from './detail-page-component/detail-page-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IconModule, IconSetService } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    DetailPageComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      
      {path :'list', component:HomePageComponentComponent},
      {path:'detail/:id',component:DetailPageComponentComponent},
      {path:'',redirectTo:'list',pathMatch:'full'}
    ])
    , 
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
