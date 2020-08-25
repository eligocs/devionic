import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DlPage } from './dl.page';

describe('DlPage', () => {
  let component: DlPage;
  let fixture: ComponentFixture<DlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
