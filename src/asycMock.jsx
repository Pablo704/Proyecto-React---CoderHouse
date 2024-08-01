const products = [
  /*-----------> E-sport <------------*/
    {
    id: 1,
    name:'JERSEY LEVIATÁN VCT AMERICAS',
    price: 45.00,
    category: 'E-sport',
    img:'https://http2.mlstatic.com/D_NQ_NP_674000-MLA77029109528_062024-O.webp',
    stock: 25,
    description:'The official Leviatan VCT jersey is now available and will be worn by the team throughout the season.'
    },
    {id: 2,
    name:'Team Heretics - Official Pro Jersey 2024',
    price: 50.00,
    category: 'E-sport',
    img:'https://teamheretics.com/en/2818-large_default/team-heretics-official-pro-jersey-2024.jpg',
    stock: 25,
    description:'The official Heretics jersey is now available and will be worn by the team throughout the season.'
    },
    {id: 3,
      name:'Sentinels - 2024 CHAMPS KOREA JERSEY ',
      price: 69.99,
      category: 'E-sport',
      img:'https://shop.sentinels.gg/cdn/shop/files/SENJersey_LayFlatV1_1.png?v=1720997600&width=2000',
      stock: 25,
      description:'SEN CITY IS GOING TO CHAMPIONS IN SEOUL! Celebrate qualifying for the biggest tournament of the year with our exclusive VCT Champions Seoul Jersey'
    },
    {id: 4,
      name:'G2 ESPORTS - PRO KIT 2024 ',
      price: 85.00,
      category: 'E-sport',
      img:'https://g2esports.com/cdn/shop/files/1_0615a2a7-2036-4f48-967c-78226e9e66b0.png?v=1693333158&width=1800',
      stock: 25,
      description:'The official G2-Esports jersey is now available and will be worn by the team throughout the season.'
    },
    /*-----------> Basketball <------------*/
    {
    id: 5,
    name:'Los Angeles Lakers LeBron James #23 ',
    price:139.99,
    category:'Basketball',
    img:'https://lakersstore.com/cdn/shop/files/james_statement_updated-57.png?v=1719863728&width=1080',
    stock: 25,
    description:'Los Angeles Lakers LeBron James #23 Camiseta Swingman'
    },
    {
    id: 6,
    name:'ALEC BURKS NIKE MIAMI HEAT',
    price:140.00,
    category:'Basketball',
    img:'https://www.miamiheatstore.com/cdn/shop/files/MH24070_JerseyProductImages_Burks_Association_White_Front-01.png?v=1720727810',
    stock: 25,
    description:'ALEC BURKS NIKE MIAMI HEAT ASSOCIATION WHITE SWINGMAN JERSEY'
    },
    {
    id: 7,
    name:'CHICAGO BULLS CAMISETA',
    price:130.00,
    category:'Basketball',
    img:'https://shop.bulls.com/cdn/shop/files/BULLMZ0051-A_DOSUNMU_11_1.jpg?v=1721148343&width=823',
    stock: 25,
    description:'CHICAGO BULLS AYO DOSUNMU NIKE ICON SWINGMAN JERSEY'
    },
    {
    id: 8,
    name:'Camiseta Boston Celtics Swingman - Edición Icon',
    price: 119.99,
    category:'Basketball',
    img:'https://images.footballfanatics.com/boston-celtics/unisex-nike-jrue-holiday-kelly-green-boston-celtics-swingman-jersey-icon-edition_ss5_p-201032349+pv-2+u-s6wuaizswzt3n9fff9or+v-7jukhouga0l3alejeqmq.jpg?_hv=2&w=900',
    stock: 25,
    description:'Unisex Nike Jrue Holiday Kelly Green Boston Celtics Swingman Jersey - Icon Edition'
    },
    /*-----------> Futbol <------------*/
    {
      id: 9,
      name:'CAMISETA TITULAR ARGENTINA 24 MESSI',
      price:110,
      category:'Futbol',
      img:'https://afaar.vtexassets.com/arquivos/ids/156744-1600-auto?v=638544012805300000&width=1600&height=auto&aspect=true',
      stock: 25,
      description:'CELEBRÁ LA TERCERA CON ESTA CAMISETA DE MESSI HECHA CON UNA MEZCLA DE MATERIALES RECICLADOS Y RENOVABLES'
      },
      {
      id: 10,
      name:'Camiseta Adidas Titular Seleccion Argentina 2024',
      price:100.25,
      category:'Futbol',
      img:'https://afaar.vtexassets.com/arquivos/ids/156638-1600-auto?v=638459540536700000&width=1600&height=auto&aspect=true',
      stock: 25,
      description:'Camiseta Adidas Titular Seleccion Argentina 2024'
      },
      {
      id: 11,
      name:'Camiseta Adidas Alternativa Seleccion Argentina 2024',
      price:100.25,
      category:'Futbol',
      img:'https://afaar.vtexassets.com/arquivos/ids/156640-1600-auto?v=638459548133600000&width=1600&height=auto&aspect=true',
      stock: 25,
      description:'Camiseta Adidas Alternativa Seleccion Argentina 2024'
      },
      {
      id: 12,
      name:'Camiseta Adidas Titular Arquero Seleccion Argentina 2024',
      price:184.50,
      category:'Futbol',
      img:'https://afaar.vtexassets.com/arquivos/ids/156676-1600-auto?v=638466216997300000&width=1600&height=auto&aspect=true',
      stock: 25,
      description:'100% Argentina. Diseñada para los hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY'
      },
    /*-----------> Hockey <------------*/
    {
      id: 13,
      name:'Las Leonas Camiseta Argentinian',
      price: 170.44,
      category:'Hockey',
      img:'https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/608x608/products/6916/20307/las-leonas-camiseta-adidas-jersey-1__48709.1661524145.jpg?c=2',
      stock: 25,
      description:'Las Leonas Official Shirt Camiseta Oficial Lightblue Official Argentinian Hockey Jersey - 2022 Edition'
      },
      {
      id: 14,
      name:"Camiseta Holanda Femenino",
      price: 180.50,
      category:"Hockey",
      img:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-mundial-femenino-2023-holanda-1.jpg',
      stock: 25,
      description:"Camiseta Oficial del Equipo Femenino de Hockey de Holanda - 2022 Edition"
      },
      {
      id: 15,
      name:"Camiseta Australia Femenino",
      price:175.00,
      category:"Hockey",
      img:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-mundial-femenino-2023-australia-1.jpg',
      stock: 25,
      description:"Camiseta Oficial del Equipo Femenino de Hockey de Australia - 2022 Edition"
      },
      {
      id: 16,
      name:"Camiseta Alemania Femenino",
      price: 185.25,
      category:"Hockey",
      img:'https://th.bing.com/th/id/R.143da6d88435204ce79f8f3a705e0d4d?rik=qAOedPrN9TImyw&pid=ImgRaw&r=0',
      stock: 25,
      description:"Camiseta Oficial del Equipo Femenino de Hockey de Alemania - 2022 Edition"
      },
    /*-----------> Rugby <------------*/
    {
      id: 17,
      name:'Camiseta de Los Pumas - Remera Titular Official',
      price: 124.99,
      category:'Rugby',
      img:'https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/608x608/products/3960/10113/NI_CI0016-100-1__20727.1663244305.JPG?c=2',
      stock: 25,
      description:'Confeccionada con Tela de juego Wevenit - Réplica'
      },
      {
      id: 18,
      name:'Camiseta de Los Pumas para Entrenar',
      price: 32,
      category:'Rugby',
      img:'https://acdn.mitiendanube.com/stores/001/106/550/products/cam11-c6632cc2b0cc191b8016301597780685-1024-1024.jpg',
      stock: 25,
      description:'Camiseta de Los Pumas de entrenamiento, 100% Original Nike Para adultos Con costuras reforzadas y elastano para que la camiseta se adhiera al cuerpo'
      },
      {
      id: 19,
      name:'Camiseta Original Canterbury De Irlanda',
      price: 23,
      category:'Rugby',
      img:'https://acdn.mitiendanube.com/stores/001/106/550/products/936807-mla32017644332_082019-f-f835943bd08d22341115925093726663-1024-1024.jpg',
      stock: 25,
      description:'Color Verde Musgo'
      },
      {
      id: 20,
      name:'Wallabies 2023 Asics Replica Home Jersey',
      price: 119,
      category:'Rugby',
      img:'https://images.footballfanatics.com/australia-rugby/wallabies-2023-asics-replica-home-jersey_ss5_p-201066198+pv-2+u-em12yky89mkmzcbcprfd+v-kg3mnzcegp5k0s4rn8nw.jpg?_hv=2&w=900',
      stock: 25,
      description:"This replica jersey is ideal for warmer weather when you're playing or out and about. Show off your pride in the Wallabies whatever you're doing."
      },
    /*-----------> Motorsport <------------*/
    {
      id: 21,
      name:'Polo Juvenil Replica',
      price:59.95,
      category:'MotorSport',
      img:'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-detail-3by4/products/RBR/2024/RBR24007_1H_1/Youth-Replica-Polo.jpg',
      stock: 25,
      description:'El kit perfecto para el día de la carrera para los fanáticos de las carreras juveniles!'
      },
      {
      id: 22,
      name:'2024 Scuderia Ferrari Team Replica T-shirt',
      price:70.25,
      category:'MotorSport',
      img:'https://store.ferrari.com/dw/image/v2/BGDG_PRD/on/demandware.static/-/Sites-48/default/dw190b872c/images/zoom/F1144f_98_1.jpg?sw=992&sh=1364',
      stock: 25,
      description:'Starring in the 2024 Replica collection, this cotton jersey T-shirt reproduces the model worn by the Scuderia Ferrari Team'
      },
      {
      id: 23,
      name:'Mens 2024 Team Driver Tee Black',
      price:78.20,
      category:'MotorSport',
      img:'https://shop-int.mercedesamgf1.com/cdn/shop/files/MAPF1_MENS_DRIVER_TEE_BLACK_FRONT.jpg?v=1719904964&width=2880',
      stock: 25,
      description:'The official 2024 Replica Team Driver T-shirt, as worn by Lewis and George. Features the same tonal hexagonal print seen throughout the 2024 Team collection alongside all the official team and sponsor branding from the 2024 Formula 1 season. Printed team and partner logos Tipped ribbed cuff Jacquard pattern Knitted striped neck rib with crossover detail Authenticity label at hem Round neck Regular fit Material: 94% polyester, 6% elastane Shipping and Payment Official Merchandise'
      },
      {
      id: 24,
      name:'ASTON MARTIN F1 TEAM 2024 Team Polo',
      price:80.24,
      category:'MotorSport',
      img:'https://shop.astonmartinf1.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw39deaa1c/images/large/701229255002_pp_01_AMF1.jpg?sw=1316&q=80',
      stock: 25,
      description:'The official 2024 Team Replica Polo, as worn throughout the Formula One® season. True to form, no detail has been spared in the pursuit of the ultimate Team Polo'
      },
]

export  const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 500)
  }) 
}

export const getProductsById = (productsId) => {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve(products.find(prod => prod.id.toString() === productsId))
    }, 500)
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === category))
    }, 500)
  })
}