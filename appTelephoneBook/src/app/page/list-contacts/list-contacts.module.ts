import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListContactsPageRoutingModule } from './list-contacts-routing.module';

import { ListContactsPage } from './list-contacts.page';

import { SearchPipe } from '../../../providers/search';
import { SortPipe } from '../../../providers/sort';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListContactsPageRoutingModule
  ],
  declarations: [ListContactsPage,SearchPipe,SortPipe],
  exports: [
    CommonModule,
    SearchPipe,SortPipe,
]
})
export class ListContactsPageModule {}
