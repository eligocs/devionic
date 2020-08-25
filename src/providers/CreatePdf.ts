
import { NavParams, NavController,Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { RdResponse } from 'src/providers/Models/MemberRD';
import * as moment from 'moment';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import pdfMake from 'pdfmake/build/pdfmake';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CreatePdf {
  RdResponse: RdResponse = [];
  public pdfData: any=[];
  tableHeader= ['transaction_date', 'payment_mode','amount', 'transaction_type','tranx_id']
  
  tableHead= ['Date', 'Payment Mode','Amount', 'Type','Transaction ID']
  memberheader= ['first_name', 'last_name','father_name', 'member_number']
  membertableHead= ['First Name','Last Name', 'Father Name','Account Number']
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute,
    private provider : ApihelperProvider,
    
    private plt: Platform, private file: File, private fileOpener: FileOpener,
  ) { 
    this.provider.presentLoading();
    this.storage.get('current_member').then((val) => {
      console.log('val',val);
     this.MemberPDf.push(val);
   });
   }
  rddata: any;
  RdDetails: any;
  RdTransactions: any = [];
  newarray: any= [];
  MemberRdTransactions: any = [];
  momentjs: any = moment;
  end_date: '';
  start_date: '';
  pdfObj = null;
  MemberPDf = [];
  ngOnInit(){
    
  }
  ionViewDidEnter() {
   
    // this.RdResponse =  this.getapidata();
    this.getapidata()
    
  }
  getMember(){
    return this.MemberPDf;
  }
   getapidata(){
    let res: any = [];
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
  }

  return this.start_date;
  
}
EndDate(){
  if(!this.end_date){
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
          this.RdDetails = this.MemberRdTransactions.details; 
          this.RdTransactions = this.MemberRdTransactions.transactions; 
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
       let RdTransactions1 = this.RdResponse.transactions;
        this.RdTransactions = RdTransactions1.filter((item: any) => {
          let date = new Date(item.transaction_date);
            date = this.momentjs(date).format("YYYY-MM-DD");
          return date >= start_date && date <= end_date;
        });
        if(this.RdTransactions==''){
          this.RdTransactions == '';
        }
      });
    }
  });
  
  
}
}
//  fetchEvent(){  
//     let neww = this.RdTransactions;
//     console.log('neww', neww);
//     return this.table(neww, this.tableHeader,this.tableHead,)
// }

buildTableBody(data, columns, tableHeader) {
  console.log('tabledata', data);
  var body = [];
  var column= [];
  for(var i=0; i<tableHeader.length; i++){
    var rem_und = tableHeader[i].replace('_', ' ');
    var final= rem_und.charAt(0).toUpperCase() + rem_und.substr(1).toLowerCase();
    column.push(final);
  }
  body.push(column);
  data.forEach(function(row) {
      var dataRow = [];

      columns.forEach(function(column) {
          dataRow.push(row[column].toString());
      })

      body.push(dataRow);
  });
  
  return body;
}

 table(data, columns, tableHeader) {
   console.log('dataa',data)
  return {
      table: {
          headerRows: 1,
          body: this.buildTableBody(data, columns, tableHeader)
      },
      style: 'tableHeader'
      
  };
  
}



createPdf(obj) {
  let neww = obj;
  var result = neww.filter(function(result1) {
    
  delete result1.change_installments;
  delete result1.collection_user_id;
  delete result1.commission_status;
  delete result1.company_branch_id;
  delete result1.company_id;
  delete result1.created_at;
  delete result1.id;
  delete result1.is_processed;
  delete result1.message;
  delete result1.payment_status;
  delete result1.rd_account_id;
  delete result1.reference_type;
  delete result1.slug;
  delete result1.transaction_info;
  delete result1.updated_at;
  return  result1;  
});
 
var resultMember = this.MemberPDf.filter(function(result1) {
    
  delete result1.company_branch_id;
  delete result1.company_id;
  delete result1.dob;
  delete result1.enrollment_date;
  delete result1.gender;
  delete result1.nominee_name;
  delete result1.id;
  delete result1.title;
  delete result1.user_id;
  delete result1.member_image
  
  return  result1;  
});
// result.orderBy(result.transaction_date,result.payment_mode,result.amount,result.transaction_type,result.tranx_id,result.transaction_status)
this.pdfData = [this.table(resultMember,this.memberheader, this.membertableHead),this.table(result, this.tableHeader, this.tableHead)];
  let pdf = {
    content: [
        { text: 'Your Transaction Details', style: 'header' },
        this.pdfData
         
    ]
  }
  var docDefinition = {
    
    content: [
      
    // {
    // columns: [
   
    // [
    // { text: 'BITCOIN', style: 'header' },
    // { text: 'Cryptocurrency Payment System', style: 'sub_header' },
    // { text: 'WEBSITE: https://bitcoin.org/', style: 'url' },
    // ]
    // ],
    
    // },
    this.table(resultMember,this.memberheader, this.membertableHead),
    this.table(result, this.tableHeader, this.tableHead)
    
    ],
    styles: {
    tableHeader:{
      // fontSize: 18,
      margin: [ 5, 2, 10, 20 ]
    },
    // headerRows:{
    //   fontSize: 68,
    // }
    
   
    },
    pageSize: 'A4',
    pageOrientation: 'portrait'
    };
    // pdfMake.createPdf(docDefinition).open();
    
  if(this.plt.is('cordova')){
    
  this.pdfObj = pdfMake.createPdf(docDefinition).getBlob(buffer => {
    this.file.resolveDirectoryUrl(this.file.externalDataDirectory)
      .then(dirEntry => {
        this.file.getFile(dirEntry, 'Transaction.pdf', { create: true })
          .then(fileEntry => {
            fileEntry.createWriter(writer => {
              writer.onwrite = () => {
                this.fileOpener.open(fileEntry.toURL(), 'application/pdf')
                  .then(res => { 
                    console.log("res",res );
                  })
                  .catch(err => {
                    console.log("Bad" );
                  });
              }
              writer.write(buffer);
            })
          })
          .catch(err => {
            console.log("Bad" );
          });
      })
      .catch(err => {
        console.log("Bad" );
      });

  });
}else{
  pdfMake.createPdf(docDefinition).open();
  
}
}
//END PDF CODE 
}
