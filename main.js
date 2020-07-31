var pinGenerator = document.getElementById('pin-generator');
var pinInput = document.getElementById('pin-input');
var output = document.getElementById('output');

pinGenerator.addEventListener('click', function(){
    var pinNumber = Math.ceil(Math.random() * 9999);
    pinInput.value = pinNumber;
    document.getElementById('match').style.display='none';
    document.getElementById('not-match').style.display='none';
});

var number = document.querySelectorAll('.calc-button-row .button');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(event) {
      var element = event.target.innerText;
      var input = element;
      if(input !== '<' && input !== 'C'){
        document.getElementById('output').value += input;
      }
      if(input == '<'){
        output.value=output.value.slice(0,-1);
      }
      if(input == 'C'){
        document.getElementById('output').value = '';
      }
    });
}

var submit = document.getElementById('submit');
submit.addEventListener('click', function(){
   if(pinInput.value == output.value){
       document.getElementById('match').style.display='block';
   }else if(pinInput.value !== output.value){
    document.getElementById('not-match').style.display='block';
   }
   pinInput.value = '';
   output.value ='';
});





