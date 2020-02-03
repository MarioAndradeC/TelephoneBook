import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListContactsPage } from './list-contacts.page';

describe('ListContactsPage', () => {
  let component: ListContactsPage;
  let fixture: ComponentFixture<ListContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
