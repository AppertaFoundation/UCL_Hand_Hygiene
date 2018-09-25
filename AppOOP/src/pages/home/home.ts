import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainMenu } from '../menu/menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  
  submit(){
  	this.navCtrl.push(MainMenu);
  }

}