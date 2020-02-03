import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailContactsPageRoutingModule } from './detail-contacts-routing.module';

import { DetailContactsPage } from './detail-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailContactsPageRoutingModule
  ],
  declarations: [DetailContactsPage]
})
export class DetailContactsPageModule {}
