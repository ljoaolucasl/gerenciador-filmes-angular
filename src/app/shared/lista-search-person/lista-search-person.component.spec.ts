import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSearchPersonComponent } from './lista-search-person.component';

describe('ListaSearchPersonComponent', () => {
  let component: ListaSearchPersonComponent;
  let fixture: ComponentFixture<ListaSearchPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSearchPersonComponent]
    });
    fixture = TestBed.createComponent(ListaSearchPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
