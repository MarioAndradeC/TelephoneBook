import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditContactsPage } from './add-edit-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class AddEditContactsPageRoutingModule {}
