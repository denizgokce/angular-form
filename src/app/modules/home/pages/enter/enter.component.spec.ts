import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EnterComponent} from './enter.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {HomeRoutingModule} from "../../home-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgxUiLoaderModule} from "ngx-ui-loader";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('EnterComponent', () => {
  let component: EnterComponent;
  let fixture: ComponentFixture<EnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
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
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
