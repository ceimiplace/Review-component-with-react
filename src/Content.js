export default function Content(props){
  if(props.condition1 || props.condition2 || props.condition3){return <>{props.children}</>}
  else{
    return <div>No content to show</div>
  }
}