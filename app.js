// Chapter 26-30
// Q1.


// var user = +prompt('Enter a positive integer :','00.00');
// var a = Math.round(user);
// var b = Math.floor(user);
// var c = Math.ceil(user);

// if(user > 0){
//     document.write("number : " + user+"<br/>"+"round off value : "  +a+"<br/>" +"floor value : " + b+"<br/>" +"ceil value : " + c);
// }else{
//     document.write("Enter Positive integer!");
// }

// Q2. 

// var user = +prompt('Enter a negative integer :','-00.00');
// var a = Math.round(user);
// var b = Math.floor(user);
// var c = Math.ceil(user);

// if(user < 0){
//     document.write("number : " + user+"<br/>"+"round off value : "  +a+"<br/>" +"floor value : " + b+"<br/>" +"ceil value : " + c);
// }else{
//     document.write("Enter Negative integer!");
// }

// Q3. 

// var a = +prompt('Enter a number :','Enter here...');
// var b = Math.abs(a);
// document.write('The absolute value of '+a+' is '+ b);

// Q 4.

// var a = Math.round(Math.random()*5)+1
// document.write(a)


// Q5. 

// var a = document.getElementById('container');
// function coin(){
//     var b = (Math.random(a)*1)+1;
//     var c = Math.round(b);
//     if( c === 2){
//         a.innerHTML = '<br/>'+c +'<br/>'+'random key value : Head';
//     }else{
//         a.innerHTML = '<br/>'+c +'<br/>'+'random key value : Tail';
//     }
// }

// Q6.

// var a = document.getElementById('container');
// function coin(){
//     var b = (Math.random(a)*99)+1;
//     var c = Math.round(b);
//     a.innerHTML = '<br/>'+c +'<br/>'+'random key value : Head';
// }

// Q7. 

// var user = prompt('Enter your weight in kilograms :');
// var a = parseInt(user);
// document.write("The weight of the user is "+a+" kilograms");

// Q8. 

// var secretNumb = 4;
// var user = +prompt('Enter a number between 1-10 :');
// if(user === secretNumb){
//     alert("woohoo! correct answer")
// }else{
//     alert("sorry! Try again")
// }

// CHAPTERS 31-34

// Q1.

// var date = new Date();
// document.write(date);

// Q2.

// var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var date = new Date();
// var monthIndex = date.getMonth();
// var month = monthNames[monthIndex];
// alert(month);

// Q3 

// var daysName = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// var date = new Date();
// var dayIndex = date.getDay();
// var day = daysName[dayIndex];
// alert(day);

// Q4. 

// var date = new Date();
// var day = date.getDay();
// if(day === 0 || day === 6){
//     document.write("It's Fun day");
// }

// Q5. 

// var currDate = new Date();
// var date = currDate.getDate();
//    if ( date >= 0 && date < 16){
//        alert('First fifteen days of the month');
//    }else{
//        alert('Last days of the month');
//    }

// Q6.

// var currentDate = new Date();
// var miilisecond = currentDate.getTime();
// var minutes = miilisecond/(1000*60);
// document.write("Current Date : "+currentDate+'<br/>'+
// "Elapsed Milliseconds since January 1, 1970 : "+miilisecond+'<br/>'+
// "Elapsed Minutes since January 1, 1970 : "+minutes+'<br/>');

// Q7. 

// var currDate = new Date();
// var hours = currDate.getHours();
// if (hours >= 1 && hours < 12) {
//     alert("It's A.M");
// } else if(hours >=12 && hours < 24) {
//     alert("It's P.M");
// }

// Q8.

// var ramdan = new Date('June 18, 2015');
// ramdanTime = ramdan.getTime();
// var currentDate = new Date();
// var now = currentDate.getTime();
// var minus = now - ramdanTime;
// var daysPast = (minus)/(1000*60*60*24);
// document.write( Math.floor(daysPast)+" days passed since June 18, 2015.");

// Q10. 

// var referenceDate = new Date('June 5, 2015');
// var startingDate = new Date('January 1, 2015');
// var variation = referenceDate - startingDate;
// var seconds = variation/(1000*60*60);

// document.write('On referencs date ' +referenceDate+' , '+seconds+
// ' seconds had passed since beginning of 2015');

// Q11. 

// var currentDate = new Date();
// var hour = (currentDate.getHours()-1);
// const d = new Date();
// d.setHours(hour);

// document.write('current date : '+currentDate+'<br/> 1 hour ago, it was '+d);

// Q12.

// var currentDate = new Date();
// var years = (currentDate.getFullYear()-100);
// var a = new Date();
// a.setFullYear(years)
// document.write('current date : '+currentDate+
// "<br/> 100 years back it was "+a);

// Q 13. 

// var user = prompt('Enter your age');
// var currentDate = new Date();
// var year = (currentDate.getFullYear()-user)

// document.write('Your age is  '+user+
// '<br/> Your birth year is  '+year);

// Q 14. 

// document.write("<div>");
// var numberUnits  = +prompt('Enter number of units');
// var a = numberUnits.toFixed(2)
// var perUnits  = 16;
// var lateSurcharges = 350;
// var amountPayable = numberUnits*perUnits;
// var b = amountPayable.toFixed(2)
// var grossAmount = amountPayable+lateSurcharges;
// var c = grossAmount.toFixed(2)
// document.write("<h1>K-Electric bill</h1>");
// document.write("<br/>Customer Name : ABC Customer");
// document.write("<br/>Current Month : February");
// document.write("<br/>Number of units : "+a);
// document.write("<br/>Charges per unit : "+perUnits);
// document.write("<br/><br/>Net Amount Payable (within Due Date) :"+b);
// document.write("<br/>Late Payment Surcharge :"+lateSurcharges);
// document.write("<br/>Gross Amount Payable (after Due Date) :"+c);
// document.write("</div>")