import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private readonly themeService: ThemeService
  ) {
  }

  isDarkTheme = false;

  ngOnInit(): void {
    this.themeService.observable.subscribe(isDarkTheme => {
      this.isDarkTheme = isDarkTheme
    });
  }

  toggleDarkTheme = () => {
    this.themeService.toggleTheme();
  }
}
