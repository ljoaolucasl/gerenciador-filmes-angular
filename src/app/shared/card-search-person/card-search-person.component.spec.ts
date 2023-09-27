import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchPersonComponent } from './card-search-person.component';

describe('CardSearchPersonComponent', () => {
  let component: CardSearchPersonComponent;
  let fixture: ComponentFixture<CardSearchPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSearchPersonComponent]
    });
    fixture = TestBed.createComponent(CardSearchPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
