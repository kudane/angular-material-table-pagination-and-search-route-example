import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { PeriodicService } from './periodic.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  constructor(periodicService: PeriodicService) {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}
}
