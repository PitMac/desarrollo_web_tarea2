import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounoComponent } from './couno.component';

describe('CounoComponent', () => {
  let component: CounoComponent;
  let fixture: ComponentFixture<CounoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
