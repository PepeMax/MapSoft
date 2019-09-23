import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgModel } from '@angular/forms';
import { ConditionalExpr } from '@angular/compiler';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Event } from 'src/app/model/event.model';


@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.page.html',
  styleUrls: ['./newevent.page.scss'],
})

export class NeweventPage implements OnInit {

  today = new Date().toISOString();

  public newEvent: any = {
    name_events: '',
    datestart_events: '',
    timestart_events: '',
    timeend_events: '',
    dateend_events: '',
    field_type: '',
    field_adress: '',
    city: '',
    zip_code: '',
    association_name: '',
    // referee_contac,
    referee_lastname: '',
    referee_firstname: '',
    referee_mail: '',
    referee_tel: '',
    price: '',
    url: '',
    infos_events: '',
    rules_events: ''
  }

  constructor(public navCtrl: NavController, public toastController: ToastController, public storage: Storage,) {

  }

  cancel() {
    this.navCtrl.navigateRoot(['tabs', 'events']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'L&apos;événement à bien été ajouté',
      duration: 2000
    });
    toast.present();
  }


  async submit() {
    let oldEvents: any[] = JSON.parse(await this.storage.get('events'));

    if (oldEvents !== null) {
      oldEvents.push(this.newEvent);
    } else {
      oldEvents = [];
      oldEvents.push(this.newEvent);
    }

    await this.storage.set('events', JSON.stringify(oldEvents))
      .then(events => {
        console.log(events);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.presentToast();
        this.cancel();
      });
  }

  ngOnInit() {
  }

}
