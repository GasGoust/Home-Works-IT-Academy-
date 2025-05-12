let links = document.querySelectorAll('.menu li')
let tabs = document.querySelectorAll('.tabs .tab')    

// console.log(links[0].children)


    //1 вариант через dataset
    /*for (let link of links) {
      link.onclick = tabClick;
    }

    function tabClick(event) {
      let id = event.target.dataset.id;
      document.querySelector('.menu li.active').classList.remove('active')
      links[id].classList.add('active')

      document.querySelector('.tabs .tab.active').classList.remove('active')
      tabs[id].classList.add('active')
    }*/


    //2 вариант,  через for и анонимную функцию
    // for (let i=0; i< links.length; i++) {
    //   links[i].onclick = function(event) {
    //     document.querySelector('.menu li.active').classList.remove('active')
    //     links[i].classList.add('active')
    //     document.querySelector('.tabs .tab.active').classList.remove('active')
    //     tabs[i].classList.add('active')
    //   };
    // }

    // 3 вариант, через именованную функцию и только через 
    // стрелочную функцию обертку 
    for (let i=0; i < links.length; i++) {
        links[i].onclick = () => clickLink(i) 
    }
    
    function  clickLink(i) {
        document.querySelector('.menu li.active').classList.remove('active')
        links[i].classList.add('active')
        document.querySelector('.tabs .tab.active').classList.remove('active')
        tabs[i].classList.add('active')
    };
