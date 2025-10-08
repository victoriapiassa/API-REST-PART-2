import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

function manipuladorDeErro(erro, req, res, next)  {  

  if (erro instanceof mongoose.Error.CastError) {
   new RequisicaoIncorreta().enviarResposta(res);
   
 } else if (erro instanceof mongoose.Error.ValidationError) {
   const mensagensErro = Object.values(erro.errors)
   .map(erro => erro.message)
   .join("; ");
   
res.status(400).send({message: ` Os seguintes erros foram encontrados: ${mensagensErro}`});
 } else {
    new ErroBase().enviarResposta(res);
 }   
}

export default manipuladorDeErro;