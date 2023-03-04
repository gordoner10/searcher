
const loadProducts = async (filtro) => {
  let Producto = '';
  let responseJson = await fetch('https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json');
  let resultJson = await responseJson.json();

  resultJson.map(e => {

    if(e.name === filtro || e.type === filtro || filtro === ''){
      Producto = Producto + `
      <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
        <div class="card card-blog card-plain">
          <div class="card-header p-0 mt-n4 mx-3">
            <a class="d-block shadow-xl border-radius-xl">
              <img src="${e.src}" alt="${e.name}" class="img-fluid shadow border-radius-xl">
            </a>
          </div>
          <div class="card-body p-3">
            <p class="mb-0 text-sm">${e.type}</p>
            <a href="javascript:;">
              <h5>
                ${e.name}
              </h5>
            </a>
            <p class="mb-4 text-sm">
              <b>Price: </b> $ ${e.price}
            </p>
          </div>
        </div>
      </div>`;
    }
    
  })

  let responseXml = await fetch('https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml');
  let resultXml = await responseXml.text();
  let xml = (new DOMParser()).parseFromString(resultXml, 'application/xml');
  let productosXml = xml.getElementsByTagName("product");

  for (let elemento of productosXml) {
      let etiquetas = elemento.getElementsByTagName("name");
      let etiquetas2 = elemento.getElementsByTagName("src");
      let etiquetas3 = elemento.getElementsByTagName("price");
      let etiquetas4 = elemento.getElementsByTagName("type");
      let name, src, price, type;
      name=etiquetas[0].innerHTML;
      src=etiquetas2[0].innerHTML;
      price=etiquetas3[0].innerHTML;
      type=etiquetas4[0].innerHTML;

    if(name === filtro || type === filtro || filtro === ''){
      Producto = Producto + `
      <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
        <div class="card card-blog card-plain">
          <div class="card-header p-0 mt-n4 mx-3">
            <a class="d-block shadow-xl border-radius-xl">
              <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
            </a>
          </div>
          <div class="card-body p-3">
            <p class="mb-0 text-sm">${type}</p>
            <a href="javascript:;">
              <h5>
                ${name}
              </h5>
            </a>
            <p class="mb-4 text-sm">
              <b>Price: </b> $ ${price}
            </p>
          </div>
        </div>
      </div>`;
    }
    
  }

  let Productos = document.getElementById("listProducts");
  Productos.innerHTML = Producto;
}

/*Carga inicial todos los productos*/
loadProducts("");
let FiltroB = document.getElementById("filter");

FiltroB.addEventListener('click', () => {
  let valor = document.getElementById("text").value;
  loadProducts(valor);
})
