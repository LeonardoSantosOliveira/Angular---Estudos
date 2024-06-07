import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithChildrenComponent } from './form-with-children.component';

describe('FormWithChildrenComponent', () => {
  let component: FormWithChildrenComponent;
  let fixture: ComponentFixture<FormWithChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormWithChildrenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormWithChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
