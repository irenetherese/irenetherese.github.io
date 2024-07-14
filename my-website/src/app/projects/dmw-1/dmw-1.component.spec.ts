import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dmw1Component } from './dmw-1.component';

describe('Dmw1Component', () => {
  let component: Dmw1Component;
  let fixture: ComponentFixture<Dmw1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dmw1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dmw1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
