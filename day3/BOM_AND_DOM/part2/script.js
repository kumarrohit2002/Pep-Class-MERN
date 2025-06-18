
const parent=document.getElementById('root')
const title=document.createElement('h1');

title.innerHTML='Added TItle 1'
parent.append(title);

const title2=document.createElement('h1');

title2.innerHTML='Added TItle 2'
title2.style.textDecoration='underline'
title2.style.textDecorationColor='red'
title2.style.color='blue'



parent.append(title2);