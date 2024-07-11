let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = '' //variable que contendra los datos de la api
    for(let i = 0; i<data.length; i++){
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>` //creo el formato html para mostrar los datos
    } //itera sobre los datos recopilando cada uno y guardandolo en la variable

    document.getElementById('data').innerHTML = body //selecciono elemento del DOM donde mostrare mis datos
}