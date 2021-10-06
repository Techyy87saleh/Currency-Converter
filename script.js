       
 let taka   = document.getElementById('taka');
 let dollar = document.getElementById('dollar');
 let lira   = document.getElementById('lira');
 let afgani = document.getElementById('afgani');
   
 taka.addEventListener('input',()=>{
    let totalTaka = taka.value;
    
      dollar.value = totalTaka * 0.012;
       lira.value   = totalTaka * 0.10;
      afgani.value = totalTaka * 0.93;

 
  })

  dollar.addEventListener('input',()=>{
let totalDollar = dollar.value;
 
 
     taka.value = totalDollar * 84.76;
       lira.value = totalDollar * 8.74;
     afgani.value = totalDollar * 78.50;

  });

  lira.addEventListener('input',()=>{

     let totalLira = lira.value;    
 


 

     taka.value = totalLira * 9.70;
     dollar.value = totalLira * 0.11;
     afgani.value = totalLira * 8.98;
  })

  afgani.addEventListener('input',()=>{

     let totalAfgani = afgani.value; 
 
 

     taka.value = totalAfgani * 1.08;
     dollar.value = totalAfgani * 0.013;
     lira.value = totalAfgani * 0.11;

  })
