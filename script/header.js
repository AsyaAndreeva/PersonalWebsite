const sectionAll = document.querySelectorAll('section[id]');

window.addEventListener('scroll',()=>{
    const scrollY = window.pageYOffset;

    sectionAll.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop-100;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            document
            .querySelector('li a[href*='+sectionId+']')
            .classList.add('PrimeNavStyle');
        }
        else{
            document
            .querySelector('li a[href*='+sectionId+']')
            .classList.remove('PrimeNavStyle');
        }
    });
});

