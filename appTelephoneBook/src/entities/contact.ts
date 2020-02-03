import { Injectable } from '@angular/core';
@Injectable()
export class Phone {
    id: number;
    type: string;
    phone: string;
    constructor() {
        this.id = null;
        this.type = null;
        this.phone = null;

    }
}

export class Contact {
    name: string;
    surname: string;
    phones: Array<Phone> = new Array<Phone>();
    imagem: string;
    birth: Date;
    active: boolean;
    constructor() {
        this.name = null;
        this.surname = null;
        this.imagem = null;
        this.phones = new Array<Phone>()
        this.birth = null;
        this.active = null;

    }

}

export class ContactList {
    key: string;
    contact: Contact;
    constructor() {
        this.key = null;
        this.contact = new Contact();

    }
}

export class ListContact {
    key: string;
    contact: Contact;
    name: string;
    surname: string;
    
    constructor() {
        this.key = null;
        this.name = null;
        this.surname = null;
        this.contact = new Contact();
    }
}