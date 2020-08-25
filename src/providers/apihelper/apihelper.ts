import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

import { CollectionListModel } from '../Models/collectionList';
import { Storage } from '@ionic/storage';
import { UserResponse } from '../../providers/Models/UserDetails';
import { RdResponse } from '../../providers/Models/MemberRD';
import { DdResponse } from '../../providers/Models/MemberDD';
import { FdResponse } from '../../providers/Models/MemberFD';
import { OlResponse } from '../../providers/Models/MemberOL';
import { SavingResponse } from '../../providers/Models/saving_details';
import { MemberSavingResponse } from '../../providers/Models/MemberSaving';
import { TransactionResponse } from '../../providers/Models/TransactionDetails';
import { ProfileResponse } from '../Models/ProfileDetails';


/*
  Generated class for the ApihelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApihelperProvider {
  

  private RootURL: string = "http://localhost:3000/api/";
   loading: any;
   HeaderConfig : any = [];
   Saving: any = [];
   DD: any = [];
   RD: any = []; 
   FD: any = [];
   OL: any = []; 
   DL: any = []; 
   GL: any = []; 
   FL: any = []; 
   PL: any = []; 


  constructor(public http: HttpClient, private toastCtrl: ToastController, public loadingCtrl : LoadingController, private storage: Storage) {
      
  }
  
  
// toast message


  // user login 
  UserLogin(username:string, password : string){
    
    let postData = new FormData();
    postData.append('username' , username);
    postData.append('password' , password);
    // call Api
    // console.log(this.RootURL + 'sign-in');
   return this.http.post(this.RootURL + 'sign-in',postData);
  }
  // set header values
  SetHeader(token:string,userid:string){
    
    let header = {
          'Authorization': 'Bearer ' + token,
          'user-id': userid,
        }
      this.HeaderConfig =  { headers: new HttpHeaders(header)};
      console.log("headerasd ", header);
    }
   UserPanel(){
     
    console.log('header',this.HeaderConfig);
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/dashboard',postData,this.HeaderConfig);
    return  data;
  }
  User_details(data){
    let response : UserResponse = [];
    console.log('data', data);
    this.FD = data.fixed_deposits;
    this.OL = data.other_loan_accounts;
    this.Saving=  data.saving_accounts;
    let rdDD = data.recurring_deposits;
    let current_member = data.current_member;

    /* All Loan Accounts */
    this.DL = data.deposit_loan_accounts; 
    this.GL = data.gold_loan_accounts; 
    this.FL = data.fixed_loan_accounts; 
    this.PL = data.property_loan_accounts;
    rdDD.forEach(element => {
       
      if(element.is_dds == true){
         this.DD.push(element);
      }
      if(element.is_dds == false){
        this.RD.push(element);
      }
      
      
    })
    // console.log('response', response)
    response = {
      Saving: this.Saving,
      RD: this.RD,
      DD: this.DD,
      FD: this.FD,
      OL: this.OL,
      current_member: current_member
    }
    return response;
  }
