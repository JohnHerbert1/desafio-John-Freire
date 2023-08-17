class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorTotal = 0.0;

       
        const itensComPrecos = {
            'cafe':3.00,
            'chantily':1.50,
            'suco':6.20,
            'sanduiche':6.50,
            'queijo':2.00,
            'salgado':7.25,
            'combo1':9.50,
            'combo2':7.50

        };

        if(itens.length === 0){
            return 'Não há itens no carrinho de compra!'
        }
        
        for(const item of itens){
            const [codigoItem,quantidade] = item.split(',');
            if(itensComPrecos[codigoItem]){
                valorTotal += itensComPrecos[codigoItem] * parseInt(quantidade);
            }
            else{
                return 'Item inválido!' + codigoItem;
            }

            if(isNaN(parseInt(quantidade))){ return 'Quantidade inválida'}
        
            if(codigoItem.trim() === "chantily"){chantily = true}
            if(codigoItem.trim() === "cafe"){ cafe = true}
            if(codigoItem.trim() === 'sanduiche'){sanduiche = true}
            if(codigoItem.trim() === 'queijo'){queijo = true}
         }
         
         if(!cafe && chantily || !sanduiche && queijo){ return 'Item extra não pode ser pedido sem o principal'}     

        const metodoDePagamentoValidos = ['credito','debito','dinheiro'];

        if(!metodoDePagamentoValidos.includes(metodoDePagamento)){
            return 'Forma de pagamento inválida!';
        }

        
        if(metodoDePagamento === 'credito') {valorTotal +=  0.5;}
        else if (metodoDePagamento === 'debito') {valorTotal += 0.1}
        

        return "R$:" + valorTotal.toFixed(2);
    }

}


export { CaixaDaLanchonete };
