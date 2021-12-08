import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShizuokaComponent } from './shizuoka.component';

describe('ShizuokaComponent', () => {
  let component: ShizuokaComponent;
  let fixture: ComponentFixture<ShizuokaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShizuokaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShizuokaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
