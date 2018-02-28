import { Child1 } from './child1.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('Child1', () => {
  let component: Child1;
  let fixture: ComponentFixture<Child1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
