// Chapter No 43-48

// Q1
// function here(e){
//    alert("Pakistan Zindabad")
// }


// Q2
// function myImg(img){
//     if(img == 1){
//         alert("Tecno Mobile is a Chinese mobile phone manufacturer based in Shenzhen,")
//     }
//     else if(img == 2){
//         alert("Infinix Mobile is a Hong Kong-based smartphone company founded in 2013,")
//     }
//     else if(img == 3){
//         alert("Samsung Galaxy is a series of computing and mobile computing devices that are designed")
//     }
//     else if(img == 4){
//         alert("Huawei is the second-biggest smartphone maker in the world,")
//     }
// }


// Q3
// function deleteRow(row){
//     document.getElementById('myTable').deleteRow(0);
//      row.parentNode.parentNode.rowIndex;
//  }


// Q4
// function myCar(c,element){
//     if(c == 1){
//         element.src="./images/car2.jpg"
//     }
//     else{
//         element.src="./images/car1.jpg"
//     }
// }


// Q5
// var count = 0;
// function counter(){
//     var val = document.getElementById("count")
//     count++;
//     // console.log(counter);
//     val.innerHTML = count;
// }

// function reset(){
//     var val = document.getElementById("count")
//      count = 0;
//     val.innerHTML = count;
// }


// Chapter No 49-52

// Q1
// function myform(){
//     var email = document.getElementById("email")
//     var userEmail = document.getElementById("useremail")
//     var psw = document.getElementById("psw")
//     var userPsw = document.getElementById("userpsw")

//     userEmail.innerHTML = email.value;
//     userPsw.innerHTML = psw.value;
// }


// Q2
// function para(){
//    var newPara = document.getElementById("myPara")
//    var bigPara = document.getElementById("bigPara")
    
//    newPara = bigPara.style.display = "block";

// }


// Q3
// function addRow(tableID) {

//     var table = document.getElementById(tableID);

//     var rowCount = table.rows.length;
//     var row = table.insertRow(rowCount);

//     var cell1 = row.insertCell(0);
//     var element1 = document.createElement("input");
//     element1.type = "checkbox";
//     element1.name="chkbox[]";
//     cell1.appendChild(element1);

//     var cell2 = row.insertCell(1);
//     cell2.innerHTML = rowCount + 1;

//     var cell3 = row.insertCell(2);
//     var element2 = document.createElement("input");
//     element2.type = "text";
//     element2.name = "txtbox[]";
//     cell3.appendChild(element2);
// }

// function deleteRow(tableID) {
//     try {
//     var table = document.getElementById(tableID);
//     var rowCount = table.rows.length;

//     for(var i=0; i<rowCount; i++) {
//         var row = table.rows[i];
//         var chkbox = row.cells[0].childNodes[0];
//         if(null != chkbox && true == chkbox.checked) {
//             table.deleteRow(i);
//             rowCount--;
//             i--;
//         }


//     }
//     }catch(e) {
//         alert(e);
//     }
// }










