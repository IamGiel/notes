
import { Component } from "@angular/core";
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class urlApiTesting {
    SERVER_API_URL = "http://localhost:8080/compliance/api/search/";
    constructor(private http: HttpClient) {
        // console.log('this is API URL ', SERVER_API_URL);
    }
//     let param1 = 'someval1';
// let param2 = 'someval2'
// this._http.get(`http://testsite.com/cats/page/${param1}/${param2}`, requestOptions).map(res => res.json());


getPendingList(queryUrl): Observable <HttpResponse<Request>> {
    return this.http.get<Request>(
        // 'http:localhost:8080/compliance/api/search/compliance-requests?mode=compliance&action=all&status=pending&search=&page=0&size=3',
        this.SERVER_API_URL + 'compliance/api/search/compliance-requests?mode=compliance&action=all' + queryUrl,
        { observe: 'response' }
    );
}
searchPendingList(searchParam): Observable <HttpResponse<Request>> {
    return this.http.get<Request>(
        // 'http:localhost:8080/compliance/api/search/compliance-requests?mode=compliance&action=all&status=pending&search=&page=0&size=3',
        this.SERVER_API_URL +
        'compliance/api/search/compliance-requests?mode=compliance&action=all&status=pending&search=' +
        searchParam +
        '&page=0&size=5',
        { observe: 'response' }
    );
}
    }
}
