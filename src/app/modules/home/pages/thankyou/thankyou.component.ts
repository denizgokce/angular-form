import {Component, HostListener, OnInit} from '@angular/core';
import {FormViewModel} from "../../view-models/form-view-model";
import {FormModel} from "../../models/FormModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  public screenWidth!: number;
  public screenHeight!: number;

  constructor(
    private formViewModel: FormViewModel,
    private router: Router,
  ) {
    this.onResize();
  }

  model: FormModel = new FormModel();

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight - 64;
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.model = this.formViewModel.getForm();
    if (!this.model){
      this.router.navigateByUrl('/').then();
    }
    console.log(this.model);
  }

}
