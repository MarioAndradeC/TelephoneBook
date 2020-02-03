import { Injectable } from '@angular/core';
import { BaseComunicationProvider } from './basecomunication';
import {Contact,ContactList,Phone,ListContact} from '../entities/contact';
@Injectable()
export class ContactsProvider  extends BaseComunicationProvider{
    address='telephoneController'
    contactList:ContactList =new ContactList();

    /*private insertContact(contact: Contact) {
      return this.insert(contact)
    }
  
    private updateContact(key: string, contact: Contact) {
      return this.update(key, contact);
    }*/
    setContact(contactList){
       this.contactList=contactList
    }
    getContact(){
      return this.contactList;
   }
  
    public removeContact(key: string) {
      return this.remove(key);
    }

    public saveContact(key,contact: Contact) {
      if (key) {
        return this.update(key, contact);
      } else {
        return this.insert(contact);
      }
    }
    public getAll() {

      let contacts: ListContact[] = [];

      return this.storage.forEach((value: Contact, key: string, iterationNumber: Number) => {
          let contact = new ListContact();
          contact.key = key;
          contact.contact = value;
          contacts.push(contact);
          contact.name= contact.contact.name;
          contact.surname= contact.contact.surname
   
      })
          .then(() => {
              return Promise.resolve(contacts);
          })
          .catch((error) => {
              return Promise.reject(error);
          });
  }

}