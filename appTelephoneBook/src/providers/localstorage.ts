import { Injectable } from '@angular/core';
import { Variables } from './variables'


@Injectable()
export class LocalStorageService {
    constructor (public variables: Variables) {

    }

    setItem = function (key, value) {
        var storage = localStorage;
        storage.setItem(this.variables.appGuid +  key, value);
    };

    getItem = function (key) {
        var storage = localStorage;
        var item = storage.getItem(this.variables.appGuid + key);
        return item;
    }

    removeItem = function (key) {
        var storage = localStorage;
        storage.removeItem(this.variables.appGuid + key);
    }
}