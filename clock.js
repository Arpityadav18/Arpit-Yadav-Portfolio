// function for date and time
(function(){
    setInterval(()=>{
      var d=new Date().toLocaleString();
      document.getElementById('date').innerHTML=d;
    
    },1000)
    })();
    
    //End of function for date and time
    