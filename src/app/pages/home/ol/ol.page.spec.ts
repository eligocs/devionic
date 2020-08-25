import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OlPage } from './ol.page';

describe('OlPage', () => {
  let component: OlPage;
  let fixture: ComponentFixture<OlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
