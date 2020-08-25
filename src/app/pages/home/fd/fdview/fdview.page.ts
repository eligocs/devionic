import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { FdResponse } from 'src/providers/Models/MemberFD';
import * as moment from 'moment';
import { CreatePdf } from 'src/providers/CreatePdf';

@Component({
  selector: 'app-fdview',
  templateUrl: './fdview.page.html',
  styleUrls: ['./fdview.page.scss'],
})
export class FdviewPage implements OnInit {
  tableHeader= ['tranx_id', 'amount','transaction_type', 'transaction_date', 'payment_mode', 'transaction_type']
  FdResponse: any = [];
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private provider : ApihelperProvider,
    private pdfmake: CreatePdf
  ) { }
  FdDetails: any;
  FdTransactions: any = [];
  fddata: any;
  momentjs: any = moment;
  MemberFdTransactions: any = [];
  end_date: '';
  start_date: '';
  pdfObj = null;
  ngOnInit() {
    
  }
  ionViewDidEnter() {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.fddata = JSON.parse(params.special);
        this.provider.MemberFD(this.fddata.type,this.fddata.slug).subscribe(data=>{
          this.provider.presentLoading();
          this.FdResponse = this.provider.MemberFD_Details(data);
          if(this.FdResponse){
            this.FdDetails = this.FdResponse.details;
            this.FdTransactions = this.FdResponse.transactions;
            if(this.FdTransactions){
              this.FdTransactions = this.FdResponse.transactions;
            }else{
              this.FdTransactions = '';
            }
          }
        });
      }
    });
  }

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
          this.fddata = JSON.parse(params.special);
          this.provider.MemberFD(this.fddata.type,this.fddata.slug).subscribe(data=>{
            
            this.MemberFdTransactions = this.provider.MemberFD_Details(data);
            if(this.MemberFdTransactions.length != 0){
            this.FdTransactions = this.MemberFdTransactions.transactions; 
            }else{
              this.FdTransactions = [];
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
        this.fddata = JSON.parse(params.special);
        this.provider.MemberFD(this.fddata.type,this.fddata.slug).subscribe(data=>{
        this.FdResponse = this.provider.MemberFD_Details(data);
        if(this.FdResponse.length != 0){
         let FdTransactions1 = this.FdResponse.transactions;
          this.FdTransactions = FdTransactions1.filter((item: any) => {
            let date = new Date(item.transaction_date);
              date = this.momentjs(date).format("YYYY-MM-DD");
            return date >= start_date && date <= end_date;
          });
          if(this.FdTransactions==''){
            this.FdTransactions == '';
          }
        }else{
          this.FdTransactions == [];
        }
        });
      }
    });
    
    
  }
}

createPdf() {
  this.pdfmake.createPdf(this.FdTransactions); 
}
}