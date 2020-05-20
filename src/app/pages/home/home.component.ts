/*
 * @Date: 2020-05-19 17:24:58
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-20 17:31:18
 */
import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from 'src/app/auth/can-deactivate.guard';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, CanComponentDeactivate {


  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  canDeactivate() {
    console.log('想返回？先过我这关');
    return this.authService.canBackModal();
  }
}
