import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesFilmeComponent } from './detalhes-filme.component';

describe('DetalhesFilmeComponent', () => {
  let component: DetalhesFilmeComponent;
  let fixture: ComponentFixture<DetalhesFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesFilmeComponent]
    });
    fixture = TestBed.createComponent(DetalhesFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
