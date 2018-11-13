import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Policy } from '../../models/policy';
import { filter, map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import _throw from 'rxjs/add/operator/catch';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  policyUrl: string = "http://104.199.122.248/iesdemo_genbiz/gen_api/ies_connect.php?process=users&opmode=EBCreatePolicy";
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  // Sending a POST request to /products

  public createPolicy(policy: Policy, header: HttpHeaders): Observable<Policy> {

    return this.http

      .post(this.policyUrl, policy, { headers: header })

      .map(response => {

        return response;

      })

      .catch((error) => {

        return Observable.throw(error);

      });

  }

}
