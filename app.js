
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("closeBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let info=[
    {
        Name :  "Kalash",
        Contact : "9182328431",
        Address  : "Dwarka Sector-3 , Newdelhi-17"
    }
    ,
    {
        Name :  "Vijay Kumar",
        Contact : "9282882871",
         Address  :"Vasant kunj , west delhi"
    }
    ,
    {
        Name :   "Harish Nagpal",
        Contact : "9182722221",
         Address  :"rohtak , haryana"
        }
    ,
        {  Name : "Komal Yadav",
        Contact : "9182712992",
          Address  :"ranchi , jharkhand"
        } 
        ,
    {
        Name : "Satish Yadav",
        Contact : "9387827388",
         Address  :"azamgarh , Uttar Pradesh"
        }
    ,
    {
        Name :  "Manish Gupta",
        Contact : "9827728473",
         Address  : "kalka ji , Newdelhi-33"
        }
    ,
    {
        Name :   "Shivam Rana",
        Contact : "9182897328",
         Address  :"hauz khas , Newdelhi-12"
        }
    ,
      {   Name :   "Kunal Meena",
      Contact :"9181881999",
        Address  : "lucknow , Uttar Pradedh"
        }
    ,
    {
        Name :  "Avinash Verma",
        Contact : "9182712871",
         Address  : "Najafgarh , Newdelhi-43"
        }
    
]
//console.log(info[7].Name);
var img = document.getElementsByClassName("image");

 function changemodal(i){
    var det = document.getElementsByClassName("detail");
    det[0].innerText = "Name : "+ info[i].Name;
    det[1].innerText= "Contact : " + info[i].Contact;
    det[2].innerText= "Address : "+ info[i].Address;
 } 
   
img[0].onclick = function(){
    changemodal(0);
    //console.log(det[0].innerText);
    modal.style.display = "block";
}
img[1].onclick = function(){
  changemodal(1);
  //console.log(det[0].innerText);
  modal.style.display = "block";
}
img[2].onclick = function(){
  changemodal(2);
  //console.log(det[0].innerText);
  modal.style.display = "block";
}
img[3].onclick = function(){
  changemodal(3);
  //console.log(det[0].innerText);
  modal.style.display = "block";
}
img[4].onclick = function(){
  changemodal(4);
  //console.log(det[0].innerText);
  modal.style.display = "block";
}
img[5].onclick = function(){
  changemodal(5);
  //console.log(det[0].innerText);
  modal.style.display = "block";
}
img[6].onclick = function(){
  changemodal(6);
  //console.log(det[0].innerText);
  modal.style.display = "block";
}
img[7].onclick = function(){
  changemodal(7);
  //console.log(det[0].innerText);
  modal.style.display = "block";
}
img[8].onclick = function(){
  changemodal(8);
  //console.log(det[0].innerText);
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

btn.onclick = function() {
  modal.style.display = "none";
}
span.onclick = function() {
    modal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}