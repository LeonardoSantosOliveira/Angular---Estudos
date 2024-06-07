import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { TextareaComponent } from './elements/textarea/textarea.component';
import { SelectComponent } from './elements/select/select.component';
import { RadioButtonComponent } from './elements/radio-button/radio-button.component';
import { CheckBoxComponent } from './elements/check-box/check-box.component';
import { NgFormComponent } from './elements/ng-form/ng-form.component';
import { SubmitComponent } from './elements/submit/submit.component';
import { FormGroupComponent } from './elements/form-group/form-group.component';
import { FormWithChildrenComponent } from './elements/form-with-children/form-with-children.component';
import { FormUserComponent } from './elements/form-user/form-user.component';
import { ProfessionComponent } from './elements/profession/profession.component';
import { CustomValidatorsComponent } from './elements/custom-validators/sincrono/ex1/custom-validators.component';
import { InvalidTextValidatorDirective } from './elements/custom-validators/sincrono/ex1/directives/invalid-text-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    TextareaComponent,
    SelectComponent,
    RadioButtonComponent,
    CheckBoxComponent,
    NgFormComponent,
    SubmitComponent,
    FormGroupComponent,
    FormWithChildrenComponent,
    FormUserComponent,
    ProfessionComponent,
    CustomValidatorsComponent,
    InvalidTextValidatorDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
