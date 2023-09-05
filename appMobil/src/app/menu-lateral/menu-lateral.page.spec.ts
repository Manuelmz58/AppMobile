import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuLateralPage } from './menu-lateral.page';

describe('MenuLateralPage', () => {
  let component: MenuLateralPage;
  let fixture: ComponentFixture<MenuLateralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuLateralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
