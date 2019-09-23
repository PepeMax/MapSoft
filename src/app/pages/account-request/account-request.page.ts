import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-account-request',
  templateUrl: './account-request.page.html',
  styleUrls: ['./account-request.page.scss'],
})
export class AccountRequestPage implements OnInit {

  toatsvalue  = this.trans.instant('ACCOUNT_REQUEST.REGISTER_REQUEST');

  constructor(public navCtrl: NavController, public alertController: AlertController, public toastController: ToastController, public trans: TranslateService) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateRoot(['tabs', 'settings']);
  }

  async okRegister() {
    // this.toatsvalue = this.trans.instant('ACCOUNT_REQUEST.REGISTER_REQUEST');
    const toast = await this.toastController.create({
      message: 'LOL',
      duration: 2000
    });
    toast.present();
  }

  async register() {
    const alert = await this.alertController.create({
      header: 'Demande de création',
      inputs: [
        {
          name: 'lastname',
          type: 'text',
          placeholder: 'NOM'
        },
        {
          name: 'firstname',
          type: 'text',
          placeholder: 'Prénom'
        },
        {
          name: 'function',
          type: 'text',
          placeholder: 'Fonction dans l association ou entreprise'
        },
        {
          name: 'society',
          type: 'text',
          placeholder: 'Nom de l association ou société'
        },
        {
          name: 'mail',
          type: 'email',
          placeholder: 'je-t-ai-touche@tu-es-out.com'
        },
        {
          name: 'tel',
          type: 'tel',
          placeholder: '01 02 03 04 05'
        },
        {
          name: 'field_type',
          type: 'text',
          placeholder: 'Type de terrain (Forêt, CQB, ...)',
        },
        {
          name: 'field_adress',
          type: 'text',
          placeholder: 'Adresse du terrain',
        },
        {
          name: 'field_city',
          type: 'text',
          placeholder: 'Ville du terrain',
        },

        {
          name: 'members',
          type: 'number',
          placeholder: 'Nombre de membres',
          min: 1,
          value: 1,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            console.log('set mail');
            console.log(JSON.stringify(alertData));
            this.okRegister();
            

          }
        }
      ]
    });

    await alert.present();
  }
  

}
