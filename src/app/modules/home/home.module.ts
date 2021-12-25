import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { EnterComponent } from './pages/enter/enter.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgxUiLoaderModule} from "ngx-ui-loader";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    EnterComponent,
    ThankyouComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    NgxUiLoaderModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSnackBarModule,
  ]
})
export class HomeModule { }
