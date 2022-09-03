export default function Average({data,text,fallback}){console.log(data)
  if(Number.isNaN(data) || data<=0){
    return <div>{fallback}</div>
  }
  
    return <div>{text}{`${(data*100).toFixed(2)}%`}</div>
  }
  