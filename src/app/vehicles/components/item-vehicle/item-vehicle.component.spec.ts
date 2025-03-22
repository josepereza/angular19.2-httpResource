import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVehicleComponent } from './item-vehicle.component';

describe('ItemVehicleComponent', () => {
  let component: ItemVehicleComponent;
  let fixture: ComponentFixture<ItemVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
