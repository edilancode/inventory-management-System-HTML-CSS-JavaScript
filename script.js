     // Verify inputs values
function validateProd(nomProd, codProd, quantProd){
    let nome = document.getElementById('nomProd').value;
    let codigo = document.getElementById('codProd').value;
    let quantidade = document.getElementById('quantProd').value;

    if (nome =="" | codigo == "") {

        alert("O campo nome ou código do produto está vazio, por favor preencha todos os campos!")
    } else {
        registerProd(nome, codigo, quantidade);
    }
}

function registerProd(produto, codig, quant) {
    let newProduct = {nome:produto, codigo:codig, quantidade:quant};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null)
            produtos = [];
        else 
            produtos = JSON.parse(produtos);
            produtos.push(newProduct);
            localStorage.setItem("produtos" ,JSON.stringify(produtos));
            stockUpdate("totStock");
        }
        
        alert("Foram cadastrados "+quant+" unidades do produto "+produto+"!");

        location.reload();
}

function stockUpdate(idField) {
    localStorage.setItem("totStock",++document.getElementById(idField).innerHTML);
}

function totalStockLoad(idField) {
        if (typeof(Storage) !== "undefined") {
        let totalStock = localStorage.getItem("totStock");
             if (totalStock == null) totalStock = 0;
            document.getElementById(idField).innerHTML = totalStock;
        }
}

function stockList() {
    if (typeof(Storage) !== undefined) {
        let products = localStorage.getItem("produtos");
        document.write("<h1>Estoque</h1>")
    if (products == null) 
        document.write("<h3>Ainda não há nenhum item no estoque</h3>");
     else {
        products = JSON.parse(products);
        products.forEach(products => {
            document.write("<ul>");
            document.write("<li>Nome do produto: "+products.nome+"</li>");
            document.write("<li>Código do produto: "+products.codigo+"</li>");
            document.write("<li>Quantidade no estoque: "+products.quantidade+" </li>");
            document.write("</ul>")
        });

        }
    }
}
    
