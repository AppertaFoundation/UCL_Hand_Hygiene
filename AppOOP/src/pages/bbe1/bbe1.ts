import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Department1B } from '../dept1b/dept1b';
import { Department2B } from '../dept2b/dept2b';
import { Department3B } from '../dept3b/dept3b';
import { Department4B } from '../dept4b/dept4b';
import { HHAudit } from '../hh1/hh1';

@Component({
  selector: 'page-bbe1',
  templateUrl: 'bbe1.html'
})
export class BBEAudit {

  constructor(public navCtrl: NavController) {}
  	dept1b(){
  		this.navCtrl.push(Department1B);
  	}

  	dept2b(){
  		this.navCtrl.push(Department2B);
  	}

  	dept3b(){
  		this.navCtrl.push(Department3B);
  	}

  	dept4b(){
  		this.navCtrl.push(Department4B);
  	}

    submitBBE(){
      this.navCtrl.push(HHAudit);
    }

  	
  }