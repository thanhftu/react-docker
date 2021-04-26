import Button from './components/Button'
const Fib = ({fib, onDelete, text})=>{
    return (
        <div >
            <h3>{fib.Value}</h3>
            <Button fib={fib} onClick={onDelete} text={text}/>
        </div>
    )
}

export default Fib