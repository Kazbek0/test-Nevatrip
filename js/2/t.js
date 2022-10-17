var option1;

var price ;

var time;

var sent;

var finish;

function findOption1(select) {
      option1 = select.querySelector(`option[value="${select.value}"]`)
     // Действия над option
    

     if (option1.value === "из A в B" ) {
        price = '700';
    }
    else if (option1.value === "из B в A"){
        price = '700'
    }
     else if (option1.value === "из A в B и обратно в А")
     {price = '1200'}
    
       
     if (option1.value === "из A в B" ) {
        time = '50 минут';
    }
    else if (option1.value === "из B в A"){
        time = '50 минут'
    }
     else if (option1.value === "из A в B и обратно в А")
     {time = '1 час 40 минут'}
      
  }




  

  var option2
  function findOption2(select) {
     option2 = select.querySelector(`option[value="${select.value}"]`)
     // Действия над option
    
  
        if (option2.value == '18:00(из A в B)') {sent = '18:00'} 
        else if (option2.value == '18:30(из A в B)') {sent = '18:30'}     
        else if (option2.value == '18:45(из A в B)') {sent = '18:45'}          
        else if (option2.value == '19:00(из A в B)') {sent = '19:00'}     
        else if (option2.value == '19:15(из A в B)') {sent = '19:15'}     
        else if (option2.value == '21:00(из A в B)') {sent = '21:00'}     
        else if (option2.value == '18:30(из B в A)') {sent = '18:30'}     
        else if (option2.value == '18:45(из B в A)') {sent = '18:45'}     
        else if (option2.value == '19:00(из B в A)') {sent = '19:00'}     
        else if (option2.value == '19:15(из B в A)') {sent = '19:15'}     
        else if (option2.value == '19:35(из B в A)') {sent = '19:35'}     
        else if (option2.value == '21:50(из B в A)') {sent = '21:50'}     
        else if (option2.value == '21:55(из B в A)') {sent = '21:55'}
        
       
        if (option2.value == '18:00(из A в B)') {finish = '18:50'} 
        else if (option2.value == '18:30(из A в B)') {finish = '19:20'}     
        else if (option2.value == '18:45(из A в B)') {finish = '19:35'}          
        else if (option2.value == '19:00(из A в B)') {finish = '19:50'}     
        else if (option2.value == '19:15(из A в B)') {finish = '20:05'}     
        else if (option2.value == '21:00(из A в B)') {finish = '21:50'}     
        else if (option2.value == '18:30(из B в A)') {finish = '19:20'}     
        else if (option2.value == '18:45(из B в A)') {finish = '19:35'}     
        else if (option2.value == '19:00(из B в A)') {finish = '19:50'}     
        else if (option2.value == '19:15(из B в A)') {finish = '20:05'}     
        else if (option2.value == '19:35(из B в A)') {finish = '20:25'}     
        else if (option2.value == '21:50(из B в A)') {finish = '22:40'}     
        else if (option2.value == '21:55(из B в A)') {finish = '22:45'}
  }




  

var v;
  function findOption3(){
    v = document.getElementById('num').value;

    
    alert(
        'Вы выбрали ' + v + ' билета по маршруту '+ option1.value + ' стоимостью ' + price * v  + 'р'
    +' Это путешествие займет у вас  '+ time +
    ' Теплоход отправляется в '+ sent + ' а прибудет в ' +  finish + '.'
    )
 }


  