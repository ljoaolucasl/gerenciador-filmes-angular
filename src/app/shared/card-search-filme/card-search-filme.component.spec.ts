import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchFilmeComponent } from './card-search-filme.component';

describe('CardSearchFilmeComponent', () => {
  let component: CardSearchFilmeComponent;
  let fixture: ComponentFixture<CardSearchFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSearchFilmeComponent]
    });
    fixture = TestBed.createComponent(CardSearchFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
