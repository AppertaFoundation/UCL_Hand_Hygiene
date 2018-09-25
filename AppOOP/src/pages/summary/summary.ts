import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainMenu } from '../menu/menu';
import { BBESummary } from '../bbesummary/bbesummary';
import { HHSummary } from '../hhsummary/hhsummary';

@Component({
  selector: 'summary',
  templateUrl: 'summary.html'
})
export class SummaryScreen {

  constructor(public navCtrl: NavController) {}
  	closess(){
  		this.navCtrl.push(MainMenu);
  	}

    bbesummary(){
      this.navCtrl.push(BBESummary);
    }

    hhsummary(){
      this.navCtrl.push(HHSummary);
    }
  }