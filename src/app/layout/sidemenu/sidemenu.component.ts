/*
 * @Date: 2020-05-20 15:31:13
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-20 15:34:43
 */ 
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.less']
})
export class SidemenuComponent implements OnInit {

  @Input() isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
