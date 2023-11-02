function Uppercase(props) {
    const textInserido = props.children
    const textUppercase = textInserido.toUpperCase()
    return (<div>{textUppercase}</div>)
}

export default Uppercase