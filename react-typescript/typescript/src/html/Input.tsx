type InputService = {
    inputed:string,
}&React.ComponentProps<'input'>

export const CustomInput = ({ ...props }: InputService) => {
    return (
        <div>
            <input type='text' value={props.inputed}  {...props} />
        </div>
    )
}