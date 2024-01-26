let navbar= document.querySelector('#navbarJs');
let links=document.querySelectorAll('.link-a');
let imgLogo = document.querySelector('.imgLogo');
let linklogo= document.querySelector('.link-logo');
let containerNavv=document.querySelector('.containerNavv');
let hamb=document.querySelector('.hamburger');
let scrittaLogo = document.querySelector('.scrittaLogo');
let formcontrol= document.querySelector('.form-control');
let rowWrapper= document.querySelector('.rowWrapper');


formcontrol.classList.remove('salas')
formcontrol.classList.add('salac')
hamb.addEventListener(('click'),()=>{
    
    imgLogo.classList.toggle('rooo')
})

console.dir(imgLogo)
links.forEach((el)=>{
    
    el.classList.remove('text-b')
    el.classList.add('text-w')
})

scrittaLogo.classList.remove('text-b');
scrittaLogo.classList.add('text-w');


imgLogo.src="http://127.0.0.1:5500/media/tigerw.png"

links.forEach((el)=>{
    
    el.addEventListener('mouseenter',()=>{
        
        el.classList.remove('text-w');
        el.classList.add('text-g');
        
    })
    el.addEventListener('mouseleave',()=>{
        
        el.classList.remove('text-g');
        el.classList.add('text-w');
        
    })
})







window.addEventListener('scroll',()=>{
    
    if(window.scrollY>0){
        formcontrol.classList.remove('salac')
        formcontrol.classList.add('salas')
        scrittaLogo.classList.remove('text-w');
        scrittaLogo.classList.add('text-b');
        
        navbar.style.height='130px'
        navbar.classList.remove('bgnero')
        navbar.classList.add('bgbianco')
        
        links.forEach((el)=>{
            
            el.classList.remove('text-w')
            el.classList.add('text-b')
        })
        
        imgLogo.src="http://127.0.0.1:5500/media/tigerb.png"
        
        linklogo.classList.remove('text-w')
        linklogo.classList.add('text-b')
        
        links.forEach((el)=>{
            
            el.addEventListener('mouseenter',()=>{
                
                el.classList.remove('text-w');
                el.classList.add('text-b');
                
            })
            el.addEventListener('mouseleave',()=>{
                
                el.classList.remove('text-b');
                el.classList.add('text-g');
                
            })
        })
        
        
        
        
        
        
    }else{
        
        formcontrol.classList.remove('salas')
        formcontrol.classList.add('salac')
        
        scrittaLogo.classList.remove('text-b');
        scrittaLogo.classList.add('text-w');
        
        navbar.style.height='96px'
        navbar.classList.remove('bgbianco')
        navbar.classList.add('bgnero')
        navbar.classList.add('editbox')
        
        links.forEach((el)=>{
            
            el.addEventListener('mouseenter',()=>{
                
                el.classList.remove('text-w');
                el.classList.add('text-g');
                
            })
            el.addEventListener('mouseleave',()=>{
                
                el.classList.remove('text-g');
                el.classList.add('text-w');
                
            })
        })
        
        
        
        
        links.forEach((el)=>{
            
            el.classList.remove('text-b')
            el.classList.add('text-w')
        })
        
        
        imgLogo.src="http://127.0.0.1:5500/media/tigerw.png"
        
        
        
        
        
    }
})

// numeri incrementali

let para1 = document.querySelector('#para1');
let para2 = document.querySelector('#para2');
let para3 = document.querySelector('#para3');



function createInterval (variabile,numerofinale,velocità){
    
    let counter = 0;
    let interval = setInterval(()=>{
        
        if(counter<numerofinale){
            
            counter++
            variabile.innerHTML=counter
            
        }else{
            
            clearInterval(interval);
            
        }
        
        
    },velocità )
    
    
    
    
    
    
}

let check=true;
let observer= new IntersectionObserver((entries)=>{
    entries.forEach((el)=>{
        
        if(el.isIntersecting && check==true){
            
            
            createInterval(para1,500,10)
            createInterval(para2,500,10)
            createInterval(para3,500,10)
            check=false
            
            // gli diamo un tempo per poi ripartire
            setTimeout(()=>{
                
                check=true;
                
            },4000)
            
            
            
        }
    })
    
})

observer.observe(para3);

let annunci=[
    
    
    {nomeannuncio:'penna',categoria:'scuola',prezzo:'15$'},
    {nomeannuncio:'chitarra',categoria:'musica',prezzo:'15$'},
    {nomeannuncio:'fumetti',categoria:'lettura',prezzo:'15$'},
    {nomeannuncio:'zaino',categoria:'scuola',prezzo:'15$'},
    {nomeannuncio:'penna rossa',categoria:'scuola',prezzo:'15$'},
    {nomeannuncio:'penna blu',categoria:'scuola',prezzo:'15$'},
    {nomeannuncio:'penna verde',categoria:'scuola',prezzo:'15$'},
    {nomeannuncio:'penna verde',categoria:'scuola',prezzo:'15$'},
    {nomeannuncio:'penna verde',categoria:'scuola',prezzo:'15$'},
    
]

annunci.forEach((annuncio,i)=>{
    
    if(i>=annunci.length-3){
        
        let div = document.createElement('div')
        div.classList.add('col-12', 'col-md-2', 'd-flex', 'mt-5' ,'justify-content-center')
        div.innerHTML=`
        
        <div class="card mx-1" style="width: 18rem;">
        <img src="https://picsum.photos/${300+i}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${annuncio.nomeannuncio}</h5>
        <p class="card-text">${annuncio.categoria}</p>
        <p class="card-text">${annuncio.prezzo}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        
        
        
        
        `
        
        rowWrapper.appendChild(div);
        
        
        
    }
    
    
})












let swiperWrapper= document.querySelector('.swiper-wrapper');

let reviews=[
    
    {name:'david', commento:'bellissimo e sublime'},
    {name:'david', commento:'bellissimo e sublime'},
    {name:'david', commento:'bellissimo e sublime'},
    {name:'david', commento:'bellissimo e sublime'},
    {name:'david', commento:'bellissimo e sublime'},
    {name:'david', commento:'bellissimo e sublime'},
]

reviews.forEach((rewiew)=>{
    
    let div= document.createElement('div');
    div.classList.add('swiper-slide' ,'d-flex', 'align-items-center' ,'justify-content-center')
    div.innerHTML=`
    
   
    
    <div class="review-card">
    <p>${rewiew.name}</p>  
    <p>${rewiew.commento}</p>  
    
    
    </div>
    
    
  
    
    
    `
    
    swiperWrapper.appendChild(div)
} )














const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
     effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,

      },
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


    
