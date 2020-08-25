import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CpasswordPage } from './cpassword.page';

describe('CpasswordPage', () => {
  let component: CpasswordPage;
  let fixture: ComponentFixture<CpasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
