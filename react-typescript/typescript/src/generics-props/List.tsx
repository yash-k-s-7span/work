// type ListProps = {
//     items:string[] | number[];
//     onClick:(value:string | number) => void;
// }
type ListProps<T> = {
    items:T[];
    onClick:(value:T) => void;
    render:(it:T) => React.ReactNode;
}
export const List = <T extends {}>({items,onClick,render}:ListProps<T>) => {
    return(
        <div>
            <h1>List of items</h1>
            {items.map((item,index) => (
                <div key={index} onClick={() => onClick(item)}>
                       
                    <h2>{render(item)}</h2>
                </div>
            ))}
        </div>
    )
}
