import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  darkVal: boolean = false;
  public authToken: boolean = false;
  public versionNumber;

  constructor(public navCtrl: NavController, public storage: Storage) { }

  setval() {
    console.log(this.darkVal);
  }

  goLogin() {
    this.navCtrl.navigateRoot('/login');
  }

  logout() {
    this.navCtrl.navigateRoot('/login');
  }

  accountRequest() {
    this.navCtrl.navigateRoot('/account-request')
  }

  async ngOnInit() {
    this.storage.get('tokenAuth').then((valToken) => {
      this.authToken = valToken;
    });
  }
}