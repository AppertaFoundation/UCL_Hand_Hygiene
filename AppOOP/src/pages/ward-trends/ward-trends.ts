import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'Chart.js';
import { MainMenu } from '../menu/menu';



@Component({
  selector: 'page-ward-trends',
  templateUrl: 'ward-trends.html'
})
export class WardTrendsPage {
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  constructor(public navCtrl: NavController) {}
    closewtrend(){
      this.navCtrl.push(MainMenu);
    }
  
  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Compliance percentage %",
                        fill: false,
                        lineTension: 0,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(0,125,255,1)",
                        pointBackgroundColor: "rgba(0,125,255,1)",
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(0,125,255,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointStyle: 'rect',
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 97, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
 
        });
  }
}