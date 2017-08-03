import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from "../../../environments/environment";

/**
 * Base JSON Api Service to others Services
 * 
 * @export
 * @class ApiBaseService
 */
@Injectable()
export class ApiService {

  constructor(private _http: Http) {}

  /**
   * Set the default headers for a JSON Api
   * 
   * @private
   * @returns {Headers} 
   * @memberof ApiBaseService
   */
  private setHeaders(): Headers {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new Headers(headers);
  }

  /**
   * Handle Api Errors
   * 
   * @private
   * @param {(Response | any)} error 
   * @returns 
   * @memberof ApiService
   */
  private handleErrors (error: any) {
    return Observable.throw(error.json());
  }

  /**
   * Default Get Method of a JSON Api
   * 
   * @param {string} path 
   * @param {URLSearchParams} [params=new URLSearchParams()] 
   * @returns {Observable<any>} 
   * @memberof ApiService
   */
  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this._http
    .get(
      `${environment.api_url}${path}`,
      { 
        headers: this.setHeaders(),
        search: params
      }
    )
    .catch(this.handleErrors)
    .map((response: Response) => response.json());
  }

  /**
   * Default Put Method of a JSON Api
   * 
   * @param {string} path 
   * @param {Object} [body={}] 
   * @returns {Observable<any>} 
   * @memberof ApiService
   */
  put(path: string, body: Object = {}): Observable<any> {
    return this._http
    .put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {
        headers: this.setHeaders()
      }
    )
    .catch(this.handleErrors)
    .map((response: Response) => response.json());
  }

  /**
   * Default Post Method of a JSON Api
   * 
   * @param {string} path 
   * @param {Object} [boyd={}] 
   * @returns {Observable<any>} 
   * @memberof ApiService
   */
  post(path: string, body: Object = {}): Observable<any> {
    return this._http
    .post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {
        headers: this.setHeaders()
      }
    )
    .catch(this.handleErrors)
    .map((response: Response) => response.json());
  }

  /**
   * Default Delete Methos of a JSON Api
   * 
   * @param {string} path 
   * @returns {Observable<any>} 
   * @memberof ApiService
   */
  delete(path: string): Observable<any> {
    return this._http
    .delete(
      `${environment.api_url}${path}`,
      { 
        headers: this.setHeaders()
      }
    )
    .catch(this.handleErrors)
    .map((response: Response) => response.json());
  }
}