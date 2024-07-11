let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=67eb6e1cd26546adb5f68336cae15cb8'
fetch(url)
.then(response => response.json())
.then(data => showData(data.articles))
.catch(error => console.log(error))

const showData = (articles) => {
    body = '';

    for(let i =5; i<10; i++){
        body += `<div class='card p-4 mb-5 shadow'><div class='card-body'><h4 class=card-title>${articles[i].title}</h4><div class='card-text'>${articles[i].description}</div><a href='${articles[i].url}' class='btn btn-primary mt-4' target='_blank'>Read Article</a></div></div>`
    }

    document.getElementById('data').innerHTML = body;
}