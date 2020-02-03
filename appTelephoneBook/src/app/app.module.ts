import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common'
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SearchPipe } from '../providers/search';
import { SortPipe } from '../providers/sort';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Variables } from '../providers/variables';
import { Resource } from '../providers/resource';
import { LocalStorageService } from '../providers/localstorage';
import { LoadingService } from '../providers/loadingservice';

import { DateService } from '../providers/date';

import { MessageSystPageModule } from './page/message-syst/message-syst.module'
import { ContactsProvider } from '../providers/contacts';




@NgModule({
  declarations: [AppComponent, ],
  
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '_tbdb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AppRoutingModule, FormsModule,
    ReactiveFormsModule, HttpClientModule, MessageSystPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatePipe, Pipe,
    ContactsProvider,

    Variables, Resource, LocalStorageService, LoadingService, DateService, Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
