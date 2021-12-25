import {Component, HostListener, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieService} from "../../../../core/http/movie/movie.service";
import {debounceTime, distinctUntilChanged, Observable, startWith, switchMap} from "rxjs";
import {FormViewModel} from "../../view-models/form-view-model";
import {Router} from "@angular/router";
import {FormModel} from "../../models/FormModel";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatOptionSelectionChange} from "@angular/material/core";
import {isNull, isNullOrUndefined} from "util";

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

  public screenWidth!: number;
  public screenHeight!: number;

  constructor(
    private ngxService: NgxUiLoaderService,
    private movieService: MovieService,
    private formViewModel: FormViewModel,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight - 64;
    this.screenWidth = window.innerWidth;
  }

  form: FormGroup | undefined;
  movies: any;
  selectedMovie: any;
  tempMovieList: any;
  movieInput:any;

  ngOnInit(): void {
    this.formViewModel.resetForm();
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        (c: FormControl) => {
          const isNumeric = (val: any): boolean => {
            return !isNaN(Number(val));
          }
          // @ts-ignore
          return (c && c.value && c.value.length > 0 && !Array.from(c.value).filter(x => x.trim() != '').some(char => isNumeric(char))) ? null : {
            invalid: 'Name can\'t contain any number'
          }
        }
      ]),
      username: new FormControl(null, Validators.email),
      country: new FormControl(null, Validators.required),
      postCode: new FormControl(null, [
        Validators.nullValidator,
        (c: FormControl) => {
          let result = null;
          if (this.form?.controls['country'].value === 'ie') {
            if (c.value && (c.value.length < 6 || c.value.length > 10)) {
              result = {
                invalid: 'Post Code must be between 6-10 characters'
              };
            }
          }
          if (this.form?.controls['country'].value === 'uk') {
            if (c.value && (!c.value || c.value.length <= 0) || !(new RegExp('^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabdhjlnp-uw-z]{2}$').test(c.value))) {
              result = {
                invalid: 'Post Code is invalid for United Kingdom'
              };
            }
          }
          return result;
        }
      ]),
      movie: new FormControl(),
    });
    this.movies = this.form.controls['movie'].valueChanges
      .pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(val => {
          return new Observable<any>((subscriber) => {
            if ((val as string).length < 3) {
              subscriber.next([]);
            } else {
              this.movieService.getMovies((val as string)).subscribe(resp => {
                if (resp) {
                  this.tempMovieList = resp;
                  subscriber.next(resp.map(x => x['Title']));
                } else {
                  subscriber.next([]);
                }
              });
            }
          });
        })
      );
  }

  onFormSubmit() {
    if (this.form?.valid) {
      const model: FormModel = new FormModel({
        name: this.form.controls['name'].value,
        username: this.form.controls['username'].value,
        country: this.form.controls['country'].value,
        postCode: this.form.controls['name'].value,
        movie: this.selectedMovie,
      });
      console.log(model);
      this.formViewModel.setForm(model);
      this.router.navigateByUrl('thankyou').then();
    } else {
      this.snackBar.open('Invalid Form', 'Form Post', {
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        duration: 1000
      })
    }
  }

  onSelectionChange($event: MatOptionSelectionChange) {
    this.selectedMovie = this.tempMovieList.find((x: any) => x['Title'] === $event.source.value);
  }
}
