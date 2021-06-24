import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnakKosFormComponent } from './anak-kos-form.component';

describe('AnakKosFormComponent', () => {
  let component: AnakKosFormComponent;
  let fixture: ComponentFixture<AnakKosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnakKosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnakKosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
