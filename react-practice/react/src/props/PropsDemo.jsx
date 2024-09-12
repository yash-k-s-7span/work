const PropsDemo = (props) => {
    const list = ['C','Java','JavaScript','Android','React','Tailwind']
    return(
        <div>
            {/* Hello {props.title} */}
            {list.map((item,index) => {
                return(

                <div key={index}>
                    <h2>{item}</h2>
                </div>  
                )
            })}
        </div>
    )
}
export default PropsDemo;
