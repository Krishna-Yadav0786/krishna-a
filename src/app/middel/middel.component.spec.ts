import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddelComponent } from './middel.component';

describe('FooterComponent', () => {
  let component: MiddelComponent;
  let fixture: ComponentFixture<MiddelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiddelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MiddelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
