import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessageSystPage } from './message-syst.page';

describe('MessageSystPage', () => {
  let component: MessageSystPage;
  let fixture: ComponentFixture<MessageSystPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSystPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageSystPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
