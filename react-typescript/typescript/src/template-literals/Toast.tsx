type Horizontal = 'left' | 'right' | 'center';
type Vertical = 'top' | 'center' | 'bottom'
type ToastProps = {
    position:Exclude<`${Horizontal}-${Vertical}`,''> | 'center'
}

export const Toast = ({position}:ToastProps) => {
    return(
        <div>Toast notification at {position}</div>
    )
}