//Account Details
MemberRD(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  console.log(this.HeaderConfig);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberRD_Details(data){
  let response : RdResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberDD(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberDD_Details(data){
  let response : DdResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}
MemberFD(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberFD_Details(data){
  let response : FdResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberOL(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberOL_Details(data){
  let response : OlResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberGL(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberGL_Details(data){
  let response : any = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberDL(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberDL_Details(data){
  let response : any = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberRL(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberRL_Details(data){
  let response : any = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberPL(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberPL_Details(data){
  let response : any = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

Loan(type:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  return this.http.post(this.RootURL + 'member/account/passbook',postData,this.HeaderConfig);
}
Loan_Details(data){
  let response : any = [];
  if(data.status==true){
  response = {
    details : data.details,
  }
  }else{
    response = [];
  }
  return response;
}
//Saving Details
MemberSaving(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberSaving_Details(data){
  let response : MemberSavingResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  
  }else{
    response = [];
  }
  return response;
}

//Pasbook_Details
Pasbook_Details(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
Pasbook_Details_Details(data){
  let response : MemberSavingResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  
  }else{
    response = [];
  }
  return response;
}
//End
// Daily Transaction data from API
DailyTransaction(){
  // let postData = new FormData();
  // return this.http.post(this.RootURL + 'member/rd_data',postData,this.HeaderConfig);
  const Transaction = [
    {   
      "transaction_acc": "Saving Account",    
      "transaction_type": "Credit",
      "transaction_amt": "9000/-",
      "payment_method": "Cash"
    },
    {   
      "transaction_acc": "RD Account",    
      "transaction_type": "Credit",
      "transaction_amt": "6000/-",
      "payment_method": "Net Banking"
    },
    {   
      "transaction_acc": "DD Account",    
      "transaction_type": "Debit",
      "transaction_amt": "4000/-",
      "payment_method": "Cash"
    },
    {   
      "transaction_acc": "OL Account",    
      "transaction_type": "Debit",
      "transaction_amt": "8000/-",
      "payment_method": "UPI"
    },
  ]
    return Transaction;
}
DailyTransaction_Details(DailyTransaction){
  
  var response : TransactionResponse = [];
       response = {
        transaction_acc : DailyTransaction.transaction_acc,
        transaction_amt : DailyTransaction.transaction_amt,
        transaction_type : DailyTransaction.transaction_type,
        payment_method : DailyTransaction.payment_method,
      }
    
  return response;
}


// Saving Account Details

SavingTransaction_Details(SavingTransaction){
  
  var response : SavingResponse = [];
  console.log(response);
  SavingTransaction.forEach(element => {
      let transaction = {
        transaction_amt : element.transaction_amt,
        transaction_date : element.transaction_date,
        transaction_type : element.transaction_type,
        payment_method : element.payment_method,
        account : element.account,
        updated : element.updated,
      }
      response.push(transaction);
    });
    
  return response;
}


//  Profile details
ProfileImage(){
//   alert(file);
//   let postData = new FormData();
//   postData.append('file' , file);
//   // call Api
//  return this.http.post(this.RootURL + 'member/profile',postData,this.HeaderConfig);
 const ProfileData = 
  {   
    "name": "Rakhi Sharma",    
    "phone": "9876756456",
    "email": "rakusaab@gmail.com",
    "address": "House no-24, main bazar Bada gaon",
    "distt": "Shimla",
    "pin_code": "171011",

  }
  return ProfileData;
}
// Profile Details
ProfileData(ProfileData){
  console.log(ProfileData);
  var response : ProfileResponse = [];
  response = {
    name : ProfileData.name,
    phone : ProfileData.phone,
    email : ProfileData.email,
    address : ProfileData.address,
    distt : ProfileData.distt,
    pin_code : ProfileData.pin_code
  }
  return response;
 
}
// Forgot Password
ForgotPass(phone,username){
  let postData = new FormData();
  postData.append('username' , username);
  postData.append('phone' , phone);
 return this.http.post(this.RootURL + 'password/forgot',postData);
}

// End Forgot Password

//change Password
ChangePwd(current :string,newpwd : string){
  let postData = new FormData();
  postData.append('current_password' , current);
  postData.append('password' , newpwd);
  postData.append('password_confirmation' , newpwd);
  // call Api
 return this.http.post(this.RootURL + 'password/reset',postData,this.HeaderConfig);

}
//  Account details
AccountsDetails(accountid:string,accounttype:string){
  let postData = new FormData();
  postData.append('account_id' , accountid);
  postData.append('account_type' , accounttype);
  console.log(accountid);console.log(accounttype);
  // call Api
 return this.http.post(this.RootURL + 'get-account-data',postData,this.HeaderConfig);
}


 // Save Payment informations
 SavePaymentINformation(accountid:string,accounttype:string,
  transaction_type:string,data:any){
  let postData = new FormData();
  postData.append('account_id' , accountid);
  postData.append('account_type' , accounttype);
  postData.append('transaction_type' , transaction_type);
  // postData.append('daily_transaction_transaction_date' , data.transectiondate);
  postData.append('amount' , data.amount);
  postData.append('message' , data.remarks);
  // postData.append('daily_transaction[payment_mode]' , data.payMode);
  // call Api
 return this.http.post(this.RootURL + 'single-collection-transaction',postData,this.HeaderConfig);
 }

 // collection list by date
 CollectionListByDate(fdate:string){
  let postData = new FormData();
  postData.append('transaction_date_eq' , fdate);
  // call Api
 return this.http.post(this.RootURL + 'daily-collection-transaction',postData,this.HeaderConfig);
 }
 // Mappe Collection into model
 CollectionResponseMappe(data){
   var response : CollectionListModel = [];
   if(data != undefined){
    data.data.forEach(element => {
      let l = {
       transaction_date : element.transaction_date,
       payment_mode : element.payment_mode,
       amount : element.amount,
       transaction_type : element.transaction_type,
       message : element.message,
       transaction_status : element.transaction_status,
       account_type : element.account_type,
       tranx_id : element.tranx_id,
       account_number : element.account_number,
       name:element.name,
       fname:element.fname,
       mobile:element.mobile,
       total_balance: element.total_balance,
       collectedBy:element.collectedBy
      }
      response.push(l);
    });
   }
  return response;
 }
 async presentToastWithOptions(Message) {
  
  const toast = await this.toastCtrl.create({
    // header: 'Toast header',
    message: Message,
    position: 'top',
    buttons: [{
        text: 'Done',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
        }
      }
    ]
  }); 
  toast.present();
}
async presentLoading() {
  const loading = await this.loadingCtrl.create({
    // cssClass: 'my-custom-class',
    message: 'Please wait...',
    duration: 1300
  });
  await loading.present();
}
}
