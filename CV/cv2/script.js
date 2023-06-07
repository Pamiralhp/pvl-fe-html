fetch("datos.json")
  .then((response) => response.json())
  .then((respuesta) => {
    let body = document.body;
    let cabecera = document.createElement("header");
    let nombre = document.createElement("h1");
    let email = document.createElement("h2");
    let edad = document.createElement("h2");
    let container = document.createElement("div");
    container.id = "caja";
    let tabla = document.createElement("table");

    nombre.textContent = respuesta.nombre;
    email.textContent = respuesta.email;
    edad.textContent = respuesta.edad;


    let col = Object.keys(respuesta.works[0]);
    let thead = document.createElement("th");
    let row = document.createElement("tr");
    thead.textContent = "empresa";
    row.appendChild(thead);
    
    


    col.forEach((element) => {
      let th = document.createElement("th");
      th.innerText = element;
      row.appendChild(th);
    });

    body.appendChild(cabecera);
    body.appendChild(container);
    cabecera.appendChild(nombre);
    cabecera.appendChild(email);
    cabecera.appendChild(edad);
    container.appendChild(tabla)
    caja.appendChild(row);
    caja.appendChild(thead);
  })
  .catch((error) => {
    console.error("Error al cargar el archivo: ", error);
  });
