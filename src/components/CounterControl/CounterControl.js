const CounterControl = (ctr) =>{
  
  const {clicked,label} = ctr
    return(
    <button onClick = {clicked}>{label}</button>
    )
}
export default CounterControl