let navEvent = document.getElementById('nav-event')
let section = document.getElementById('about');
let progress = document.querySelectorAll(".range")
let count = document.getElementById('count');
let numbers = document.querySelectorAll('.num');
let started =false  //function started? no
// console.log(navEvent);
let arrowUp = document.getElementById('arrow')
window.addEventListener('scroll' , function (){
    let scrollEl = document.documentElement.scrollTop;
    // console.log(scrollEl)
    if(scrollEl>100){
       navEvent.style.backgroundColor='rgba(31, 132, 247, 0.6)';
       navEvent.style.padding='20px';
       navEvent.style.transition='all 0.7s ease-in';
       
    }
    else
    {
       navEvent.style.backgroundColor='transparent';
    }
})

arrowUp.addEventListener('click' , ()=>{
    window.scrollTo(0,30)
    })

// progress
window.addEventListener('scroll' , function(){
    if(window.scrollY >= section.offsetTop+100){
        // console.log('reaches success')
       progress.forEach((range) =>{
        range.style.width=range.dataset.width;
        range.style.transition='all 0.7s ease-in';
       })
    }
})

// count

window.addEventListener('scroll',function(){
    if(this.window.scrollY >= count.offsetTop){
         if(!started){
            numbers.forEach((num) => startCount(num))
         }
         started=true;
    }
})
function startCount(element){
    let goal = element.dataset.goal;
    let counter=setInterval(() => {
      element.textContent++;
      if(element.textContent==goal){
        clearInterval(counter)
      }
    }, 1000/goal)
}
// startCount(document.querySelectorAll(".num")[0])