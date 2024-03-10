
import { md5 } from 'js-md5';


 function handleToken(){
    let timeshtamp = new Date().toISOString().split('T')[0].replaceAll('-', '')
    return md5("Valantis_" + timeshtamp)
}

export default  handleToken
