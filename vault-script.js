window.addEventListener("DOMContentLoaded", displayPosts);

function displayPosts(){
    console.log("window load...local storage...", JSON.parse(localStorage.getItem("entries")));
    let newArray = JSON.parse(localStorage.getItem("entries")); // getting the current array from local storage
    if (newArray){
         newArray.forEach(element => { // loop through array and create html elements and styling
        const newCard = document.createElement("section");
        newCard.classList = "mt-15 p-6 flex flex-col gap-6 bg-neutral-50 shadow-md";
        const div1 = document.createElement("div");
        div1.classList = "flex items-center justify-between";
        const div2 = document.createElement("div");
        div2.classList = "flex gap-4 items-center";
        const date = document.createElement("p");
        date.classList = "text-netural-400 font-light";
        
       
        const title = document.createElement("h1");
        title.classList = "text-3xl font-extrabold";
        const body = document.createElement("p");
        date.innerText = element.date; // get property values from the object
        title.innerText = element.title;
        body.innerText = element.body;
         div2.appendChild(date);
        for (i=0; i<element.tags.length; i++){ // looping through the element.tags array 
            const tags = document.createElement("p");// create p element and set styling
            tags.classList = "py-1 px-2 text-xs text-Neutral-500 font-bold bg-neutral-300 rounded-sm";
            tags.innerText = element.tags[i];
            div2.appendChild(tags); // append to div2
        }
        div1.appendChild(div2); // append remaining items
        newCard.appendChild(div1);
        newCard.appendChild(title);
        newCard.appendChild(body);
        const currentSection = document.querySelector("#card-section");
        currentSection.appendChild(newCard); // add post card to the section
    });
    }  
}
