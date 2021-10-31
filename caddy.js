//for nav

$(document).ready(()=>{
    const img=document.getElementById('logo')
      let width=window.innerWidth;
      if(width>992){
        img.setAttribute('src','./navlogo.png');
      }else{
          img.setAttribute('src','./logoresize.png')
      }
  
    window.addEventListener('resize',()=>{
        let width=window.innerWidth;
        if(width<992){
           img.setAttribute('src','./logoresize.png');
        }else if(width>992){
            img.setAttribute('src','./navlogo.png')
    
        }
    })


})    

// nav end