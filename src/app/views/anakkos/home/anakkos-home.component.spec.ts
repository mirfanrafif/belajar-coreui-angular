import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnakkosHomeComponent } from './anakkos-home.component';

describe('AnakkosHomeComponent', () => {
  let component: AnakkosHomeComponent;
  let fixture: ComponentFixture<AnakkosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnakkosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnakkosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
