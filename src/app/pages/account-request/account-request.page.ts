import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-account-request',
  templateUrl: './account-request.page.html',
  styleUrls: ['./account-request.page.scss'],
})

export class AccountRequestPage implements OnInit {

  toatsvalue = this.trans.instant('ACCOUNT_REQUEST.REGISTER_REQUEST');

  private _email = {
    to: 'maxime.denost@laposte.net',
    attachments: [],
    subject: 'Demande de compte',
    body: '',
    isHtml: true
  };

  constructor(
    public navCtrl: NavController, 
    public alertController: AlertController, 
    public toastController: ToastController,
    public trans: TranslateService, 
    private emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateRoot(['tabs', 'settings']);
  }

  async okRegister() {
    const toast = await this.toastController.create({
      message: this.toatsvalue,
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
          placeholder: this.trans.instant('ACCOUNT_REQUEST.LAST_NAME')
        },
        {
          name: 'firstname',
          type: 'text',
          placeholder: this.trans.instant('ACCOUNT_REQUEST.FIRST_NAME')
        },
        {
          name: 'function',
          type: 'text',
          placeholder: this.trans.instant('ACCOUNT_REQUEST.FUNCTION')
        },
        {
          name: 'society',
          type: 'text',
          placeholder: this.trans.instant('ACCOUNT_REQUEST.SOCIETY')
        },
        {
          name: 'mail',
          type: 'email',
          placeholder: this.trans.instant('ACCOUNT_REQUEST.MAIL')
        },
        {
          name: 'tel',
          type: 'tel',
          placeholder: this.trans.instant('ACCOUNT_REQUEST.TEL')
        },
        {
          name: 'field_type',
          type: 'text',
          placeholder: this.trans.instant('ACCOUNT_REQUEST.FIELD_TYPE')
        },
        {
          name: 'field_adress',
          type: 'text',
          placeholder: this.trans.instant('ACCOUNT_REQUEST.FIELD_ADRESS')
        },
        {
          name: 'field_city',
          type: 'text',
          placeholder: this.trans.instant('ACCOUNT_REQUEST.FIELD_CITY')
        },

        {
          name: 'members',
          type: 'number',
          placeholder: this.trans.instant('ACCOUNT_REQUEST.MEMBERS'),
          min: 1,
          value: 1,
        },
      ],
      buttons: [
        {
          text: this.trans.instant('COMMON.CANCEL'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Annulé');
          }
        }, {
          text: this.trans.instant('COMMON.OK'),
          handler: (alertData) => {
            console.log('set mail');
            let str = "Nom : " + alertData.lastname + "<br>";
            str += "Prénom : " + alertData.firstname + "<br>";
            str += "Fonction : " + alertData.function + "<br>";
            str += "Société : " + alertData.society + "<br>";
            str += "Email : " + alertData.mail + "<br>";
            str += "Type de terrain : " + alertData.field_type + "<br>";
            str += "Adresse du terrain : " + alertData.field_adress + "<br>";
            str += "Ville du terrain : " + alertData.field_city + "<br>";
            str += "Nombre de membres: " + alertData.members + "<br>";
            this._email.body = str;
            this.emailComposer.open(this._email);
            console.log(JSON.stringify(alertData));
            this.okRegister();
          }
        }
      ]
    });
    await alert.present();
  }

}
