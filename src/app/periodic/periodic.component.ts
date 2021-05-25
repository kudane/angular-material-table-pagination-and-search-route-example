import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-periodic',
  templateUrl: './periodic.component.html'
})
export class PeriodicComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log('ngOnInit');

    this.route.queryParams.pipe(
      distinctUntilChanged(),
      tap(params => console.log('params', params))
    );
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
