
let loadProducts = ( ) => {

    fetch( "https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json" )
      .then(response => response.json() ) 
      .then(result => {
        //console.log( result );
      })
      .catch(error => {
        console.log( error );
      });

    
    /*XML*/
    fetch( "https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.xml" )
    .then(response => response.text() ) /* Convierte el response a texto */
    .then(result => {
      let xml = (new DOMParser()).parseFromString(result, 'application/xml');
     // console.log( xml );    
     let arrarProduct = xml.getElementsByTagName("product");
     
     for (let item of arrarProduct)
     {
        let etiqueta= item.getElementsByTagName("name");
        let name = etiqueta[0].innerHTML;
    }
})
    .catch(error => {
      console.log( error );
    });
    
  }

loadProducts();


