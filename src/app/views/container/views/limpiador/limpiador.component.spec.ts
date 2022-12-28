import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiadorComponent } from './limpiador.component';

describe('LimpiadorComponent', () => {
  let component: LimpiadorComponent;
  let fixture: ComponentFixture<LimpiadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimpiadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimpiadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
