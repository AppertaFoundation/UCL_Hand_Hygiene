import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BBEAudit } from '../bbe1/bbe1';

@Component({
  selector: 'page-dept3b',
  templateUrl: 'dept3b.html'
})
export class Department3B {

  constructor(public navCtrl: NavController) {}
  	savebb3(){
  		this.navCtrl.push(BBEAudit);
  	}
}