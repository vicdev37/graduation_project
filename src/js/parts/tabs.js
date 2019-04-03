function tabs() {

  // top tabs
   let tab = document.querySelectorAll('.tab'),
     info = document.querySelector('.info-header'),
     tabContent = document.querySelectorAll('.tabcontent'),
     link = document.querySelectorAll('.link'),
     tabImg = document.querySelectorAll('.tabImg'),
     hideTabContent = (a) => {
       for (let i = a; i < tabContent.length; i++) {
         tabContent[i].classList.remove('show');
         tabContent[i].classList.add('hide');
         link[i].classList.remove('active');
       }
     };

   hideTabContent(1);

   let showTabContent = (b) => {
     if (tabContent[b].classList.contains('hide')) {
       hideTabContent(0);
       tabContent[b].classList.remove('hide');
       tabContent[b].classList.add('show');
     }
   };

   info.addEventListener('click', (event) => {
         let target = event.target,
           tabs = (a, c) => {
             if (target && target.classList.contains(a)) {
               for (let i = 0; i < c.length; i++) {
                 if (target === c[i]) {
                   hideTabContent(0);
                   showTabContent(i);
                   link[i].classList.add('active');
                   break;
                 }
               }
             }
           };

         tabs('tab', tab);
         tabs('link', link);
         tabs('tabImg', tabImg);
      }); 
  
  
  
  
  //bottom tabs
  let bottomTab = document.querySelectorAll('.decoration_tab'),
    bottomTabInfo = document.querySelector('.decoration_slider'),
    bottomTabLink = document.querySelectorAll('.decoration_link'),
    bottomTabContent = document.querySelectorAll('.tab_content'),
    dLink = document.querySelectorAll(".d_link > a");

  // let hideDecTabContent = (a) => {
    

    let hideDecTabContent = (a) => {
    for (let i = a; i < bottomTabContent.length; i++) {
      bottomTabContent[i].classList.remove('show');
      bottomTabContent[i].classList.add('hide');
      bottomTab[i].classList.remove('after_click');
      dLink[i].classList.remove('click_link');
    }
  };

  hideDecTabContent(1);

  let showDecTabContent = (b) => {
    if (bottomTabContent[b].classList.contains('hide')) {
      hideDecTabContent(0);
      dLink[b].classList.add('click_link');
      bottomTabContent[b].classList.remove('hide');
      bottomTabContent[b].classList.add('show');
    }
  };


  bottomTabInfo.addEventListener('click', (event) => {
    let target = event.target,
        tabs = (a, b) => {
    if (target && target.classList.contains(a)) {
      for (let i = 0; i < b.length; i++) {
        if (target === b[i]) {
          hideDecTabContent(0);
          showDecTabContent(i);
          bottomTab[i].classList.add('after_click');
          break;
        }
      }
    }
  };
  tabs('decoration_tab', bottomTab);
  tabs('decoration_link', bottomTabLink);
  });

}

export default tabs;