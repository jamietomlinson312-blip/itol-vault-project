document.addEventListener("DOMContentLoaded", displayPosts);

function displayPosts(){
     let newArray = JSON.parse(localStorage.getItem("entries"));
     //console.log("current array....", newArray);
     //console.log("sliced array...", newArray.slice(-5));
    if (newArray){
        newArray.slice(-5).forEach((element, index) => {
            const newDiv = document.createElement("div"); // create the elements
            const date = document.createElement("h3");
            const title = document.createElement("h1");
            const body = document.createElement("p");
            const tagDiv = document.createElement("div");
            tagDiv.classList = "mt-10 flex gap-4";
    
            if (index % 2 == 0){ // sets alternate styling
                newDiv.classList = "p-5 col-span-2 row-span-1 flex flex-col gap-3 bg-white rounded-sm shadow-md"; // set the styling
                date.classList = "text-neutral-400 text-sm font-bold";
                title.classList = "text-2xl font-extrabold";
                body.classList = "text-neutral-500";
               
            } else {
                newDiv.classList = "p-5 col-span-1 row-span-1 flex flex-col gap-3 bg-neutral-200 rounded-sm shadow-md"; // set the styling
                date.classList = "text-neutral-400 text-xs font-bold";
                title.classList = "text-lg font-extrabold";
                body.classList = "text-xs text-neutral-600";
              
            }
            date.innerText = element.date; // assign the inner text 
            title.innerText = element.title;
            body.innerText = element.body;
            newDiv.append(date, title, body); // append the new elements to the new div
             for (i=0; i<element.tags.length; i++){
                const tags = document.createElement("p");
                tags.classList = "py-1 px-2 text-xs text-Neutral-500 font-bold bg-neutral-300 rounded-sm";
                tags.innerText = element.tags[i];
                tagDiv.appendChild(tags);
                
        }
            newDiv.appendChild(tagDiv);
            const currentSection = document.querySelector("#grid-section");
            currentSection.appendChild(newDiv); // add the new div to the card section
        });
    }
}