import { OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { ToastController, NavController, ModalController, AlertController,    } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import {MessageSystPage} from './page/message-syst/message-syst.page';
import {ContactsProvider} from './../providers/contacts';
import {Contact,ContactList,Phone,ListContact} from '../entities/contact';
import {Resource} from '../providers/resource';
import {Variables} from '../providers/variables';

export {
    ActivatedRoute, Router,NgZone,
    NavController, ToastController, AlertController, ModalController,ParamMap,switchMap,Observable,
    Resource,Variables,
   //-------- providers
    ContactsProvider,
   //-------- entities
    Contact,ContactList,Phone,ListContact
}

export class MainPage implements OnInit {
    constructor(public route: ActivatedRoute, public ngZone:NgZone,
        public router: Router, protected navCtrl: NavController, protected toastCtrl: ToastController,
        protected alertCtrl: AlertController, public modalCtrl: ModalController, public resource:Resource, public variables:Variables,
        public contactsPr: ContactsProvider) {
           
    }
    ngOnInit() { 
     
    }
    async showToast(message,duration?,position?) {
        let toast = await this.toastCtrl.create({
          message: message,
          duration: duration||2000,
          position:position||'bottom'
        });
        toast.present();
      }


    
      async showCustomToast(message) {
        let toast = await this.toastCtrl.create({
          message:message,
          duration: 2000,
          cssClass: "CustomToast"
        });
        toast.present();
      }
     
}