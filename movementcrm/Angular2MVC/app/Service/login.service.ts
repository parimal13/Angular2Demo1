import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class LoginService {
    constructor(private _http: Http) { }

    post(url: string, model: any): Observable<any> {
        model.grant_type = 'password';
        //url = url + "?username=" + model.UserName + "&password=" + model.Password + "&grant_type=password";
        let body = "userName=" + model.UserName + "&password=" + model.Password +
            "&grant_type=password"
        //let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}