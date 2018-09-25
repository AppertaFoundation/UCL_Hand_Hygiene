import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HHAudit } from '../hh1/hh1';

@Component({
  selector: 'page-dept4h',
  templateUrl: 'dept4h.html'
})
export class Department4H {

  constructor(public navCtrl: NavController) {}
  	savehh4(){
  		this.navCtrl.push(HHAudit);
  	}
}