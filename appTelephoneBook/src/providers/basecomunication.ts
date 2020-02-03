import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Variables } from './variables';
import { Resource } from './resource';
import { LocalStorageService } from './localstorage';
import { LoadingController, ToastController } from '@ionic/angular'
import { LoadingService } from './loadingservice';


import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

declare var fingerprint;
declare function encryptData(data): any;


@Injectable()
export abstract class BaseComunicationProvider {
    requestResult: any = {};

    public abstract address: string;
    headers = new HttpHeaders()
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
        .set('Access-Control-Allow-Headers', 'content-type')
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Credentials', 'true');

    constructor(public http: HttpClient, public variables: Variables, public localStorage: LocalStorageService, public resource: Resource,
        public loadingCtrl: LoadingController, protected toastCtrl: ToastController,
        public loading: LoadingService, public storage: Storage, private datepipe: DatePipe) {
        this.requestResult = { status: undefined, message: undefined, isTest: false, item: {} };


    }
    public insert(entitie: any) {
        let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
        return this.save(key, entitie);
    }

    public update(key: string, entitie: any) {
        return this.save(key, entitie);
    }

    private save(key: string, entitie: any) {
        return this.storage.set(key, entitie);
    }

    public remove(key: string) {
        return this.storage.remove(key);
    }


    httpGet(operation, parameters) {
        let url = this.variables.baseUrl + this.address;
        if (operation != undefined && operation != null) {
            url = this.variables.baseUrl + this.address + '/' + operation;
        }
        return new Promise((resolve, reject) => {
            this.http.get(url, { params: parameters, headers: this.headers })
                .subscribe(data => {
                    var _data: any = data;
                    if (_data.status != 'falha') {
                        resolve(data);
                    } else {
                        reject(_data);
                    }
                }, erro => {
                    var _erro: any = erro;
                    if (_erro.status >= 400) {
                        this.requestResult = { status: 'falha', message: this.resource.serverAPIError[this.variables.languageType].message, isTest: false, item: _erro };
                    } else {
                        this.requestResult = { status: 'falha', message: this.resource.serverAPINotRespond[this.variables.languageType].message, isTest: false, item: _erro };
                    }
                    reject(this.requestResult);
                });
        });
    }

    httpPut(operation, parameters) {
        let url = this.variables.baseUrl + this.address;
        if (operation != undefined && operation != null) {
            url = this.variables.baseUrl + this.address + '/' + operation;
        }
        return new Promise((resolve, reject) => {
            this.http.put(url, { params: parameters })
                .subscribe(data => {
                    var _data: any = data;
                    if (_data.status != 'falha') {
                        resolve(data);
                    } else {
                        reject(_data);
                    }
                }, erro => {
                    var _erro: any = erro;
                    if (_erro.status >= 400) {
                        this.requestResult = { status: 'falha', message: this.resource.serverAPIError[this.variables.languageType].message, isTest: false, item: _erro };
                    } else {
                        this.requestResult = { status: 'falha', message: this.resource.serverAPINotRespond[this.variables.languageType].message, isTest: false, item: _erro };
                    }
                    reject(this.requestResult);
                });
        });
    }

    httpPost(operation, parameters, body?) {
        let url = this.variables.baseUrl + this.address;
        if (operation != undefined && operation != null) {
            url = this.variables.baseUrl + this.address + '/' + operation;
        }
        return new Promise((resolve, reject) => {
            this.http.post(url, body, { params: parameters })
                .subscribe(data => {
                    var _data: any = data;
                    if (_data.status != 'falha') {
                        resolve(data);
                    } else {
                        reject(_data);
                    }
                }, erro => {
                    var _erro: any = erro;
                    if (_erro.status >= 400) {
                        this.requestResult = { status: 'falha', message: this.resource.serverAPIError[this.variables.languageType].message, isTest: false, item: _erro };
                    } else {
                        this.requestResult = { status: 'falha', message: this.resource.serverAPINotRespond[this.variables.languageType].message, isTest: false, item: _erro };
                    }
                    reject(this.requestResult);
                });
        });
    }

    httpDelete(operation, parameters) {
        let url = this.variables.baseUrl + this.address;
        if (operation != undefined && operation != null) {
            url = this.variables.baseUrl + this.address + '/' + operation;
        }
        return new Promise((resolve, reject) => {
            this.http.delete(url, { params: parameters })
                .subscribe(data => {
                    var _data: any = data;
                    if (_data.status != 'falha') {
                        resolve(data);
                    } else {
                        reject(_data);
                    }
                }, erro => {
                    var _erro: any = erro;
                    if (_erro.status >= 400) {
                        this.requestResult = { status: 'falha', message: this.resource.serverAPIError[this.variables.languageType].message, isTest: false, item: _erro };
                    } else {
                        this.requestResult = { status: 'falha', message: this.resource.serverAPINotRespond[this.variables.languageType].message, isTest: false, item: _erro };
                    }
                    reject(this.requestResult);
                });
        });
    }


}