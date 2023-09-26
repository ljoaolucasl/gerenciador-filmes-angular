import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFilmeComponent } from './listagem-filme.component';

describe('ListagemFilmeComponent', () => {
  let component: ListagemFilmeComponent;
  let fixture: ComponentFixture<ListagemFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemFilmeComponent]
    });
    fixture = TestBed.createComponent(ListagemFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
