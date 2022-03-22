function  fetchRequest(){
    let option={
        method:"GET",
    }
    let p=fetch("url",option);
    let p2=p.then((response=>{
        return response.json();
    }));
    p2.then( json=>{

    })
}
