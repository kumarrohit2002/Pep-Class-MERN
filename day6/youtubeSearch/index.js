const renderSuggestions = (data) => {
    const { results } = data;
    const rootElem = document.getElementById("search-suggestions");
    rootElem.innerText = "";
    results.forEach((txt) => {
        const newPara = document.createElement("div");
        newPara.innerText = `
            <p onclick(handlesearchClick(${txt}))>${txt}</p>
        `
        newPara.className = 'suggestion'
        rootElem.appendChild(newPara);
    });
};

const handlesearchClick = () => {

}



const suggestion = document.getElementsByClassName('suggestion');



const handleSearchSuggestions = (e) => {
    const searchText = e.target.value;

    const request = fetch(`https://youtube138.p.rapidapi.com/auto-complete/?q=${searchText}&hl=en&gl=IN`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": "d915f11319msh0b07b085dc880e9p1ba2d1jsn990bb78a1ba1",
            "x-rapidapi-host": "youtube138.p.rapidapi.com",
        },
    });

    request
        .then((response) => {
            const pr2 = response.json();
            pr2.then((data) => {
                renderSuggestions(data);
            });
        })
        .catch((err) => {
            alert(`Error in search autocomplete: ${err.message}`);
            console.log(`Error in search autocomplete: ${err.message}`, err);
        });
};

let timeoutId = null;

const handleSearchSuggestionSmart = (e) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        handleSearchSuggestions(e);
    }, 1000);
};