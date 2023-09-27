import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPersonComponent } from './detalhes-person.component';

describe('DetalhesPersonComponent', () => {
  let component: DetalhesPersonComponent;
  let fixture: ComponentFixture<DetalhesPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesPersonComponent]
    });
    fixture = TestBed.createComponent(DetalhesPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
