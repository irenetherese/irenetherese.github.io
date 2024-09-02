import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ml3Component } from './ml-3.component';

describe('Ml3Component', () => {
  let component: Ml3Component;
  let fixture: ComponentFixture<Ml3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ml3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ml3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
