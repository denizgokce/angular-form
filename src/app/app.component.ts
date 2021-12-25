import {Component, OnInit} from '@angular/core';
import {ThemeService} from "./core/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'roomex';

  constructor(private readonly themeService: ThemeService) {
  }

  isDarkTheme = false;

  ngOnInit(): void {
    this.themeService.observable.subscribe(isDarkTheme => {
      this.isDarkTheme = isDarkTheme
    });
  }
}
