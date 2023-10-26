import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotresComponent } from './cotres.component';

describe('CotresComponent', () => {
  let component: CotresComponent;
  let fixture: ComponentFixture<CotresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
