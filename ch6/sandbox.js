// // get an element by ID
// const title= document.getElementById('page-title');
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// // get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');
// //para.innerText += " ninjas world!";
// //console.log(para.innerText);
// const paras =document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText  += "newwwww";
// });

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  } else if(p.textContent.includes('success')) {
    p.classList.add('success');
  }
});