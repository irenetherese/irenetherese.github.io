import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdccComponent } from './bdcc.component';

describe('BdccComponent', () => {
  let component: BdccComponent;
  let fixture: ComponentFixture<BdccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
