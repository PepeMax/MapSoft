import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  public ButtonClicked: boolean = false;
  public authToken: boolean = false;
  public events;
  public learnMore = [];

  constructor(public navCtrl: NavController, public storage: Storage) { }

  async doRefresh(val) {
    setTimeout(() => {
      val.target.complete();
    }, 2000);
    this.events = JSON.parse(await this.storage.get('events'));
  }

  addEvent() {
    this.navCtrl.navigateForward('/newevent')
  }

  editEvent() {
    console.log("Edit");
  }

  onButtonSet() {
    this.ButtonClicked = !this.ButtonClicked;
    console.log(this.ButtonClicked);
  }

  public onClickLearnMore(index) {
    if (this.learnMore[index] === null || this.learnMore[index] === undefined) {
      this.learnMore[index] = false;
    }
    this.learnMore[index] = !this.learnMore[index];
  }

  async ngOnInit() {
    this.storage.get('tokenAuth').then((valToken) => {
      this.authToken = valToken;
    });
    this.events = JSON.parse(await this.storage.get('events'));
  }

}
