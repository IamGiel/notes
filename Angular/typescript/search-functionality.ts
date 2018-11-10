onSearchFieldShared($event) {
    let userSearchInput = $event.target.value.trim().toUpperCase();
    let element;
    let arrOfSupp = [];
    let searchResultArr = [];
    let _page;

    var myRegex = new RegExp(userSearchInput, 'ig');

    console.log('user search input ', userSearchInput);
    if (userSearchInput) {
        // let arrayOfSearchResults;
        this.listCompanyService.getSharedLists(this.searchParam = userSearchInput, _page, this.size).subscribe(res => {
            let arrayOfSearchResults = res.body.data;
            let xpages = Math.ceil(res.body.totalCounts / this.size);
            this.pages = new Array(xpages);
            confirm.log("this is X PAGES ", xpages);

            for (let index = 0; index < arrayOfSearchResults.length; index++) {
                element = arrayOfSearchResults[index];
                arrOfSupp.push(element);
                if (
                    arrOfSupp[index].supplierName
                        .trim()
                        .toUpperCase()
                        .match(myRegex)
                ) {
                    // alert("hi")
                    searchResultArr.push(arrOfSupp[index]);
                    console.log('Awesome' + ' ' + searchResultArr); //console log success statement
                }
            }
            if (searchResultArr.length > 0) {
                this.newCompanyList = searchResultArr;
                console.log('newcompanylist >>> ', this.newCompanyList);
                this.noDataInShared = false;
            } else {
                this.newCompanyList = [];
                this.noDataInShared = true;
            }
        });
    }
    if (!userSearchInput) {
        this.newCompanyList = [];
    }
}