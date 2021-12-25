import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormModel} from "../models/FormModel";

@Injectable({
  providedIn: 'root'
})
export class FormViewModel {

  private source = new BehaviorSubject(null);
  observable = this.source.asObservable();

  constructor() {
  }

  private cachedForm: any;


  notify = () => {
    this.source.next(this.cachedForm);
  };


  setForm = (model: FormModel) => {
    this.cachedForm = model;
  }
  resetForm = () => {
    this.cachedForm = null;
  }
  getForm = () => {
    return this.cachedForm;
  }

}
