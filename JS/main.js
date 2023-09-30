document.getElementById("myBody").innerHTML = `
<header id="header"></header>
`   
const pages = ["Home", "Movies", "Searching", "About", "Favorite"];
const aHrefs = ["/index.html", "movieId.html", "searching.html", "UsAbout.html", "favorite.html"];
for (let i = 0; i < 5; i++) {
        header.innerHTML += `
        <a href="${aHrefs[i]}">${pages[i]}</a>
        `

};
console.log("fuch");