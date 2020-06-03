import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-material-template';
  loading: boolean = true;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    this.setTitle(this.title)
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
