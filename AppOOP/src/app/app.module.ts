import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainMenu } from '../pages/menu/menu';

import { BBEAudit } from '../pages/bbe1/bbe1';
import { Department1B } from '../pages/dept1b/dept1b';
import { Department2B } from '../pages/dept2b/dept2b';
import { Department3B } from '../pages/dept3b/dept3b';
import { Department4B } from '../pages/dept4b/dept4b';

import { HHAudit } from '../pages/hh1/hh1';
import { Department1H } from '../pages/dept1h/dept1h';
import { Department2H } from '../pages/dept2h/dept2h';
import { Department3H } from '../pages/dept3h/dept3h';
import { Department4H } from '../pages/dept4h/dept4h';

import { WardTrendsPage } from '../pages/ward-trends/ward-trends';
import { SummaryScreen } from '../pages/summary/summary';
import { BBESummary } from '../pages/bbesummary/bbesummary';
import { HHSummary } from '../pages/hhsummary/hhsummary';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainMenu,
    BBEAudit,
    Department1B,
    Department2B,
    Department3B,
    Department4B,
    HHAudit,
    Department1H,
    Department2H,
    Department3H,
    Department4H,
    WardTrendsPage,
    SummaryScreen,
    BBESummary,
    HHSummary

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainMenu,
    BBEAudit,
    Department1B,
    Department2B,
    Department3B,
    Department4B,
    HHAudit,
    Department1H,
    Department2H,
    Department3H,
    Department4H,
    WardTrendsPage,
    SummaryScreen,
    BBESummary,
    HHSummary

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}