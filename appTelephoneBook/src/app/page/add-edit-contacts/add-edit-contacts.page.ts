import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, CameraPopoverOptions } from '@ionic-native/camera/ngx';
import {
  MainPage,
  ActivatedRoute, Router, NgZone,
  NavController, ToastController, AlertController, ModalController,
  Resource, Variables,
  ContactsProvider,
  Contact, ContactList, Phone
} from '../../mainpage';
@Component({
  selector: 'app-add-edit-contacts',
  templateUrl: './add-edit-contacts.page.html',
  styleUrls: ['./add-edit-contacts.page.scss'],
})
export class AddEditContactsPage extends MainPage implements OnInit {
  title: string = this.resource.labelNew[this.variables.languageType].label + ' ' + this.resource.labelContacts[this.variables.languageType].label;
  labelName: string = this.resource.labelName[this.variables.languageType].label;
  labelSrname: string = this.resource.labelSrname[this.variables.languageType].label;
  labelContacts: string = this.resource.labelContacts[this.variables.languageType].label;
  labelEdit: string = this.resource.labelEdit[this.variables.languageType].label;
  labelAddPhone: string = this.resource.labelAdd[this.variables.languageType].label+' '+this.resource.labelPhone[this.variables.languageType].label;
  labelDelete: string = this.resource.labelDelete[this.variables.languageType].label;
  labelChangeImage: string = this.resource.labelChange[this.variables.languageType].label+' '+this.resource.labelImage[this.variables.languageType].label;
  labelOK: string = this.resource.labelOK[this.variables.languageType].label;
  labelCancel: string = this.resource.labelCancel[this.variables.languageType].label;
  contact: Contact;
  key: string;
  splicePhone: Phone = new Phone();
  imagem: any;
  temp2:any;
  phone:any='';
  auxphone:any='';
  checkedremove: boolean = false;
  popoverOptions: CameraPopoverOptions = {
    x: 150,
    y: 150,
    width: 50,
    height: 50,
    arrowDir: this.camera.PopoverArrowDirection.ARROW_LEFT
  };
  private options: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: true,
    targetWidth: 210,
    targetHeight: 140,
    correctOrientation: false,
    popoverOptions: this.popoverOptions

  }
  private options2: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    allowEdit: true,
    targetWidth: 210,
    targetHeight: 140,
    correctOrientation: false,
    popoverOptions: this.popoverOptions


  }
  constructor(public route: ActivatedRoute, public ngZone: NgZone,
    public router: Router, protected navCtrl: NavController, protected toastCtrl: ToastController,
    protected alertCtrl: AlertController, public modalCtrl: ModalController, public resource: Resource, public variables: Variables,
    public contactsPr: ContactsProvider, private camera: Camera

  ) {
    super(route, ngZone, router, navCtrl, toastCtrl, alertCtrl, modalCtrl, resource, variables, contactsPr)
    this.contact = new Contact();
    this.contact.imagem = this.contactsPr.variables.imageData_save;
    //this.contact.phones =  new Array<Phone>()
    this.imagem = 'data:image/jpeg;base64,' + this.contactsPr.variables.imageData_save;
    this.setupPageTitle();
  }

  ngOnInit() {

  }
  ionViewDidEnter() {
    this.key = this.contactsPr.getContact().key;
    if (this.key != null) {
      this.contact = this.contactsPr.getContact().contact;
      this.imagem = 'data:image/jpeg;base64,' + this.contact.imagem;
      this.title = this.resource.labelEdit[this.variables.languageType].label + ' ' + this.resource.labelContacts[this.variables.languageType].label;
    }

  }
  back() {
    this.contactsPr.setContact(new ContactList())
    this.router.navigate(['/listContacts']);
  }
  private setupPageTitle() {
    //this.title = this.contact.id ? 'Alterando contato' : 'Novo contato';
  }
  async  changeImg() {
    const alert = await this.alertCtrl.create({
      header: '',
      buttons: [
        {
          text:  this.resource.msgTakePictures[this.variables.languageType].message,
          role: 'destructive',
          handler: () => {
            this.baterFoto(this.options);
          }
        }, {
          text: this.resource.msgChoosePhotoGallery[this.variables.languageType].message,
          handler: () => {
            this.baterFoto(this.options2);
          }
        }
        , {
          text:this.labelCancel,
          handler: () => {
            //this.baterFoto(this.options2);
          }
        }
      ]
    });

    await alert.present();

  }

  baterFoto(options) {
    this.camera.getPicture(options).then((imageData) => {
      this.contact.imagem = imageData
      this.imagem = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.showToast(this.resource.msgAttentionThereError[this.variables.languageType].message)
      console.log(err)
    });
  }

  removePhone(phone) {
    if (this.splicePhone.id != undefined) {
      this.splicePhone = new Phone();
      let index = this.contact.phones.indexOf(phone);
      this.contact.phones.splice(index, 1);
      for (let i = this.contact.phones.length - 1; i >= 0; i--) {
        this.contact.phones[i].id = i;
      }
    } else {
      this.splicePhone = phone;
    }
  }
  forwardPhone() {
    this.splicePhone = new Phone();
   }
  addPhone() {

    let _phone = new Phone();
    _phone.id = this.contact.phones.length;
    _phone.type =  this.resource.StandardPhoneType[this.variables.languageType].type ;
    _phone.phone = undefined;
    this.contact.phones.push(_phone);

  }
  getval(phone) {
    return phone.phone;
  }

  onChangeTime($event, phone) {
  
    let _phone:string='';
    _phone=phone.phone;

    this.temp2 = setTimeout(() => {
      let tel = parseInt(_phone.replace('(', '').replace(') ', '').replace('-', '')).toString();
      let dd = tel.substr(0, 2)
      if (parseInt(tel) > 0 && (_phone.length > this.auxphone.length)) {
        if (tel.length >= 2 && tel.length <= 5) {
          phone.phone = '(' + dd + ') '+ tel.substr(2, 4);
        }
        if (tel.length > 5 && tel.length < 10) {
          phone.phone = '(' + dd + ') ' + tel.substr(2, 4) + '-' + tel.substr(6, 4);
        }

        if (tel.length >= 10 && tel.length <11 ) {
          phone.phone = '(' + dd + ') ' + tel.substr(2, 5) + '-' + tel.substr(7, 4);
        }
        if (tel.length >11 ) {
          phone.phone =tel;
        }
        this.auxphone=phone.phone;
      }else if (_phone.length < this.auxphone.length){
        this.auxphone=phone.phone;
      }else{
        phone.phone=this.auxphone;
      }
    }, 100)
    $event.target.value = phone.phone;
  }

  save() {
    if ((this.contact.name != undefined && this.contact.name !=null) ||
    (this.contact.surname != undefined && this.contact.surname !=null) ||
    (this.contact.phones[0].phone != undefined && this.contact.phones[0].phone !=null)){
      this.contactsPr.saveContact(this.key, this.contact)
      .then(() => {
        this.showToast(this.resource.msgContactSaved[this.variables.languageType].message)
        this.contact = new Contact();
      })
      .catch(() => {
        this.showToast(this.resource.msgErrorSavingContact[this.variables.languageType].message)
      });
    }

  }

}
