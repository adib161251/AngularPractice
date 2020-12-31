import { SummaryPipe } from './summary.pipe';
import { CourseService } from './courses.service';
import { CourseComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { BootstapContentComponent } from './bootstap-content/bootstap-content.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GetComponent } from './get/get.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TestComponent,
    SummaryPipe,
    TitleCasePipe,
    BootstapContentComponent,
    InputFormatDirective,
    ZippyComponent,
    UserFormComponent,
    SignUpFormComponent,
    ChangePasswordComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [
    GetComponent 
  ]
})
export class AppModule { }
