var frm = document.getElementById("format");
frm.onsubmit=function() {
    var n1 = document.getElementById("number").value;
    var result = document.getElementById("answer");
    var i, multiply= 1;
    for (i=1;i<=n1;i++) {
        multiply=multiply*i;
    } if (n1 == "") {
        alert("Please Enter Number!\nTo Get Answer ");
      }else{
          alert("Got Answer")
      }
    answer.innerHTML = multiply;
    return false;
  console.log("Thanks \n -Renz");
} 
