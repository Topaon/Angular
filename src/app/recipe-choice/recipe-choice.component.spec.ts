import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeChoiceComponent } from './recipe-choice.component';

describe('RecipeChoiceComponent', () => {
  let component: RecipeChoiceComponent;
  let fixture: ComponentFixture<RecipeChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
