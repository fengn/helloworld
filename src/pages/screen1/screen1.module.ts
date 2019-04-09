import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Screen1Page } from './screen1';

@NgModule({
  declarations: [
    Screen1Page,
  ],
  imports: [
    IonicPageModule.forChild(Screen1Page),
  ],
})
export class Screen1PageModule {}
