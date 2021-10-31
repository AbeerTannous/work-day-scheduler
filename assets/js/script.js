 var todayDateEl = document.getElementById("currentDay");

 todayDateEl.textContent=moment().format("dddd LL");
// calling the function that audit the time 
 auditTime();
// getting the saved taskes from the local storage
var taskItm1 = JSON.parse(localStorage.getItem("task1"));
$("#input1").val(taskItm1);
 var taskItm2 = JSON.parse(localStorage.getItem("task2"));
 $("#input2").val(taskItm2);
 var taskItm3 = JSON.parse(localStorage.getItem("task3"));
 $("#input3").val(taskItm3);
 var taskItm4 = JSON.parse(localStorage.getItem("task4"));
 $("#input4").val(taskItm4); 
 var taskItm5 = JSON.parse(localStorage.getItem("task5"));
 $("#input5").val(taskItm5);
 var taskItm6 = JSON.parse(localStorage.getItem("task6"));
 $("#input6").val(taskItm6);
 var taskItm7 = JSON.parse(localStorage.getItem("task7"));
 $("#input7").val(taskItm7);
 var taskItm8 = JSON.parse(localStorage.getItem("task8"));
 $("#input8").val(taskItm8);
 var taskItm9 = JSON.parse(localStorage.getItem("task9"));
 $("#input9").val(taskItm9);


// the function that audit the time and change the task backround color
 function auditTime(){
  var currentTime = moment().format("H");

    $(".row").each(function(){
         time = parseInt($(this).attr("id"));
        console.log(time);
        if (currentTime > time){
          $(this).addClass("past");
      
        }
        else if(currentTime == time){
         $(this).removeClass("past");
          $(this).addClass("present");
        }
        else{
          $(this).removeClass("past");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
    });
    }
// saving the tasks one by one 
    $(".saveBtn").click( function(){
      var textEl =$("#input1").val().trim();
      localStorage.setItem('task1',JSON.stringify(textEl));   
    });

    $(".saveBtn").click( function(){
      var textEl =$("#input2").val().trim();
      localStorage.setItem('task2',JSON.stringify(textEl));
       
    });
    
    $(".saveBtn").click( function(){
      var textEl =$("#input3").val().trim();
      localStorage.setItem('task3',JSON.stringify(textEl));
        
    });

    $(".saveBtn").click( function(){
      var textEl =$("#input4").val().trim();
      localStorage.setItem('task4',JSON.stringify(textEl));
       
    });
    $(".saveBtn").click( function(){
      var textEl =$("#input5").val().trim();
      localStorage.setItem('task5',JSON.stringify(textEl));
        
    });

    $(".saveBtn").click( function(){
      var textEl =$("#input6").val().trim();
      localStorage.setItem('task6',JSON.stringify(textEl));
        
    });
    $(".saveBtn").click( function(){
      var textEl =$("#input7").val().trim();
      localStorage.setItem('task7',JSON.stringify(textEl));
       
    });

    $(".saveBtn").click( function(){
      var textEl =$("#input8").val().trim();
      localStorage.setItem('task8',JSON.stringify(textEl));
        console.log("click");
    });
    $(".saveBtn").click( function(){
      var textEl =$("#input9").val().trim();
      localStorage.setItem('task9',JSON.stringify(textEl));
        
    });