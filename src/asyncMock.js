const products = [
    { id: "1", name: "Cometierra - Dolores Reyes", img: "/public/img/cometierra.png", description: "Cometierra es como una bengala en el cielo, que es a la vez una belleza y un pedido de auxilio, y no se puede dejar de mirar hasta que se termina. Con una historia de pobreza, violencias, ternura y algo como magia, Dolores Reyes te zambulle en esta novela de la que querés salir sólo para poder compartirla. - Acaricié la tierra que me daba ojos nuevos, visiones que sólo veía yo. Sabía cuánto duele el aviso de los cuerpos robados. Acaricié la tierra, cerré el puño y levanté en mi mano la llave que abría la puerta por la que se habían ido María y tantas chicas, ellas sí hijas queridas de la carne de otra mujer. Levanté la tierra, tragué, tragué más, tragué mucho para que nacieran los ojos nuevos y pudiera ver.-", price: 6750, category: "libros", stock: 10 },
    { id: "2", name: "La Sal - Adriana Riva", img: "/public/img/la-sal.jpg", description: "Ema cursa el embarazo de su segundo hijo. Hace tiempo, cuando era chica, tuvo un accidente que casi la deja sin caminar y, a partir de allí, la relación con su madre se resintió. Ahora está por emprender un viaje en auto con todas las mujeres de la familia. A partir de tres momentos claves (el accidente, el viaje, el parto), Ema va repasando y revisando la historia familiar, la relación con su madre, y los sentimientos que tiene sobre su propia vida y su propia maternidad. Con diálogos imperdibles e imágenes super originales, Adriana Riva nos regala una historia conmovedora y muy bien narrada. ", price: 5560, category: "libros", stock: 10 },
    { id: "3", name: "Desierto sonoro - Valeria Luiselli", img: "/public/img/desierto-sonoro.png", description: "-Las conversaciones, en una familia, se vuelven arqueología lingüística; erigen el mundo que compartimos, lo superponen en palimpsestos, le dan sentido a nuestro presente y nuestro futuro. La pregunta es: en el futuro, cuando rebusquemos en nuestro archivo íntimo y escuchemos de nuevo la cinta de las conversaciones familiares, ¿alcanzarán a componer una historia? ¿Un paisaje sonoro? ¿O encontraremos tan solo cascajo, ruido, ruinas de lo que fuimos?- Este es un libro inusual y hermoso. Íntimo y político. Un matrimonio y sus hijos viajan por el país en auto. Los motivos y el desenlace del viaje no están del todo claros para nadie. Horas en auto, música, audiolibros, silencios, pueblos desconocidos, historias de apalaches y niños perdidos. Valeria Luiselli construyó, con la narración de un viaje, muchos viajes para la persona afortunada que lea este libro.",  price: 4880, category: "libros", stock: 10 },
    { id: "4", name: "El caballero que cayó al mar - H. C. Lewis", img: "/public/img/el-caballero-que-cayo-al-mar.png", description: "De las historias de personajes que caen al mar, esta es una bastante insólita. ¿Por qué? Porque el protagonista cae al agua solo, sin catástrofe ni hundimiento, ni objetos a su alcance. Completamente solo. Este protagonista es Henry Preston Standish, un gentleman. ¿Por qué estaba en ese barco? ¿Qué motivos lo llevaron hasta ahí? ¿Qué piensa este hombre flotando solo en el océano? -Cuando Henry Preston Standish cayó de cabeza al océano Pacífico, el sol empezaba a trepar por el horizonte oriental. El mar estaba calmo como una laguna; el clima tan templado y la brisa tan suave, que era imposible no sentirse gloriosamente triste-", price: 6780, category: "libros", stock: 10 },
    { id: "5", name: "Los Elementales - Michael McDowell", img: "/public/img/los-elementales.png", description: "Tras un velorio de lo más perturbador (y ya con esto el libro arranca bien), la familia de la difunta Marian Savage decide pasar unos días en Beldame, un paraje de playa bastante aislado. En Beldame hay únicamente tres casas, idénticas y antiguas. Dos casas son habitables y albergan historias y rencillas familiares. Las tercera, guarda algo mucho (mucho) más inquietante. -La había despertado un ruido chirriante bajo el oleaje habitual. Sabía que, fuera lo que fuese lo que había hablado, había hablado en la tercera casa, fue  directo hacia la ventana. Corrió la cortina con los dedos y acercó la oreja. Quizá los ruidos que había escuchado después, puertas que chirriaban y vidrios rotos, eran fruto de su imaginación. En las olas se podía oír cualquier cosa: el canto de las sirenas o los pasos de los muertos sobre la arena.-", price: 6950, category: "libros", stock: 10 },
    { id: "6", name: "Café Cereja Descascado", img: "/public/img/cereja-descascado.jpeg", description: "(Brasil) Suave como una sambita de las de antes.", price: 2500, category: "cafe", stock: 10 },
    { id: "7", name: "Café Excelso", img: "/public/img/excelso.jpeg", description: "(Colombia) Liviano y de sabor robusto. Un novelero.", price: 2500, category: "cafe",  stock: 10 },
    { id: "8", name: "Café Guanes Genuino", img: "/public/img/guanes-genuino.jpeg", description: "(Colombia) Un compañero Genuino para lecturas largas.", price: 2500, category: "cafe",  stock: 10 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };