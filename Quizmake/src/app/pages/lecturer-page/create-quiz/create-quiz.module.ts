import { UploadTaskComponent } from "./quiz-management/upload-task/upload-task.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateQuizRoutingModule } from "./create-quiz-routing.module";
import { CreateQuizComponent } from "./create-quiz.component";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from "@angular/material/menu";
import {MatBadgeModule} from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from "@angular/material/expansion";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CdkScrollableModule } from "@angular/cdk/scrolling";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropzoneDirective } from "../directives/dropzone.directive";
import { QuizManagementComponent } from "./quiz-management/quiz-management.component";
import { ExamManagementComponent } from "./exam-management/exam-management.component";
import { CreateExamStepperComponent } from './exam-management/create-exam-stepper/create-exam-stepper.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExamListComponent } from './exam-management/exam-list/exam-list.component';
import { ChooseQuizComponent } from './exam-management/create-exam-stepper/choose-quiz/choose-quiz.component';

@NgModule({
  declarations: [
    DropzoneDirective,
    CreateQuizComponent,
    UploadTaskComponent,
    QuizManagementComponent,
    ExamManagementComponent,
    CreateExamStepperComponent,
    ExamListComponent,
    ChooseQuizComponent,
  ],
  imports: [
    CommonModule,
    CreateQuizRoutingModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatTabsModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatStepperModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatBadgeModule,
    MatExpansionModule,
    CdkScrollableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class CreateQuizModule {}
