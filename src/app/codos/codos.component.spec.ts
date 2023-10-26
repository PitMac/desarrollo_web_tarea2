import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodosComponent } from './codos.component';

describe('CodosComponent', () => {
  let component: CodosComponent;
  let fixture: ComponentFixture<CodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
