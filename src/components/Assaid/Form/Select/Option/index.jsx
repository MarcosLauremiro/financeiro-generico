export const Option = ({ value, text, ...rest}) => {
    return(
        <option className="text-1-style" value={value} {...rest}>{text}</option>
    )
}