

let validarEmail=( email )=> {
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( expr.test(email) )
        return true;
}
export default validarEmail;