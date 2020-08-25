import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DdviewPage } from './ddview.page';

describe('DdviewPage', () => {
  let component: DdviewPage;
  let fixture: ComponentFixture<DdviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DdviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
