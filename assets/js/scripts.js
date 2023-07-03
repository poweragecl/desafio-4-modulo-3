const propiedadesList = [
    {
        nombre: "Casa de campo",
        descripcion: "Un lugar ideal para descansar de la ciudad",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        rooms: 2,
        m: 170
    },
    {
        nombre: "Casa de playa",
        descripcion: "Despierta tus días oyendo el oceanos",
        src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        rooms: 2,
        m: 130
    },
    {
        nombre: "Casa en el centro",
        descripcion: "Ten cerca de ti todo lo que necesitas",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        rooms: 1,
        m: 80
    },
    {
        nombre: "Casa rodante",
        descripcion: "Conviértete en un nómada del mundo sin salir de tu casa",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        rooms: 1,
        m: 6
    },
    {
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        rooms: 3,
        m: 200
    },
    {
        nombre: "Mansión",
        descripcion: "Vive una vida lujosa en la mansión de tus sueños",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        rooms: 5,
        m: 500
    }
];

const inputs = Array.from(document.querySelectorAll("input"));
const filter = document.querySelector('#filterBtn');
const reset = document.querySelector('#resetBtn');
const propertiesRender = document.querySelector('#properties-wrapper');
const propertiesCount = document.querySelector('#property-count');



filter.addEventListener('click', () => {
    const[{value: cuartos}, {value: metrosMin}, {value: metrosMax}] = inputs;


    if( (!cuartos || !metrosMin || !metrosMax) ){
        alert('Completa los campos faltantes');
        return;
    }

    

    const propiedades = propiedadesList.filter(
        ({rooms, m}) => rooms == cuartos && m >= metrosMin && m <= metrosMax
    );

    fillPropiedades(propiedades);

});


reset.addEventListener('click', () => {
    fillPropiedades();
    
    //reset fields
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }

} );



const fillPropiedades = ( propiedades = propiedadesList) => {
    propertiesRender.innerHTML = null;
    propertiesCount.innerHTML = `Propiedades encontradas: ${propiedades.length}`;
    propiedades.forEach( ( propiedad ) => {
        const propiedadTemplate = templateProperty( propiedad );
        propertiesRender.innerHTML += propiedadTemplate;
    });
};


//print template
const templateProperty = ({ nombre, descripcion, src, rooms, m }) => {
  
    return `
        <div class="property-card">
            <img src="${src}" alt="foto propiedad">

            <div class="property-details">

            <h3 class="property-name">${nombre}</h3> 

            <div class="property-specs">              
                <ul class="specs">
                    <li class="spec">Cuartos: ${rooms}</li>
                    <li class="spec">Metros: ${m}</li>
                </ul>
            </div>

            <p class="property-description">${descripcion}</p>
            </div>

            <div class="property-buttons">
            <a href="#" class="btn-property">Ver más</a>
            </div>

        </div> 
    `;

};

//renderDefault
fillPropiedades();