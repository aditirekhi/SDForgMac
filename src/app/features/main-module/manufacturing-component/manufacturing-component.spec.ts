import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManufacturingComponent } from './manufacturing-component';

describe('ManufacturingComponent', () => {
  let component: ManufacturingComponent;
  let fixture: ComponentFixture<ManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManufacturingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
