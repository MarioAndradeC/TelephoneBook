import { Component, OnInit } from '@angular/core';
import {
  MainPage,
  ActivatedRoute, Router, NgZone,
  NavController, ToastController, AlertController, ModalController,
  Resource,Variables,
  ContactsProvider,
  ContactList,Contact,ListContact
} from '../../mainpage';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.page.html',
  styleUrls: ['./list-contacts.page.scss'],
})
export class ListContactsPage extends MainPage implements OnInit {
  public obj: any;
  descending: boolean = false;
  terms: any;
  order: number;
  column: string = 'name'
  contacts: ListContact[];
  labelContacts:string =this.resource.labelContacts[this.variables.languageType].label;
  public result: any;
  constructor(public route: ActivatedRoute, public ngZone: NgZone,
    public router: Router, protected navCtrl: NavController, protected toastCtrl: ToastController,
    protected alertCtrl: AlertController, public modalCtrl: ModalController, public resource :Resource, public variables:Variables,
    public contactsPr: ContactsProvider
  ) {
    super(route, ngZone, router, navCtrl, toastCtrl, alertCtrl, modalCtrl,resource,variables, contactsPr)
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.contactsPr.getAll()
      .then((result) => {
        this.obj=result;
        this.contacts = result;
        this.result=  result;
      });
  }
  add() {
    this.router.navigate(['/addEditContacts']);
  }

  detail(item) {
    this.contactsPr.setContact(item);
    this.router.navigate(['/detailContacts']);
  }
  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
}
