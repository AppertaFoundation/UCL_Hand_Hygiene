import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BBEAudit } from '../bbe1/bbe1';
import { WardTrendsPage } from '../ward-trends/ward-trends'

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MainMenu {

   constructor(public navCtrl: NavController) {}
  newaudit(){
  	this.navCtrl.push(BBEAudit);
  }

  seetrends(){
  	this.navCtrl.push(WardTrendsPage);
  }

}