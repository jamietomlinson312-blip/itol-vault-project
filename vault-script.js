window.addEventListener("DOMContentLoaded", displayPosts);

function displayPosts(){
    let newArray = JSON.parse(localStorage.getItem("entries"));
    if (newArray){
         newArray.forEach(element => {
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
        date.innerText = element.date;
        title.innerText = element.title;
        body.innerText = element.body;
         div2.appendChild(date);
         div1.appendChild(div2);
        newCard.appendChild(div1);
        newCard.appendChild(title);
        newCard.appendChild(body);
        const currentSection = document.querySelector("#card-section");
        currentSection.appendChild(newCard);
        console.log(currentSection);
    });
    }  
}
