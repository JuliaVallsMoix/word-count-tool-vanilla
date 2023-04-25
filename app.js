document.querySelector('#btn').addEventListener('click', function () {
    console.log('Has hecho click!');
   const word = document.querySelector('#str').value;
   let result = word.length;
   document.querySelector('#output').textContent = 'El número de carácteres es ' + result;
});