import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { SavingResponse } from '../../../../providers/Models/saving_details';
import { MemberSavingResponse } from '../../../../providers/Models/MemberSaving';
import * as moment from 'moment';
import { CreatePdf } from 'src/providers/CreatePdf';
import { ActivatedRoute } from '@angular/router';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-saving',
  templateUrl: './saving.page.html',
  styleUrls: ['./saving.page.scss'],
})
export class SavingPage implements OnInit {
  letterObj = {
    trans_type:[],
    trans_amt: [],
    text: '',
   
  }
  data = [];
   
  momentjs: any = moment;
  end_date: '';
  start_date: '';
  pdfObj = null;
  SavingResponse: any =  [];
  MemberSavingResponse: MemberSavingResponse;
  fileTransfer: any;
  savingdata: any;
  SavingDetails: any;
  SavingTransactions: any = [];
  MemberSavingTransactions: any = [];
  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private provider: ApihelperProvider,
    private pdfmake:  CreatePdf
      ) {
   }


    

ionViewDidEnter() {

  this.route.queryParams.subscribe(params => {
    if (params && params.special) {
      this.savingdata = JSON.parse(params.special);
      this.provider.MemberSaving(this.savingdata.type,this.savingdata.slug).subscribe(data=>{
        
        this.MemberSavingResponse = this.provider.MemberSaving_Details(data);
        this.SavingDetails = this.MemberSavingResponse.details; 
        console.log(this.SavingDetails);
        this.SavingResponse = this.MemberSavingResponse.transactions; 
        console.log(this.SavingTransactions);
      });
    }
  });
  
}
ngOnInit(){
  this.provider.presentLoading();
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
  this.SavingTransactions= [];
  if((this.start_date == undefined || this.start_date == '')  || (this.end_date == undefined || this.end_date == '') ){
    
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.savingdata = JSON.parse(params.special);
        this.provider.MemberSaving(this.savingdata.type,this.savingdata.slug).subscribe(data=>{
          
          this.MemberSavingTransactions = this.provider.MemberSaving_Details(data);
          this.SavingDetails = this.MemberSavingTransactions.details; 
          this.SavingTransactions = this.MemberSavingTransactions.transactions; 
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
      this.savingdata = JSON.parse(params.special);
      this.provider.MemberSaving(this.savingdata.type,this.savingdata.slug).subscribe(data=>{
        this.SavingResponse = this.provider.MemberSaving_Details(data);
       let SavingTransactions1 = this.SavingResponse.transactions;
        this.SavingTransactions = SavingTransactions1.filter((item: any) => {
          let date = new Date(item.transaction_date);
            date = this.momentjs(date).format("YYYY-MM-DD");
          return date >= start_date && date <= end_date;
        });
        if(this.SavingTransactions==''){
          this.SavingTransactions == '';
        }
      });
    }
  });
  
  
}
}
createPdf() {
  this.pdfmake.createPdf(this.SavingResponse); 
}
//END PDF CODE 








}
