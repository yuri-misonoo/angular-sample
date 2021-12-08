import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KumamotoComponent } from './kumamoto.component';

describe('KumamotoComponent', () => {
  let component: KumamotoComponent;
  let fixture: ComponentFixture<KumamotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KumamotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KumamotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
