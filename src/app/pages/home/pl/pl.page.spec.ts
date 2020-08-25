import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlPage } from './pl.page';

describe('PlPage', () => {
  let component: PlPage;
  let fixture: ComponentFixture<PlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
