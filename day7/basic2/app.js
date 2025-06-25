const domRoot = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(domRoot);

const Card1 =(obj)=>{ 
    return(
        <div className="card">
            <h1>{obj.title}</h1>
            <p>Description</p>
        </div>
)}
const Card2 = (
    <div className="card">
        <h1>Title 2</h1>
        <p>Description</p>
    </div>
)
const Card3 = (
    <div className="card">
        <h1>Title 3</h1>
        <p>Description</p>
    </div>
)

const card = () => {
    return (
        <div>app</div>
    )
}

const Container = (
    <div>
        {Card1({title:'Title'})}
        <Card1 title='Notice...' />
        {Card1({title:'Warning!'})}
    </div>
)

reactRoot.render(
    Container
)


