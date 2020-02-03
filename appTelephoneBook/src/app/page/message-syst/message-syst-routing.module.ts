import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageSystPage } from './message-syst.page';

const routes: Routes = [
  {
    path: '',
    component: MessageSystPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageSystPageRoutingModule {}
