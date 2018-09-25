import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BBEAudit } from '../bbe1/bbe1';

@Component({
  selector: 'page-dept4b',
  templateUrl: 'dept4b.html'
})
export class Department4B {

  constructor(public navCtrl: NavController) {}
  	savebb4(){
  		this.navCtrl.push(BBEAudit);
  	}
}