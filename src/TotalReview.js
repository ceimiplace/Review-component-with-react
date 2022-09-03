export default function TotalReview({data,text,fallback}){
  if(data === 0){
    return <div>{fallback}</div>
  }
  return <div>{text}{data}</div>
}