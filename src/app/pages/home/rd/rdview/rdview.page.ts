import { Component, OnInit } from '@angular/core';
import { NavParams, NavController,Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { CreatePdf } from 'src/providers/CreatePdf';
import { RdResponse } from 'src/providers/Models/MemberRD';
import * as moment from 'moment';


@Component({
  selector: 'app-rdview',
  templateUrl: './rdview.page.html',
  styleUrls: ['./rdview.page.scss'],
})
export class RdviewPage implements OnInit {
  RdResponse: RdResponse = [];
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private provider : ApihelperProvider,
    private pdfmake : CreatePdf
  ) {  }
  rddata: any;
  RdDetails: any;
  RdTransactions: any = [];
  MemberRdTransactions: any = [];
  momentjs: any = moment;
  end_date: '';
  start_date: '';
  pdfObj = null;
  ngOnInit(){
    this.provider.presentLoading();
  }
  ionViewDidEnter() {
    this.getapidata()
  }
   getapidata(){
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.rddata = JSON.parse(params.special);
        this.provider.MemberRD(this.rddata.type,this.rddata.slug).subscribe(data=>{
          this.RdResponse = this.provider.MemberRD_Details(data);
          if(this.RdResponse){
            this.RdDetails = this.RdResponse.details;
            this.RdTransactions = this.RdResponse.transactions;
            if(this.RdTransactions){
              this.RdTransactions = this.RdResponse.transactions;
            }else{
              this.RdTransactions = [];
            }
          }
        });
      }
    });
  }
//PDF CODE START
StartDate(){
  if(!this.start_date){
    console.log(this.start_date);
  }

  return this.start_date;
  
}
EndDate(){
  if(!this.end_date){
    console.log(this.end_date);
  }

  return this.end_date;
}
Apply_Date(){
  if((this.start_date == undefined || this.start_date == '')  || (this.end_date == undefined || this.end_date == '') ){
    
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.rddata = JSON.parse(params.special);
        this.provider.MemberSaving(this.rddata.type,this.rddata.slug).subscribe(data=>{
          
          this.MemberRdTransactions = this.provider.MemberSaving_Details(data);
          if(this.MemberRdTransactions.length != 0){
          this.RdTransactions = this.MemberRdTransactions.transactions; 
          }else{
            this.RdTransactions = [];
          }
        });
      }
    });
    this.provider.presentToastWithOptions('Please select date first!');
  }else{
    let start_date = this.momentjs(this.start_date).format("YYYY-MM-DD")
    let end_date   = this.momentjs(this.end_date).format("YYYY-MM-DD");
  this.provider.presentLoading();
  this.route.queryParams.subscribe(params => {
    if (params && params.special) {
      this.rddata = JSON.parse(params.special);
      this.provider.MemberRD(this.rddata.type,this.rddata.slug).subscribe(data=>{
        this.RdResponse = this.provider.MemberRD_Details(data);
        if(this.RdResponse.length != 0){
        let RdTransactions1 = this.RdResponse.transactions;
        this.RdTransactions = RdTransactions1.filter((item: any) => {
          let date = new Date(item.transaction_date);
            date = this.momentjs(date).format("YYYY-MM-DD");
          return date >= start_date && date <= end_date;
        });
        if(this.RdTransactions==''){
          this.RdTransactions == [];
        }
      }else{
        this.RdTransactions == [];
      }
      });
    }
  });
  
  
}
}
createPdf() {
  this.pdfmake.createPdf(this.RdTransactions); 
}
}
