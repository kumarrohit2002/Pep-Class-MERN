


const domRoot = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(domRoot);

const arr = [
    { name: 'prabjyot', score: 34 },
    { name: 'Rohit', score: 43 },
    { name: 'Ankita', score: 23 },
    { name: 'pawan', score: 45 },
    { name: 'Ravan', score: 34 },
    { name: 'Raju', score: 32 },
    { name: 'Adam', score: 34 },
]

const styleObj={
    color:'red',
    fontSize:'30px'
}

const Card = (props) => {
    const {name,score}=props;
    return (
        <div className="card">
            <h2 style={styleObj}>Name:{name}</h2>
            <p>Score:{score}</p>
        </div>
    )
}


const App = () => {
    return (
        <div>
            {
                arr.map((e, idx) => <Card key={idx} name={e.name} score={e.score}/>)
            }
        </div>
    )
}


reactRoot.render(App());





