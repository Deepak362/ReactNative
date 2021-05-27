const API = 'https://localhost:44320/Home/PostDD'
export const signup=Register=>{
    return fetch(`${API}`,{
        method:"POST",
        headers:{
             "Content-Type":"application/json"
            },
        body: JSON.stringify(Register)
       
       
    }
    )
    .then(response=>{ return response.json()})
    .catch(err=>console.log(err))
    
};