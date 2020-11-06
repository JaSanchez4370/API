console.log("*** consumo de api 2***");

// definir la url que vamos a consumir -----

let url = "https://www.balldontlie.io/api/v1/teams";

const getData = (api,opc) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      if (opc==1)
      imprimirDatos(json);
      else
      obtenerUrl(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};



// primer paso para consumir la api es obner las urls 



//const Data = (data) => {
 // getData(data,1);
//}



const imprimirDatos = (data) => {

    html="";

    data.data.forEach(equipos => {
  


       
  
    html += `<div class="dd">`;
    html += `<div>`;
    html += `<ul>`;
    html += `<li>`;
    html += `<p>Nombre completo:</p>`;
    html += `<p>${equipos.full_name} (${equipos.abbreviation})</p>`;
    html += `<p>Ciudad:</p>`;
    html += `<p>${equipos.city}</p>`;
    html += `<p>Conferencia:</p>`;
    html += `<p>${equipos.conference}</p>`;
    html += `<button type="text" onclick="mostrarjugadores('${equipos.id}')" class="txtP">Jugadores</button>`;
    html += `</li>`;
    html += `</ul>`;
    html += `</div>`;
    html += `<div>`;
    html += `</div>`;
    html += `</div>`;
 
  document.getElementById("contenedorTodo").innerHTML = html;
});
};



let html2;


function mostrarjugadores (equipo) {

    let jugadores=[];

const paginas =33;
let url2;

for (let index = 1; index <= paginas; index++) {

    url2="https://www.balldontlie.io/api/v1/players/?page="+index+"&per_page=100";

    

    fetch(url2)
    .then(res => res.json())
    .then(data => {
       data.data.forEach(users => {

        if (users.team.id==equipo) {
            jugadores.push(users.id);
        }

       }); 
    })

    
    
}

console.log(jugadores['1']);
let url3;

/*for (let index1 = 0; index1 <= jugadores.length; index1++) {
    
    url3="https://www.balldontlie.io/api/v1/players/";
console.log(url3);
}*/
 
    }


function pintarjugadores(usuarios){

    let url3;

    for (let index1 = 0; index1 <= usuarios.length; index1++) {
        
        url3="https://www.balldontlie.io/api/v1/players/"+usuarios[index1];
  console.log(url3);
    

    /*fetch(url3)
    .then(ress => ress.json())
    .then(result => {
       result.forEach(users1 => {

       console.log(users1)

       }); 
    })*/


    }

}



getData(url,1);