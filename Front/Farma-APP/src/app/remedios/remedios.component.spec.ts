import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemediosComponent } from './remedios.component';

describe('RemediosComponent', () => {
  let component: RemediosComponent;
  let fixture: ComponentFixture<RemediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemediosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
