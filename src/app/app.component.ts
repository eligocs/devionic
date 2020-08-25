import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { CreatePdf } from 'src/providers/CreatePdf';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  public selectedIndex = 0;
  public appPages = [
    {
      title: 'My Profile',
      url: '/dashboard/profile',
      iconsrc: './assets/icon/profile.svg',
      icon: 'mail'
    },
    {
      title: 'Change Password',
      url: '/dashboard/cpassword',
      iconsrc: './assets/icon/password.svg',
      icon: 'paper-plane'
    },
    {
      title: 'Update Bank Details',
      url: '/dashboard/bank',
      iconsrc: './assets/icon/bank-details.svg',
      icon: 'heart'
    },
    {
      title: 'Passbook',
      url: '/dashboard/passbook',
      iconsrc: './assets/icon/Passbook.svg',
      icon: 'archive'
    },
    {
      title: 'My Loan',
      url: '/dashboard/loan',
      iconsrc: './assets/icon/loan.svg',
      icon: 'trash'
    },
    {
      title: 'Terms & Conditions',
      url: '/dashboard/tandc',
      iconsrc: './assets/icon/TermsandCondition.svg',
      icon: 'warning'
    },
    {
      title: 'Security Tips',
      url: '/dashboard/security',
      iconsrc: './assets/icon/security.svg',
      icon: 'warning'
    },
    {
      title: 'Help & Support',
      url: '/dashboard/support',
      iconsrc: './assets/icon/support.svg',
      icon: 'warning'
    },
    {
      title: 'Logout',
      url: '',
      class:'logout',
      iconsrc: './assets/icon/password.svg',
      icon: 'warning'
    },
  ];

  public href: string = "";
  public username : string = "";
  public password : string = "";
  public isUsernameValid: boolean;
  public isPasswordValid: boolean;
  private LoginReponse : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    public navCtrl: NavController,
    private provider : ApihelperProvider,
    private memberdetail: CreatePdf
  ) {
    this.isUsernameValid= true;
    this.isPasswordValid = true;
    console.log('chla')
    this.initializeApp();
  }

  initializeApp() {
    // this.platform.ready().then(() => {
      
      this.platform.backButton.subscribe(() => {
        this.navCtrl.navigateRoot('/dashboard/home'); 
      });
      if (navigator.onLine) {
        if(window.location.pathname == '/forgot'){
          this.navCtrl.navigateRoot('/forgot'); 
        }else{
          // if(this.platform.is('cordova')){
            console.log('USer Details is');
        this.storage.get('offline-user').then((val) => {
          
        if(val){
         this.provider.presentLoading();
         this.provider.UserLogin( val.username, val.password).subscribe(data=>{
          this.LoginReponse = data;
          console.log('dfdfd',this.LoginReponse);
          // set header values
          this.provider.SetHeader(this.LoginReponse.token,this.LoginReponse.user_id);
          this.statusBar.styleDefault();
          this.splashScreen.hide();  
        }
        ,(err)=> {
          this.provider.presentToastWithOptions('There are some technical issue please try again!')});
          // this.navCtrl.navigateRoot('/login');
        }else
        {
          this.navCtrl.navigateRoot('/login'); 
        }
        }); 
        // }
        }
        }else{
          this.provider.presentToastWithOptions('Its look like you are offline!')
          this.navCtrl.navigateRoot('/login'); 
        }
        
        
     
      
    // });
  }
  public ProfileImg: any;
  ngOnInit() {
    this.ProfileImg = this.memberdetail.getMember();
    console.log("sdfsdf", this.ProfileImg);
    const path = window.location.pathname.split('dashboard/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  logout(){
    this.storage.remove('offline-user');
    this.storage.remove('current_member');
    this.navCtrl.navigateRoot('/');
}


}
