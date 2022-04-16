const container = document.getElementById('container');
const btn = document.getElementById('btn');
var search = document.getElementById('search');



btn.addEventListener('click', function() {
    var getSearch = document.getElementById('search').value;
    container.innerHTML = '';
let myRequest = new XMLHttpRequest();
myRequest.open('GET' ,'https://g.tenor.com/v1/search?q=' + getSearch +'&key=0CW7KS6YFHQH')
myRequest.responseType = 'json'
myRequest.onreadystatechange = function(){
    if( myRequest.readyState === 4 && myRequest.status === 200){
        //div1.innerHTML += `<p>${getSearch}</p>`
        
        console.log(myRequest.response)
        printData(myRequest.response.results)
    }
    
}
myRequest.send();
})

function printData(data){
    for(var i=0; i < data.length; i++){
        let newUser = document.createElement("div")
        newUser.setAttribute('class', 'character')
        let userImage = document.createElement('img')
        userImage.setAttribute('src', data[i].media[0].mediumgif.url)
        userImage.setAttribute('class', 'image')
        //userImage.setAttribute('alt', data[i].fullName)
        //y.innerText = data[i].results.id
        //newUser.appendChild(y)
        //console.log(data.results[i].media[0].mmediumgif.url)
        
        newUser.appendChild(userImage)
        container.appendChild(newUser)
       
        
    }
}
