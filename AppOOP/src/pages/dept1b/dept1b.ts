import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BBEAudit } from '../bbe1/bbe1';

@Component({
  selector: 'page-dept1b',
  templateUrl: 'dept1b.html'
})
export class Department1B {

  constructor(public navCtrl: NavController) {}
  	savebb1(){
  		this.navCtrl.push(BBEAudit);
  	}
}