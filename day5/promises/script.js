const response = window.fetch('https://dummyjson.com/products');
console.log('Response 1', response)
console.log('Response 2', response)

response.then((response) => {
    console.log('response successfully  loaded!!')
    const pr2 = response.json()
    pr2.then((data) => {
        console.log('data: ')
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })
}).catch((err) => {
    console.log('Error: ')
    console.log(err.message)
})

console.log('-----------------------------------------------------')


const res = async () => {
    try {
        const r = await window.fetch('https://dummyjson.com/products');
        const data = await r.json();
        console.log('Async Await way data : ', data);
    } catch (e) {
        console.log(e);
    }
}

res();