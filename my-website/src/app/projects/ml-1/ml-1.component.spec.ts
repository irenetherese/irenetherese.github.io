import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ml1Component } from './ml-1.component';

describe('Ml1Component', () => {
  let component: Ml1Component;
  let fixture: ComponentFixture<Ml1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ml1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ml1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
