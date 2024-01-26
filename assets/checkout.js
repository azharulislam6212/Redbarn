const para = document.createElement("a");
para.setAttribute('href','/collections/all');
para.innerHTML = 'Continue Shopping';

const element = document.getElementsByClassName("step__footer");
element[0].appendChild(para);