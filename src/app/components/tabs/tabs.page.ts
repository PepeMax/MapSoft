import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  // public badge = Math.floor(Math.random() * 100) + 1;
  public badge;

  constructor(public storage: Storage) {
    this.storage.get('badge').then((test) => {
      this.badge = test;
    });
    console.log(this.badge)
      
  }

}
