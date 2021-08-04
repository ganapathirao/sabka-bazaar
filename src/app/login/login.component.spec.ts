import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports :[ReactiveFormsModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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
    component.loginForm.setValue({
      email : 'test@gmail.com',
      password : 123456
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').disabled).toBeFalsy();
  })

});
