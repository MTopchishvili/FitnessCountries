function hideFunction(){
    const x = document.getElementById("text");

    if(x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("btn").innerHTML = "Learn More";
    }else{
        x.style.display = "block";
        document.getElementById("btn").innerHTML = "Minimize";
        
    }
    
};

function hideFunction2(){
    const x = document.getElementById("text2");

    if(x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("btn2").innerHTML = "Learn More";
    }else{
        x.style.display = "block";
        document.getElementById("btn2").innerHTML = "Minimize";
        
    }
};

function hideFunction3(){
    const x = document.getElementById("text3");

    if(x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("btn3").innerHTML = "Learn More";
    }else{
        x.style.display = "block";
        document.getElementById("btn3").innerHTML = "Minimize";
        
    }
};



let counter = 0;

function changeImage(){
    const im1 = document.getElementById('im1');
    
    if(counter === 0){
        im1.src = 'gym2.jpg';
        counter++;
    }
    else if(counter === 1){
        im1.src = 'gym3.jpg';
        counter++;
    }else if(counter === 2){
        im1.src = 'gym.jpg';
        counter = 0;
    }
};

function changeImage2(){
    const im2 = document.getElementById('im2');
    
    if(counter === 0){
        im2.src = 'courses2.jpg';
        counter++;
    }
    else if(counter === 1){
        im2.src = 'courses3.jpg';
        counter++;
    }else if(counter === 2){
        im2.src = 'courses.jpg';
        counter = 0;
    }
};

function changeImage3(){
    const im3 = document.getElementById('im3');
    
    if(counter === 0){
        im3.src = 'supplements2.jpg';
        counter++;
    }
    else if(counter === 1){
        im3.src = 'supplements3.jpg';
        counter++;
    }else if(counter === 2){
        im3.src = 'supplements.jpg';
        counter = 0;
    }
};



async function ShowCountries(){
    


    const myList = document.getElementById("List1");
    const myRequest = new Request("https://api.dhsprogram.com/rest/dhs/countries");
    
    fetch(myRequest)
      .then((response) => response.json())
      .then((data) => {
        for (const product of data.Data) 
        {
          const listItem = document.createElement("li");
          listItem.appendChild(document.createElement("strong")).textContent = product.CountryName;
           
          myList.appendChild(listItem);
        }
      })
      .catch(console.error);


}



document.querySelector('wai').textContent = data[1] 



