import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningItemComponent } from './planning-item.component';

describe('PlanningItemComponent', () => {
  let component: PlanningItemComponent;
  let fixture: ComponentFixture<PlanningItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanningItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
