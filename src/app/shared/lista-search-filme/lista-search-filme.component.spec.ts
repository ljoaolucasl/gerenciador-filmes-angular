import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSearchFilmeComponent } from './lista-search-filme.component';

describe('ListaSearchFilmeComponent', () => {
  let component: ListaSearchFilmeComponent;
  let fixture: ComponentFixture<ListaSearchFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSearchFilmeComponent]
    });
    fixture = TestBed.createComponent(ListaSearchFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
