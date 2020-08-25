import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RdviewPage } from './rdview.page';

describe('RdviewPage', () => {
  let component: RdviewPage;
  let fixture: ComponentFixture<RdviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RdviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
