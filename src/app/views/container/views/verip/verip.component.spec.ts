import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeripComponent } from './verip.component';

describe('VeripComponent', () => {
  let component: VeripComponent;
  let fixture: ComponentFixture<VeripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
