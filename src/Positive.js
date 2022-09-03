export default function Positive({data,text,fallback}){
  if(data<=0 || Number.isNaN(data)){
    return <div>{fallback}</div>
  }
  return <div>{text}{data.toFixed(2)}%</div>
}