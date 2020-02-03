import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class LoadingService {

  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  async present(message,duration) {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: duration||5000,message:message ||''
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
}