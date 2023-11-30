export const Label = ({ forLabel, text }) => {
    return(
        <label className="text-1-style" htmlFor= { forLabel }> {text} </label>
    )
}