import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { CreatePdf } from 'src/providers/CreatePdf';
 
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  public ProfileResponse: any;
  
  constructor( private providor: ApihelperProvider ,private memberdetail: CreatePdf, private platform: Platform) { }
 
  ionViewDidEnter() {
       // User Details From API
    this.ProfileResponse = this.memberdetail.getMember();
    console.log('memm',this.ProfileResponse);
  }
 
}