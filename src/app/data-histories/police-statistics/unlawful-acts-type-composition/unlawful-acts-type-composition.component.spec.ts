import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlawfulActsTypeCompositionComponent } from './unlawful-acts-type-composition.component';

describe('UnlawfulActsTypeCompositionComponent', () => {
  let component: UnlawfulActsTypeCompositionComponent;
  let fixture: ComponentFixture<UnlawfulActsTypeCompositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlawfulActsTypeCompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlawfulActsTypeCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
