import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HHAudit } from '../hh1/hh1';

@Component({
  selector: 'page-dept3h',
  templateUrl: 'dept3h.html'
})
export class Department3H {

  constructor(public navCtrl: NavController) {}
  	savehh3(){
  		this.navCtrl.push(HHAudit);
  	}
}