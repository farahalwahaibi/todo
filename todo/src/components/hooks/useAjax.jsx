//import axios
import axios from 'axios';
//use ajax function
function useAjax(obj) {
    return axios[obj.method](obj.url, obj.body)
}

//export useAjax
export default useAjax ;


