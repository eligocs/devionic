import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RlPage } from './rl.page';

describe('RlPage', () => {
  let component: RlPage;
  let fixture: ComponentFixture<RlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
