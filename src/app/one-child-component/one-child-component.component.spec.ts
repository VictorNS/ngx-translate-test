import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneChildComponentComponent } from './one-child-component.component';

describe('OneChildComponentComponent', () => {
  let component: OneChildComponentComponent;
  let fixture: ComponentFixture<OneChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
