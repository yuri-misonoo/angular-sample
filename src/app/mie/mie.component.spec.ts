import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MieComponent } from './mie.component';

describe('MieComponent', () => {
  let component: MieComponent;
  let fixture: ComponentFixture<MieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
