document.addEventListener('DOMContentLoaded',function(){
    
    const electrodomesticos = [
        {   
            id: 1, 
            nombre: "Lavarropas", 
            tipo: "Aurora", 
            img: "./img/lavarropas.avif" 
        },
        { 
            id: 2, 
            nombre: "Horno", 
            tipo: "Ariston", 
            img: "./img/horno.jpg" 
        }, 
        { 
            id: 3, 
            nombre: "Microondas", 
            tipo: "Samsung", 
            img: "./img/microondas.avif" 
        },
        { 
            id: 4, 
            nombre: "Heladera", 
            tipo: "LG", 
            img: "./img/heladera.jpg" 
        },
        { 
            id: 5, 
            nombre: "Licuadora", 
            tipo: "Surtiloza", 
            img: "./img/licuadora.jpg" 
        },
        { 
            id: 6, 
            nombre: "Procesadora", 
            tipo: "ATMA", 
            img: "./img/procesadora.jpg" 
        },
       
    ];

    const contenedorPadre = document.querySelector(".contenedor_padre");

    electrodomesticos.forEach(electrodomesticos => {
        const card = document.createElement("div");
        card.classList.add("card");

        const nombre = document.createElement("h3");
        nombre.textContent = electrodomesticos.nombre;
        card.appendChild(nombre);

        const imagen = document.createElement("img");
        imagen.src = electrodomesticos.img;
        card.appendChild(imagen);

        const tipo = document.createElement("p");
        tipo.textContent = `Tipo: ${electrodomesticos.tipo}`;
        card.appendChild(tipo);

        const btn_card = document.createElement("button");
        btn_card.textContent = "Comprar";
        btn_card.classList.add("card_btn");
        card.appendChild(btn_card);
        
        btn_card.addEventListener('click', function() {
            agregarAlCarrito(electrodomesticos);
        });

        contenedorPadre.appendChild(card);
        
    });


    const hamburgerButton = document.getElementById("hamburgerButton");
    const menu = document.getElementById("menu");
    const carritoLink = document.getElementById("carritoLink");
    const carritoMenu = document.getElementById("carritoMenu");
    const salirButton = document.getElementById("salirButton");
    const carritoItems= document.getElementById("carritoItems");
    const vaciar = document.getElementById("btn_vaciar");


    function toggleMenu(){
        if(menu.style.display === 'block'){
            menu.style.display= ' none'
            hamburgerButton.innerHTML ='&#9776;';
        }else{
            menu.style.display= 'block';
            hamburgerButton.innerHTML = 'x';
        }
    }

    hamburgerButton.addEventListener('click',toggleMenu);



    window.addEventListener('resize',function(){
        if(this.window.innerWidth > 600){
            menu.style.display = 'flex';
            hamburgerButton.innerHTML='&#9776;';
        }else{
            menu.style.display='none'
        }
    })




    if(window.innerWidth >600){
        menu.style.display ='flex';
    }else{
        menu.style.display ='none';
    }



    carritoLink.addEventListener('click',function(event){
        event.preventDefault();
        carritoMenu.style.display ='block';
    });


    salirButton.addEventListener('click',function(){
        carritoMenu.style.display ='none';
    })

    vaciar.addEventListener('click',function(){
        carritoItems.innerHTML='';
    })


    //funcion para agregar productos al carrito 

    function agregarAlCarrito(electrodomesticos){
        const item = document.createElement("li");
        item.classList.add("li_carrito");
        item.innerText=electrodomesticos.nombre;

        const eliminarBtn = document.createElement('button');
        eliminarBtn.innerText='eliminar';
        eliminarBtn.classList.add("btn_carrito");

        //funcion para eliminar un producto 
        eliminarBtn.addEventListener('click',function(){
            item.remove()
        })

        item.appendChild(eliminarBtn);
        carritoItems.appendChild(item);
    }



});


        

       




        




















    