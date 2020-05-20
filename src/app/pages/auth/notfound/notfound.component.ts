/*
 * @Date: 2020-05-20 16:02:51
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-20 16:09:19
 */
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.less']
})
export class NotfoundComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }


  goPage(page: string) {
    if (!page) { return; }
    this.router.navigate([page]);
  }
}
