let posts = [];

// Creating and saving object for post data

const save = document.querySelector("#save");
save.addEventListener("click", () => { // function to get user input data and create new object
    const newPost = {}; // create new post object
    const title = document.querySelector("#title").value; // pull title and body text 
    const body = document.querySelector("#body").value;
    newPost.date = "date goes here";
    //console.log("values....", title, body);
    newPost.title = title; // assign values to the post object
    newPost.body = body;
    posts.push(newPost); // push the post object to "posts" array
    //console.log("new object....", newPost)
    //console.log("array....", posts)
    localStorage.setItem("entries", JSON.stringify(posts)); // save to local storage as strings
    displayPosts();

})

function displayPosts(postObject){
    const newDiv1 = document.createElement("div");
    newDiv1.classList = "flex items-center justify-between";
    const newDiv2 = document.createElement("div");
    newDiv2.classList = "flex gap-4 items-center";
    const date = document.createElement("p");
    const dateText = document.createTextNode(postObject.date);
    date.appendChild(dateText);
    newDiv2.appendChild(date);
    console.log(newDiv2);

}

// Event listener to add new tag

const tag = document.querySelector("#tag")
tag.addEventListener("click", () => {
   const userTag = prompt("Enter new tag:");
   const newTag = document.createElement("p");
   newTag.classList = ("py-1 px-2 text-xs font-bold bg-neutral-400 rounded-xl");
   const tagText = document.createTextNode(userTag);
   newTag.appendChild(tagText);
   const currentTags = document.querySelector("#tags");
   currentTags.appendChild(newTag);
})



//console.log(JSON.parse(localStorage.getItem("entries")));