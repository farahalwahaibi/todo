import axios from 'axios';

//export useAjax
export default function useAjax (obj){
    //get method
    async function getAjax(url){
        console.log(axios.get(url));
        return await axios.get(url)
    }
    //post method
    async function postAjax(url, body){
        return await axios.post(url, body)
    }
    //put method
    async function putAjax(url, body){
        return await axios.put(url, body);
    }
    //delete method
    async function deleteAjax(url, id){
        await axios.delete(url)
    }
 
    
    //check if the method is get
    if(obj.method === 'get'){
        return getAjax(obj.url, obj.body);    
    }
    //check if the method is post
    else if(obj.method ==='post'){
        return  postAjax(obj.url, obj.body);
    }
    //check if the method is put
    else if(obj.method ==='put'){
        putAjax(obj.url, obj.body)
    }
    //check if the method is delete
    else if(obj.method === 'delete'){
        deleteAjax(obj.url )
    }

    
 return {
     getAjax,
     putAjax,
     deleteAjax,
     postAjax,
 }

}


