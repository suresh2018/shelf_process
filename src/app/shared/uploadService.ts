import { environment } from './../../environments/environment';
import { Injectable, Inject } from '@angular/core';
import { Response, Http, HttpModule, RequestOptions } from '@angular/http';
import { Observable, } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Headers } from '@angular/http';
export class UploadService {
    constructor(
        @Inject(Http) private http: Http
    ) { }

    _url: string = environment.apiBaseUrl;

    setHeaders(token) {
        let headers = new Headers();
        // headers.append('Content-Type', 'multipart/form-data');
        headers.append('Authorization', `bearer ${token}`);
        let options = new RequestOptions({ headers: headers });
        return options;
    }
    uploadMasterImage(data) {
        // let model = '{"ShelfGuid":' + data.shelfguid + "}";
        let model: any = { "ShelfGuid": data.shelfguid };
        model = JSON.stringify(model);
        console.log(model);
        let input = new FormData();
        input.append("File", data.masterImage);
        input.append("model", model);
        let options = this.setHeaders(data.token);
        return this.http.post(`${this._url}${"api/idealpictures/upload"}`, input, options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json() ? res.json() : {})
            //...errors if any
            .catch(this.handleError);
    }

    uploadShelfImage(data) {
        // let model = '{"ShelfGuid":' + data.shelfguid + "}";
        //let model: any = '{ "ShelfGuid": "C236C888-C28E-4CCB-8D8C-6C0BEED20F5D" }';
        let model: any = { "ShelfGuid": data.shelfguid };
        model = JSON.stringify(model);
        let input = new FormData();
        input.append("File", data.shelfimage);
        input.append("model", model);
        let options = this.setHeaders(data.token);
        return this.http.post(`${this._url}${"api/shelfimages/upload"}`, input, options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json() ? res.json() : {})
            //...errors if any
            .catch(this.handleError);
    }


    private handleError(err) {
        let errMessage: string;

        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText} ${error}`;
        } else {
            errMessage = err.message ? err.message : "Oops something went wrong";
        }

        return Observable.throw(errMessage);
    }

}