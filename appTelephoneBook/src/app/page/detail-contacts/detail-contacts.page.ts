import { Component, OnInit } from '@angular/core';
import {
  MainPage,
  ActivatedRoute, Router, NgZone,
  NavController, ToastController, AlertController, ModalController,
  Resource,Variables,
  ContactsProvider,
  ContactList
} from '../../mainpage';
@Component({
  selector: 'app-detail-contacts',
  templateUrl: './detail-contacts.page.html',
  styleUrls: ['./detail-contacts.page.scss'],
})
export class DetailContactsPage extends MainPage implements OnInit {
  contacts: ContactList =new ContactList();
  imagem:any;
  labelContacts:string =this.resource.labelContacts[this.variables.languageType].label;
  labelEdit:string =this.resource.labelEdit[this.variables.languageType].label;
  constructor(public route: ActivatedRoute, public ngZone: NgZone,
    public router: Router, protected navCtrl: NavController, protected toastCtrl: ToastController,
    protected alertCtrl: AlertController, public modalCtrl: ModalController, public resource :Resource, public variables:Variables,
     public contactsPr: ContactsProvider
  ) {
    super(route, ngZone, router, navCtrl, toastCtrl, alertCtrl, modalCtrl,resource,variables, contactsPr)
   
  }


  ngOnInit() {
  }
  back(){
    this.contactsPr.setContact(new ContactList())
    this.router.navigate(['/listContacts']);
  }
  edit(){
    this.contactsPr.setContact(this.contacts)
    this.router.navigate(['/addEditContacts']);
  }
  ionViewDidEnter() {
    this.contacts = this.contactsPr.getContact();  
    this.imagem = 'data:image/jpeg;base64,' +this.contacts.contact.imagem ||this.contactsPr.variables.imageData_save;   
  }

}
