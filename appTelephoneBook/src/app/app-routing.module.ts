import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'listContacts', pathMatch: 'full' },
  {
    path: 'messageSyst',
    loadChildren: () => import('./page/message-syst/message-syst.module').then( m => m.MessageSystPageModule)
  },
  {
    path: 'addEditContacts',
    loadChildren: () => import('./page/add-edit-contacts/add-edit-contacts.module').then( m => m.AddEditContactsPageModule)
  },
  {
    path: 'listContacts',
    loadChildren: () => import('./page/list-contacts/list-contacts.module').then( m => m.ListContactsPageModule)
  },
  {
    path: 'detailContacts',
    loadChildren: () => import('./page/detail-contacts/detail-contacts.module').then( m => m.DetailContactsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  doRefresh(event) {
    alert('yesye');
  }

 }
