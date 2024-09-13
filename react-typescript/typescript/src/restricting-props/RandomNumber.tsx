type RandomNumberType = {
    value:number
}
type IsPositiveNumber = RandomNumberType & {
    isPositive:boolean
    isNegative?:never
    zero?:never
}
type IsNegativeNumber = RandomNumberType & {
    isNegative:boolean
    isPositive?:never
    zero?:never
}
type Zero = RandomNumberType & {
    zero:boolean
    isPositive?:never
    isNegative?:never
}


type RandomNumberProps  = IsPositiveNumber | IsNegativeNumber | Zero

export const RestrictingProps = ({value,isPositive,isNegative,zero}:RandomNumberProps) => {
    return(
        <div>
            {value} {isPositive && 'isPositive'} {isNegative && 'isNegative'} {zero && 'zero'}
        </div>
    )
}