import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeweventService {

  private events = [];

  constructor(private httpClient: HttpClient) { }

  AddEventsOnServer(val) {
    this.httpClient
      .put('https://mapsoft-pepemax.firebaseio.com/events.json', val)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getEventsFromServer(): Observable<any> {
    return this.httpClient
      .get<any[]>('https://mapsoft-pepemax.firebaseio.com/events.json')
  }

}