import { Component, OnInit } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, range, pipe, from, of } from 'rxjs';
import { map, filter, tap, switchMap, subscribeOn } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentCount = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getConfig().subscribe((data: any) => console.log(data));
    //  of('a', 'b', 'c')
    //   .subscribe( x => console.log(x));

    // range(1, 10)
    // .pipe(
    //     filter( x => x % 2 === 0),
    //     map( x => x * 2 ),
    //     tap (x => console.log(x))
    //     )
    //   .subscribe( x => console.log(x));
  }

  handleCountChanged(e) {
    this.currentCount = e;
  }

  getConfig() {
    return this.http.get('assets/data.json');
  }
}

