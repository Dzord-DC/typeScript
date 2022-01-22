export const getTodosByCount = (count:number) => {
  let i = 1;
  while(i<=count){
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
      .then(response => response.json())
      .then(json => console.log(json))
    i++
  }
  
}
