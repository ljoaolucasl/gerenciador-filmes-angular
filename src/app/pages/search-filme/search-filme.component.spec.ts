import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilmeComponent } from './search-filme.component';

describe('SearchFilmeComponent', () => {
  let component: SearchFilmeComponent;
  let fixture: ComponentFixture<SearchFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFilmeComponent]
    });
    fixture = TestBed.createComponent(SearchFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
