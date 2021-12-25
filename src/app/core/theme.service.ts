import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private source = new BehaviorSubject(false);
  observable = this.source.asObservable();

  isDarkTheme = false;

  constructor() { }

  notify = () => {
    this.source.next(this.isDarkTheme);
  };

  toggleTheme = () => {
    this.isDarkTheme = !this.isDarkTheme;
    this.notify();
  }
}
