import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDisplayItemComponent } from './action-display-item.component';

describe('ActionDisplayItemComponent', () => {
  let component: ActionDisplayItemComponent;
  let fixture: ComponentFixture<ActionDisplayItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionDisplayItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
