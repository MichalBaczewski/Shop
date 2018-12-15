import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWarehousePositionComponent } from './edit-warehouse-position.component';

describe('EditWarehousePositionComponent', () => {
  let component: EditWarehousePositionComponent;
  let fixture: ComponentFixture<EditWarehousePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWarehousePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWarehousePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
