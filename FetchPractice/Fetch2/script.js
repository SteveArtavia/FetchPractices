let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=67eb6e1cd26546adb5f68336cae15cb8'
fetch(url)
.then(response => response.json())
.then(data => showData(data.articles))
.catch(error => console.log(error))

const showData = (articles) => {
    body = '';

    for(let i =0; i<5; i++){
        body += `<div class='card'><small>${articles[i].author}</small><h3>${articles[i].title}</h3><p>${articles[i].description}</p></div>`
    }

    document.getElementById('data').innerHTML = body;
}