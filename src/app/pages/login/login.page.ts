import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, public storage: Storage) { }

  connect() {
    this.navCtrl.navigateForward('/tabs/events');
    this.storage.set('tokenAuth', true);
    console.log("connecté");
  }

  invited() {
    this.navCtrl.navigateForward('/tabs/events');
    this.storage.set('tokenAuth', false);
    console.log("invité");
  }

  ngOnInit() {
    this.storage.ready().then(() => {
    });
  }

}
