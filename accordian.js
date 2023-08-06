const accordians= document.querySelectorAll('.accordian');
accordians.forEach(i =>{
    const icon=i.querySelector('.icon');
    const answer=i.querySelector('.answer');
    i.addEventListener('click',()=>{
        // icon.classList.toggle("active");
        // answer.classList.toggle('active');

        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight= null;
        }
        else{
            icon.classList.add('active');
            answer.style.maxHeight= answer.scrollHeight + 'px';

            }


    })
})
