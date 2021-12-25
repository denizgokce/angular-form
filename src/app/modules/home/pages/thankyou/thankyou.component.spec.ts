import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ThankyouComponent} from './thankyou.component';
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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ThankyouComponent', () => {
  let component: ThankyouComponent;
  let fixture: ComponentFixture<ThankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThankyouComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        MatCardModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
