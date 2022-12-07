const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let query = params.q;

let SorG = null;

function searchFunc() {
    searchButton.innerText = "Search";
    searchButton.setAttribute("onClick", "getSearch()");
    document.body.onload = getSearch();
}

function getFunc(){
    searchButton.innerText = "Generate URL";
    searchButton.setAttribute("onClick", "genSearch()");
}

function function1() {
    searchButton = document.getElementById("searchButton");

    if (query == null) {
        SorG = true;
    }
    else {
        SorG = false;
    }

    if (SorG == true) {
        getFunc()
    }
    else if (SorG == false) {
        searchFunc()
    }
}

function function2() {
    if (SorG == false) {
        SorG = true
        getFunc()
        const cursor = document.getElementById("cursor").remove()
        cursor.remove()
    }
}

function genSearch() {
    var searchString = document.getElementById("searchBox").value;

    if (searchString == "" || null ){
        searchBox.setAttribute("placeholder", "You need to enter something...")
    }
    else {
        endpoint = encodeURI(searchString);
        genURL = window.location.href + "?q=" + endpoint;
        link = document.createElement("a");
        linkNode = document.createTextNode(genURL);
        link.appendChild(linkNode);
        link.setAttribute("href", genURL)
        link = document.getElementById("link").appendChild(link)
    }
}


async function typeWriter(txt) {
    var i = 0;
    
    while (i < txt.length) {
        searchBox.value += txt[i]
        i ++;
        await new Promise(r => setTimeout(r, Math.random() * (500 - 100) + 100));
    }
}

async function getSearch() {
    await typeWriter(query, 50);

    const cursor = document.createElement("img");

    document.getElementById("buttonWrapper").appendChild(cursor);

    cursor.src = "./assets/cursor.png";
    cursor.id = "cursor";

    searchButton = document.getElementById("searchButton");
    searchButton.setAttribute("onClick", "goSearch()");
}

async function goSearch() {
    let googURL = "https://google.com/search?q=" + query;
    window.location.replace(googURL);
}