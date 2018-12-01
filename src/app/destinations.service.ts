import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  uri='http://localhost:4000';

  constructor(private http: HttpClient) { }

  getDestinations() {
    return this
          .http
          .get(`${this.uri}/destinations`);
  }

  getDestinationsById(id){
    return this
          .http
          .get(`${this.uri}/destinations/${id}`);
  } 

  likeDestinations(id){
    return this
          .http
          .get(`${this.uri}/destinations/like/${id}`);
  } 

  getDestinationsByPref(pref){
    return this
          .http
          .get(`${this.uri}/destinations/${pref}`);
  } 
}
