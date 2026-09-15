import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedSectionHeaderComponent } from './shared-section-header-component';

describe('SharedSectionHeaderComponent', () => {
  let component: SharedSectionHeaderComponent;
  let fixture: ComponentFixture<SharedSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedSectionHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedSectionHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
