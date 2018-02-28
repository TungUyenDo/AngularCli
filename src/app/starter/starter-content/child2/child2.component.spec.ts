import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2 } from './child2.component';

describe('Child2', () => {
  let component: Child2;
  let fixture: ComponentFixture<Child2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
