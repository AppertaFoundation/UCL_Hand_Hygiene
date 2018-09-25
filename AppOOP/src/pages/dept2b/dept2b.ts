import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BBEAudit } from '../bbe1/bbe1';

@Component({
  selector: 'page-dept2b',
  templateUrl: 'dept2b.html'
})
export class Department2B {

  constructor(public navCtrl: NavController) {}
  	savebb2(){
  		this.navCtrl.push(BBEAudit);
  	}
}