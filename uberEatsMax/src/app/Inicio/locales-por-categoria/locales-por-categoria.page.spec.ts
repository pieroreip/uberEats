import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalesPorCategoriaPage } from './locales-por-categoria.page';

describe('LocalesPorCategoriaPage', () => {
  let component: LocalesPorCategoriaPage;
  let fixture: ComponentFixture<LocalesPorCategoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalesPorCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
