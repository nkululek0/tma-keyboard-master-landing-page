import './Button.css'

export function Button (props) {
    const { children, buttonType } = props
    const cssClasses = `${ buttonType} px-3 py-2 rounded-md font-[600] uppercase`

    return (
        <button className={ cssClasses }>{ children }</button>
    )
}