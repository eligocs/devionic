
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import * as $ from 'jquery';
import { UserResponse } from '../../../providers/Models/UserDetails';
import { TransactionResponse } from '../../../providers/Models/TransactionDetails';
import * as moment from 'moment';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  moment: any = moment;
  slideOptsOne : any ;
  public UserResponse: UserResponse;
  public RdResponse: any = []; 
  public DdResponse: any = []; 
  public FdResponse: any = []; 
  public OlResponse: any = []; 
  public Saving: any = [];
  public RdPercent: any = [];
  public FdPercent: any = [];
  public DdPercent: any = [];
  public OlPercent: any = [];
  public today_interest: number;
  public TransactionResponse: TransactionResponse; 
  
  constructor(
    private storage: Storage,
    public navCtrl: NavController,
    public provider : ApihelperProvider,
    private router: Router
    
    ){
      
    }

ionViewDidEnter() {
  // User Details From API
    this.UserApi();
}
UserApi(){
this.provider.UserPanel().subscribe(data=>{
  this.UserResponse = this.provider.User_details(data);
  if(this.UserResponse){
    
    this.RdResponse = this.UserResponse.RD;
    this.DdResponse = this.UserResponse.DD;
    this.FdResponse = this.UserResponse.FD;
    this.OlResponse = this.UserResponse.OL;
    this.Saving = this.UserResponse.Saving;
    this.RdResponse.forEach((data) => {
      this.RdPercent.push(this.getPercent(data.maturity_amount, data.total_amount))
    });
    this.DdResponse.forEach((data) => {
      this.DdPercent.push(this.getPercent(data.maturity_amount, data.total_amount))
    });
    this.FdResponse.forEach((data) => {
      this.FdPercent.push(this.getPercent(data.maturity_amount, data.total_amount))
    });
    this.OlResponse.forEach((data) => {
      this.OlPercent.push(this.getPercent(data.loan_amount, data.current_debt))
    });
      
    let interest = this.Saving[0].interest_rate;
    let blc = this.Saving[0].balance_available;
    if(blc == ''){
      blc = 0;
    }else{
      blc= parseInt(blc);
    }
    if(interest == ''){
      interest = 0;
    }else{
      interest= parseInt(interest);
    }
      this.today_interest = (blc*interest)/100;
      setTimeout(function(){ 
          var max = 150.72259521484375;
          $.each($('.progress_cal'), function( index, value ){
          var percent = $(value).data('progress');
            $(value).children('.fill').attr('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
            $(value).children('.value').text(percent + '%');
          });
        }, 1);
  }
  

});
}
getPercent(totalAmt, PaidAmt){
  var percentamt: number = 0;
  if(totalAmt != 0 && PaidAmt != 0){
      percentamt = (PaidAmt/totalAmt)*100;
  }
  if(percentamt == 0){
    return percentamt;
  }
    return percentamt.toFixed(2);
}
ngOnInit() {
  // this.provider.presentLoading();
  this.slideOptsOne = {
    initialSlide: 1,
    slidesPerView: 1,
    autoplay:true,
    pager: true
    };
   
}
//Saving Click
saving: any;
SavingClick(type:string,slug:string){
  this.saving = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.saving)
    }
  };
  this.router.navigate(['dashboard/saving'], navigationExtras);
}
//End Saving Click
//DD Click
dd: any;
DdClick(type:string,slug:string){
  this.dd = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.dd)
    }
  };
  this.router.navigate(['/dashboard/dd/ddview'], navigationExtras);
}
//End DD Click

//RD Click
rd : any;
RdClick(type:string,slug:string){
  this.rd = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.rd)
    }
  };
  this.router.navigate(['/dashboard/rd/rdview'], navigationExtras);
}
// End RD CLick 
//FD Click
fd : any;
FdClick(type:string,slug:string){
  this.fd = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.fd)
    }
  };
  this.router.navigate(['/dashboard/fd/fdview'], navigationExtras);
}
// End FD CLick 
//OL Click
ol : any;
OlClick(type:string,slug:string){
  this.ol = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.ol)
    }
  };
  this.router.navigate(['/dashboard/ol'], navigationExtras);
}
// End OL CLick 


logout(){
      this.storage.remove('offline-user');
      this.navCtrl.navigateRoot('/');
}
  
 
}