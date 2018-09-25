import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HHAudit } from '../hh1/hh1';

@Component({
  selector: 'page-dept1h',
  templateUrl: 'dept1h.html'
})
export class Department1H {

  constructor(public navCtrl: NavController) {}
  	savehh1(){
  		this.navCtrl.push(HHAudit);
  	}
}