import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificacionPromoPage } from './notificacion-promo.page';

describe('NotificacionPromoPage', () => {
  let component: NotificacionPromoPage;
  let fixture: ComponentFixture<NotificacionPromoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionPromoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
