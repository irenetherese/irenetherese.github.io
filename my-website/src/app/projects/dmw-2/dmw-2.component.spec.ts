import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dmw2Component } from './dmw-2.component';

describe('Dmw2Component', () => {
  let component: Dmw2Component;
  let fixture: ComponentFixture<Dmw2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dmw2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dmw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
