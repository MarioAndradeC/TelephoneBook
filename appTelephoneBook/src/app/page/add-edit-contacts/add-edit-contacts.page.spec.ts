import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEditContactsPage } from './add-edit-contacts.page';

describe('AddEditContactsPage', () => {
  let component: AddEditContactsPage;
  let fixture: ComponentFixture<AddEditContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditContactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
