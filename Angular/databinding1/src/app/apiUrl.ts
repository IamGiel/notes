
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

// capture search input field to query pending lists
onSearchFieldPending($event) {
    // console.log("this is key up on search field test event", $event.target.value);
    let userSearchInput = $event.target.value.toLowerCase();
    let arrayOfSearchResults;
    let timeout;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        if (userSearchInput) {
            this.setPageOnTab2(1);
            // alert(userSearchInput);
            this.listCompanyService.searchPendingList(userSearchInput).subscribe(res => {
                arrayOfSearchResults = res.body.data;
                console.log('this is user search input field typed >>> ', arrayOfSearchResults);
                //     for (let i = 0; i < arrayOfSearchResults.length; i++) {
                //         supName = arrayOfSearchResults[i];
                //         dunsNum = arrayOfSearchResults[i].providerKey.dunsNumber;
                //     }
                //    alert(supName + "" + dunsNum);
                this.pendingList = arrayOfSearchResults;
                if (this.pendingList != null) {
                    console.log('this is line 307 ', this.pagedItemsPend);
                    this.pagedItemsPend = this.pagedItemsPend;
                    console.log('this is pageItemsPend >>> ', this.pagedItemsPend);
                } else {
                    console.log('pending list is null 311 ', this.pendingList);
                    this.pendingList = [];
                    // this.pagerPending.startIndex = -1;
                    // this.pagerPending.endIndex = -1;
                    // this.pagedItemsPend = this.pendingList.slice(this.pagerPending.startIndex, this.pagerPending.endIndex + 1);
                    this.setPageOnTab2(1);
                    console.log('this is pageItemsPend >>> ', this.pagedItemsPend);
                }
            });
        } else if (!userSearchInput) {
            this.setPageOnTab2(1);
            this.listCompanyService.searchPendingList(userSearchInput).subscribe(res => {
                arrayOfSearchResults = res.body.data;
                console.log('this is user search input field typed >>> ', arrayOfSearchResults);
                this.pendingList = arrayOfSearchResults;
                this.pagedItemsPend = this.pendingList.slice(this.pagerPending.startIndex, this.pagerPending.endIndex + 1);
                console.log('this is pageItemsPend >>> ', this.pagedItemsPend);
            });
        }
    }, 500);
}
