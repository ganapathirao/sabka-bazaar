import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports :[ReactiveFormsModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit button should be disabled', () => {
    let isDisabled = fixture.nativeElement.querySelector('button').disabled;
    expect(isDisabled).toBeTruthy();
  })

  it('submit button should be enabled', () => {
    component.registerForm.patchValue({
      firstName : 'test',
      lastName : 'user',
      email :'test@gmail.com',
      password : 123456,
      cnfPassword: 123456
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').disabled).toBeFalsy();
  })

});
