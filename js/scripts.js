window.addEventListener("load", function(){

    const body = document.querySelector("body");
    const headerElement = document.createElement("h1");
    headerElement.append("My Favorite Ice Cream Flavors");
    body.append(headerElement);
    const ul = document.createElement("ul");
    body.append(ul);
    let li = document.createElement("li").value;

    const flavors = ["Rocky Road", "Mint Chip", "Vanilla"];

    flavors.forEach(function(flavor) {
      ul.append(" " + flavor);
    });

    const h2Element1 = document.createElement("h2");
    h2Element1.append()
    const h2Element2 = document.createElement("h2");
    h2Element2.append()
    const h2Element3 = document.createElement("h2");
    h2Element3.append()
});