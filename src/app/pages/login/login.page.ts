import { Component } from '@angular/core';
import {ModalController, NavController, Platform } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { Storage } from '@ionic/storage';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  
  public username : string = "";
  public password : string = "";
  public isUsernameValid: boolean;
  public isPasswordValid: boolean;
  private LoginReponse : any;
  clsaa: any = '';
  clsaa2: any= '';
  constructor(
    // private androidPermissions: AndroidPermissions,
    public navCtrl: NavController,
    private modalController: ModalController,
    public keyboard: Keyboard,
    private storage: Storage,
    private faio: FingerprintAIO,
    private platform: Platform,
    private provider : ApihelperProvider) {
    this.isUsernameValid= true;
    this.isPasswordValid = true; 
    
    

  }
  
  ngOnInit() {
    
    this.platform.backButton.subscribe(() => {
      console.log('Another handler was called!');
      this.navCtrl.navigateRoot('login'); 
    });
      if (navigator.onLine) { 
      
      if(window.location.pathname == '/forgot'){
        this.navCtrl.navigateRoot('/forgot'); 
      }else{
        
      this.storage.get('offline-user').then((val) => {

        
      if(val){
       this.provider.presentLoading();
       this.provider.UserLogin( val.username, val.password).subscribe(data=>{
        this.LoginReponse = data;
        if(this.LoginReponse){

        this.faio.isAvailable().then(result =>{
          if(result = true)
          {
            let result=false; 
            this.faio.show({
              title: 'Fingerprint Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
            })
            
        .then((result: any) => {
        this.provider.SetHeader(this.LoginReponse.token,this.LoginReponse.user_id);
        this.navCtrl.navigateRoot('/dashboard/home');

      })
      .catch((error: any) => console.log(error));
          }else{
            this.navCtrl.navigateRoot('/login');
          }
        }); 

      }

      }
      ,(err)=> {
        this.provider.presentToastWithOptions('There are some technical issue please try again!')});
        // this.navCtrl.navigateRoot('/login');
      }
      
      
      
      else
      {
        this.navCtrl.navigateRoot('/login'); 
      }
     });
      }
      }else{
        this.provider.presentToastWithOptions('Its look like you are offline!')
        this.navCtrl.navigateRoot('/login'); 
      }
    
  }
  doLogin(){
    
    if(this.validate()){
      
      //this.navCtrl.setRoot('PrinterPage');
      // show processing
       this.provider.presentLoading();
       this.provider.UserLogin(this.username,this.password).subscribe(data=>{
        this.LoginReponse = data;
        // set header values
        this.provider.SetHeader(this.LoginReponse.token,this.LoginReponse.user_id);
        // call next APi
        let offline_user = { "username":this.username, "password": this.password };
        // console.log(offline_user);
        // set a key/value
        this.storage.set('offline-user', offline_user);
        // Save Member Details
        this.provider.UserPanel().subscribe(data=>{
          let UserResponse = this.provider.User_details(data);
          this.storage.set('current_member', UserResponse.current_member)
        });
        // End Of Member Details
        // to get a key/value pair
        this.navCtrl.navigateRoot('/dashboard/home');
      }
      ,(err)=> {
        this.provider.presentToastWithOptions('Some technical problem there please try again later!')});
    }
  }
  validate():boolean {
    
      this.isUsernameValid = true;
      this.isPasswordValid = true;
      if (!this.username ||this.username.length == 0) {
          this.isUsernameValid = false;
          this.provider.presentToastWithOptions("Username is blank");
      }
      if (!this.password || this.password.length == 0) {
          this.isPasswordValid = false;
          this.provider.presentToastWithOptions("Password is blank");
      }
      return this.isPasswordValid && this.isUsernameValid ;
  }

  ForgotPass(){
    this.navCtrl.navigateRoot('forgot');
  }
  
  focusInput(event){
    this.clsaa = 'pushup';
    this.clsaa2 = 'bottom_part1';
    window.addEventListener('keyboardDidHide', () => {
      var element = document.getElementById("log_card");
      var element2 = document.getElementById("bot_part");
      element.classList.remove("pushup");
      element2.classList.remove("bottom_part1");
  });
  }
  focusOut(event){
    this.clsaa = '';
    this.clsaa2 = '';
  }
  

  public showFingerprintAuthDlg(){
    
}

}
