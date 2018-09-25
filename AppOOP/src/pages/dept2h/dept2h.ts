import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HHAudit } from '../hh1/hh1';

@Component({
  selector: 'page-dept2h',
  templateUrl: 'dept2h.html'
})
export class Department2H {

  constructor(public navCtrl: NavController) {}
  	savehh2(){
  		this.navCtrl.push(HHAudit);
  	}
}