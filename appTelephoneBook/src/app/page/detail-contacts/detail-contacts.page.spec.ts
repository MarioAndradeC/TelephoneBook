import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailContactsPage } from './detail-contacts.page';

describe('DetailContactsPage', () => {
  let component: DetailContactsPage;
  let fixture: ComponentFixture<DetailContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailContactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
