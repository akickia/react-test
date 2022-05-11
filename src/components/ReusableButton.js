const ReuseableButton = (props) => {
  return ( 
  <div className="container reuse-btn">
    <button><a href={props.link}>{props.name}</a></button>
    </div>
  )
} 

export default ReuseableButton
