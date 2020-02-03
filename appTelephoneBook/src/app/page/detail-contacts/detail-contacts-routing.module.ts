import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailContactsPage } from './detail-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: DetailContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailContactsPageRoutingModule {}
