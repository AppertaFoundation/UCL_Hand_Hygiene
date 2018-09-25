import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Department1H } from '../dept1h/dept1h';
import { Department2H } from '../dept2h/dept2h';
import { Department3H } from '../dept3h/dept3h';
import { Department4H } from '../dept4h/dept4h';
import { SummaryScreen } from '../summary/summary';


@Component({
  selector: 'page-hh1',
  templateUrl: 'hh1.html'
})
export class HHAudit {

  constructor(public navCtrl: NavController) {}
  	dept1h(){
  		this.navCtrl.push(Department1H);
  	}

  	dept2h(){
  		this.navCtrl.push(Department2H);
  	}

  	dept3h(){
  		this.navCtrl.push(Department3H);
  	}

  	dept4h(){
  		this.navCtrl.push(Department4H);
  	}

    submitHH(){
      this.navCtrl.push(SummaryScreen);
    }
  }