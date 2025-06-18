// console.log(window)


// console.dir(window.document.children[0].children[1].children[0].innerText)


// --------------------------------------------------------------------

//1. document.getElementsByTagName

// const heading=document.getElementsByTagName('h3')
// console.log(heading)

// const header=document.getElementsByTagName('header')
// console.log(header)

// heading[0].innerHTML='Hello Rishabh'
// heading[1].innerHTML='Hello Rohit'

// ---------------------------------------------------------------------------
// 2.document.getElementsByClassName()

const elements = document.getElementsByClassName('card')
elements[0].style.color = 'brown'

// ---------------------------------------------------------------------------
// 3.document.getElementsById()

const text = document.getElementById('text-1')
text.style.backgroundColor = 'lime'


// ---------------------------------------------------------------------------
// 4.document.querySelectorAll()  //select all tag,class,id,etc..

const textPara = document.querySelectorAll('.text-brown')
textPara[0].style.backgroundColor = 'lime'


// ---------------------------------------------------------------------------
// 5.document.querySelector()  // return first Element or null 

const texth3 = document.querySelector('h3')
texth3.style.backgroundColor = 'pink'


// ---------------------------------------------------------------------------
// 5.document.





