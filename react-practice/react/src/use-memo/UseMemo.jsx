import React from 'react';
const MyComponent = React.memo((props) => {
    console.log('called');
    return(
        <div>
            <h1>hello,{props.name}</h1>
            <span>{props.message}</span>
        </div>
    )
});

export default function UseMemo(){
    const [count,setCount] = React.useState(0);
    return(
        <div>
            <button onClick={() => setCount(prevState => prevState + 1)}>Click</button>
            <span>Count:{count}</span>
            <MyComponent name='react' message='Happy Learning!' />
        </div>
    )
}