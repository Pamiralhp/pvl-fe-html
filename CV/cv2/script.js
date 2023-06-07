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

    let elemento = document.getElementById("caja");

    let col = Object.keys(respuesta.works[0]);
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");

    col.forEach((element) => {
      let th = document.createElement("th");
      th.innerText = element;
      tr.appendChild(th);
    });

    thead.appendChild(tr);
    tabla.append(tr);
    body.appendChild(cabecera);
    body.appendChild(container);
    cabecera.appendChild(nombre);
    cabecera.appendChild(email);
    cabecera.appendChild(edad);
    elemento.appendChild(tabla);
  })
  .catch((error) => {
    console.error("Error al cargar el archivo: ", error);
  });
