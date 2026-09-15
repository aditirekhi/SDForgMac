import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhySdforgmac } from './why-sdforgmac';

describe('WhySdforgmac', () => {
  let component: WhySdforgmac;
  let fixture: ComponentFixture<WhySdforgmac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhySdforgmac],
    }).compileComponents();

    fixture = TestBed.createComponent(WhySdforgmac);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
