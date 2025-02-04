import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsInterestComponent } from './plants-interest.component';

describe('PlantsInterestComponent', () => {
  let component: PlantsInterestComponent;
  let fixture: ComponentFixture<PlantsInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantsInterestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantsInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
