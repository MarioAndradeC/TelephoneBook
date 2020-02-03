import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageSystPageRoutingModule } from './message-syst-routing.module';

import { MessageSystPage } from './message-syst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageSystPageRoutingModule
  ],
  declarations: [MessageSystPage]
})
export class MessageSystPageModule {}
