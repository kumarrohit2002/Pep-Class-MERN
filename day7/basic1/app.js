console.log('hello');


// const root=document.getElementById('root');

// const ulELe=document.createElement('ul');
// const liEle1=document.createElement('li');
// liEle1.innerText='item 1'
// const liEle2=document.createElement('li')
// liEle2.innerText='item 1'

// ulELe.appendChild(liEle1);
// ulELe.appendChild(liEle2);

// root.appendChild(ulELe);


// --------------------------------------------------------------
// using react


// const item1 = React.createElement('li', {}, 'Item 1');
// console.log(item1)
// const item2 = React.createElement('li', {}, 'Item 2');
// const list = React.createElement('ul', {}, [item1, item2]);


// const root = document.getElementById('root');
// const reactRoot=ReactDOM.createRoot(root);
// reactRoot.render(list);








// ---------------------------------------------------------------------





const item2=<li>item 2</li>

const list=(
        <ul>
            <li>Item 1</li>
            {item2}
        </ul>
);

const root = document.getElementById('root');
const reactRoot=ReactDOM.createRoot(root);
reactRoot.render(list);

