let currentDate = Temporal.Now.plainDateISO(); // get current date
document.getElementById("date").innerText = currentDate;

//Retrieving array from local storage
let postArray = JSON.parse(localStorage.getItem("entries"));
console.log(postArray);

// Creating Post Class
class Post {
    constructor (date, title, body, tags){
        this.date = date;
        this.title = title;
        this.body = body;
        this.tags = tags;
    }
    addToList() {
        if (postArray === null){
            postArray = [];
             postArray.push(this)
            //console.log("First item Array....", postArray);
            localStorage.setItem("entries", JSON.stringify(postArray));
        } else {
             postArray.push(this)
            //console.log("all but first item Array....", postArray);
            localStorage.setItem("entries", JSON.stringify(postArray));
        }
    }
}

// New tag button
const tag = document.querySelector("#add-tag")
    tag.addEventListener("click", () => {
   const userTag = prompt("Enter new tag:");
   const newTag = document.createElement("p");
   newTag.classList = ("py-1 px-2 text-xs font-bold bg-neutral-400 rounded-xl");
   newTag.setAttribute("id", "tag");
   const tagText = document.createTextNode(userTag);
   newTag.appendChild(tagText);
   const currentTags = document.querySelector("#tags");
   currentTags.appendChild(newTag);
});

// Event handler for 'save' button
const save = document.querySelector("#save");
    save.addEventListener("click", () => { // function to get user input data and create new object
    const title = document.querySelector("#title").value; // pull title and body text 
    const body = document.querySelector("#body").value;
    const date = currentDate;
    const tags = document.querySelectorAll("#tag");
    let tagList = [];
    for (i=0; i<tags.length; i++){ // loop through list of tags and push to tagList array
        //console.log(tags[i]["innerText"]);
        tagList.push(tags[i]["innerText"]);
    }
    const newPost = new Post(date, title, body, tagList); // create new instance of Post object
    newPost.addToList() 
});

// Button to clear local storage
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    window.localStorage.clear()
});