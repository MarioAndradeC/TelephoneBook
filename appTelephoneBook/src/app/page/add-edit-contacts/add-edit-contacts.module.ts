import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditContactsPageRoutingModule } from './add-edit-contacts-routing.module';

import { AddEditContactsPage } from './add-edit-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditContactsPageRoutingModule
  ],
  declarations: [AddEditContactsPage]
})
export class AddEditContactsPageModule {}
