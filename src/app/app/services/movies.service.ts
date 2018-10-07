import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Response } from '@angular/http';
import { map } from "rxjs/operators";
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
//set the search type of the api 

export class MoviesService {

  public Movies: any = [];
  //todo - get from local settings
  //we hardcode the url with a dynamic search string  
  private url: string = "https://www.omdbapi.com/?apikey=67fd3b36&";

  //todo -chnage the Search type "S" and "T" to enum 

  constructor(private http: HttpClient, ) {
  }
// todo add error handling 

  HttpGetMoviesByTitle(serach: string): Observable<any[]> {
    return this.http.get<any>(this.url + "&type=movie&s=" + serach)
      .pipe(map(response => response.Search)
      );
  }

  HttpGetMoviesById(serach: string): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.url + "i=" + serach)
        .toPromise()
        .then(
        res => { // Success
          // console.log(this.url + "i=" + serach)
          resolve(res);
        },
        msg => { // Error
          reject(msg);
        }
        );
    });
    return promise;
  }

  HttpGetMovieByTitle(Title) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.url + "t=" + Title)
        .toPromise()
        .then(
        res => { // Success
          console.log(this.url + "t=" + Title);
          resolve(res);
        },
        msg => { // Error
          reject(msg);
        }
        );
    });
    return promise;

  }

  HttpGet(serach: string): Observable<any[]> {
    return this.http.get<any>(this.url)
      .pipe(map(response => response.Search)
      );
  }

  HttpPut(): Observable<any> {
    throw new Error("Not implemted")
  }
  HttpPost(): Observable<any> {
    throw new Error("Not implemted")
  }
  HttpDelete(): Observable<any> {
    throw new Error("Not implemted")
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
