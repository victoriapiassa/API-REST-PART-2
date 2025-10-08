import ErrorBase from "./ErrorBase.js"

class RequisicaoIncorreta extends ErrorBase {
    constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
        super(mensagem, 400);
    }
}

export default RequisicaoIncorreta;