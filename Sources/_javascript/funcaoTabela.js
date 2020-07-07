/**
 *  Construtor da classe Item
 */
class Item {
    constructor(key, codigo, nome, tipo, tier, tipoIND, tierIND, quantidade, valor) {

        this.key = key;
        this.codigo = codigo;
        this.nome = nome;
        this.tipo = tipo;
        this.tier = tier;
        this.tipoIND = tipoIND;
        this.tierIND = tierIND;
        this.quantidade = quantidade
        this.valor = valor
    }
}

/* ++++++++++++ Alterar comboBox tiers ++++++++++++ */

var tipoComb = document.querySelector("#comboBox")
tipoComb.addEventListener("change", () => {
    var tier = document.querySelector("#tiers")

    if (tipoComb.selectedIndex == 0) {
        tier.innerHTML = `
        <label for="idtier">Tier de item</label>
        <select class="form-control" id="comboBoxT" disabled>
        <option value="T1">T1</option>
        <option value="T2">T2</option>
        <option value="T3">T3</option>
        <option value="T4">T4</option>
        <option value="T5">T5</option>
        <option value="Material">Material</option>
        </select>`
    } else {
        tier.innerHTML = `
        <label for="idtier">Tier de item</label>
        <select class="form-control" id="comboBoxT">
        <option value="Branco">Branco</option>
        <option value="Verde">Verde</option>
        <option value="Azul">Azul</option>
        <option value="Amarelo">Amarelo</option>
        <option value="Vermelho">Vermelho</option>
        <option value="Roxo">Roxo</option>
        </select>`
    }
})

/* Verificar conteudo material no comboBox tier */
var tierComb = document.querySelector("#comboBoxT")
tierComb.addEventListener("change", () => {

    let itemSelect = tierComb.options
    let ind = tierComb.selectedIndex
    let itemSelecionado = itemSelect[ind].value

    if (itemSelecionado == "Material") {

        document.querySelector("#quantMat").disabled = false
        document.querySelector("#valorMat").disabled = false

        document.querySelector("#quantMat").value = 1
        document.querySelector("#valorMat").value = 1
    } else {
        document.querySelector("#quantMat").disabled = true
        document.querySelector("#valorMat").disabled = true
        document.querySelector("#quantMat").value = null
        document.querySelector("#valorMat").value = null
    }
})

/* *********************** Verifica Quantidade de materiais ************************** */

var inputNumMaterial = document.querySelector("#quantMat")
var inputNumMaterialValor = document.querySelector("#valorMat")

inputNumMaterial.addEventListener("change", () => {

    var comp = inputNumMaterial.value

    if (comp <= 0) {
        alert("Não é possível inserir quantidade negativa ou igual a 0")
        inputNumMaterial.value = 1
    }
    if (comp > 9999) {
        alert("O valor máximo é 5000")
        inputNumMaterial.value = 5000
    }

})

inputNumMaterialValor.addEventListener("change", () => {

    var comp = inputNumMaterialValor.value

    if (comp <= 0) {
        alert("Não é possível inserir um valor negativo ou zerado")
        inputNumMaterialValor.value = 1
    }

})

/* ++++++++++++  VARIÁVEIS GLOBAIS ++++++++++++ */

var tiers = ['T1', 'T2', 'T3', 'T4', 'T5', 'Material']

/*************************** Variaveis Banco de Dados  ***************************/
const dbRef = firebase.database().ref();
const itemsRefT1 = dbRef.child(tiers[0]); //<--- Cria uma "tabela" com o nome funcionarios 
const itemsRefT2 = dbRef.child(tiers[1]); //<--- Cria uma "tabela" com o nome funcionarios 
const itemsRefT3 = dbRef.child(tiers[2]); //<--- Cria uma "tabela" com o nome funcionarios 
const itemsRefT4 = dbRef.child(tiers[3]); //<--- Cria uma "tabela" com o nome funcionarios 
const itemsRefT5 = dbRef.child(tiers[4]); //<--- Cria uma "tabela" com o nome funcionarios 
const itemsRefMaterial = dbRef.child(tiers[5]); //<--- Cria uma "tabela" com o nome funcionarios 


/********** Atualiza os items da tabela ******************/


/******************* Filtro *****************/



var filtro = document.querySelector("#idFiltro")
filtro.addEventListener("change", () => {

    let itemFiltro = filtro.options
    let ind = filtro.selectedIndex
    filtroSelecionado = itemFiltro[ind].value

    if (filtroSelecionado == "Todos") {
        document.getElementById("itmT1").style.display = "block"
        document.getElementById("itmT2").style.display = "block"
        document.getElementById("itmT3").style.display = "block"
        document.getElementById("itmT4").style.display = "block"
        document.getElementById("itmT5").style.display = "block"
        document.getElementById("itmMaterial").style.display = "block"

    }
    if (filtroSelecionado == "T1") {
        document.getElementById("itmT1").style.display = "block"
        document.getElementById("itmT2").style.display = "none"
        document.getElementById("itmT3").style.display = "none"
        document.getElementById("itmT4").style.display = "none"
        document.getElementById("itmT5").style.display = "none"
        document.getElementById("itmMaterial").style.display = "none"
    }
    if (filtroSelecionado == "T2") {
        document.getElementById("itmT1").style.display = "none"
        document.getElementById("itmT2").style.display = "block"
        document.getElementById("itmT3").style.display = "none"
        document.getElementById("itmT4").style.display = "none"
        document.getElementById("itmT5").style.display = "none"
        document.getElementById("itmMaterial").style.display = "none"
    }
    if (filtroSelecionado == "T3") {
        document.getElementById("itmT1").style.display = "none"
        document.getElementById("itmT2").style.display = "none"
        document.getElementById("itmT3").style.display = "block"
        document.getElementById("itmT4").style.display = "none"
        document.getElementById("itmT5").style.display = "none"
        document.getElementById("itmMaterial").style.display = "none"
    }
    if (filtroSelecionado == "T4") {
        document.getElementById("itmT1").style.display = "none"
        document.getElementById("itmT2").style.display = "none"
        document.getElementById("itmT3").style.display = "none"
        document.getElementById("itmT4").style.display = "block"
        document.getElementById("itmT5").style.display = "none"
        document.getElementById("itmMaterial").style.display = "none"
    }
    if (filtroSelecionado == "T5") {
        document.getElementById("itmT1").style.display = "none"
        document.getElementById("itmT2").style.display = "none"
        document.getElementById("itmT3").style.display = "none"
        document.getElementById("itmT4").style.display = "none"
        document.getElementById("itmT5").style.display = "block"
        document.getElementById("itmMaterial").style.display = "none"
    }
    if (filtroSelecionado == "Material") {
        document.getElementById("itmT1").style.display = "none"
        document.getElementById("itmT2").style.display = "none"
        document.getElementById("itmT3").style.display = "none"
        document.getElementById("itmT4").style.display = "none"
        document.getElementById("itmT5").style.display = "none"
        document.getElementById("itmMaterial").style.display = "block"
    }


})


/* ++++++++++++ REGRAS DE NEGÓCIO +++++++++++++ */

/*
    Salva e atualiza os items na tabela
*/

/*
    Peço perdão professor, mas não encontrei nenhum outro método de atualizar o valor da referência,
    então criei mais 4 referencias.
*/

/************************************ Items T1 ****************************************/
{

    var todosItems = []
    var indiceItemTabela = 1
    var botaoSalvar = document.querySelector("#salvar")
    var itemEdicao = null
    var rowEdit = null

    itemsRefT1.on("child_added", snap => {
        let f = snap.val();
        console.log(f)
        f.key = snap.key;
        todosItems.push(f);
        RegistroNaTabela(f);
    });


    botaoSalvar.addEventListener("click", () => {

        var comboTier = document.querySelector("#comboBoxT")
        var itmTo = comboTier.options
        var indTo = comboTier.selectedIndex
        var varificaTier = itmTo[indTo].value

        if (varificaTier == 'T1') {
            if (itemEdicao == null) {

                let codigo = document.querySelector("#idCodigo").value
                if (verificaCodigo(codigo) == null) {

                    var items = new Item()

                    comboBox = document.querySelector("#comboBox")
                    itm = comboBox.options
                    ind = comboBox.selectedIndex

                    comboBoxT = document.querySelector("#comboBoxT")
                    itmT = comboBoxT.options
                    indT = comboBoxT.selectedIndex

                    items.codigo = document.querySelector("#idCodigo").value
                    items.nome = document.querySelector("#idNome").value
                    items.tipo = itm[ind].value
                    items.tipoIND = ind

                    items.tier = itmT[indT].value
                    items.tierIND = indT
                    console.log(itmT[indT].value)
                    console.log(indT)

                    itemsRefT1.push({
                        "codigo": items.codigo,
                        "nome": items.nome,
                        "tipo": items.tipo,
                        "tier": items.tier,
                    });

                    console.log(items)

                    // todosItems.push(items)
                    //RegistroNaTabela(items)
                    LimparFormulario()

                    alert(items.nome + " foi cadastrado(a) com sucesso!")
                } else {
                    alert("Não é possível cadastrar items com o mesmo código ou nome!")
                }

            } else {

                itemEdicao.nome = document.getElementById("idNome").value
                comboBox = document.querySelector("#comboBox")
                itm = comboBox.options
                ind = comboBox.selectedIndex

                comboBoxT = document.querySelector("#comboBoxT")
                itmT = comboBoxT.options
                indT = comboBoxT.selectedIndex

                itemEdicao.tipo = itm[ind].value
                itemEdicao.tier = itmT[indT].value

                itemsRefT1.child(itemEdicao.key).update({
                    "nome": itemEdicao.nome,
                    "tipo": itemEdicao.tipo,
                    "tier": itemEdicao.tier,
                });

                setStatusCadastroGUI();
                LimparFormulario()
                itemEdicao = null;
                alert("Item #" + itemEdicao.codigo + " Atualizado! ");

            }
        }
    })

    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: codigo(linha:83)
    */
    function verificaCodigo(codigo) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == codigo) {
                return todosItems[i];
            }
        }
        return null;
    }
    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: nome(linha:84)
    */
    function verificaNome(nome) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].nome == nome) {
                return todosItems[i];
            }
        }
        return null;
    }


    /*
        habilita a edição de um item da tabela

        Parametros: row e items
    */
    function editarItem(row, items) {
        itemEdicao = items;
        editarItemGUI(row, itemEdicao);
    }


    /*++++++++++++++++++++++++++ Regras da GUI ++++++++++++++++++++++++++*/

    /* 
        Limpa o conteúdo que foi digitado no formulário
    */
    function LimparFormulario() {
        document.querySelector("#formCadastro").reset()
    }

    /* 
        Remove um item da tabela

        Parametros: rowIndex e items
     */
    function removerItem(rowIndex, items) {
        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == items.codigo) {
                todosItems.splice(i, 1);
            }
        }

        itemsRefT1.child(items.key).remove();

        removerItemGUI(rowIndex)
    }
    /*
        Insere o conteúdos que foram digitados pelo usuário na tabela
        
        Parametros: items
    */
    function RegistroNaTabela(items) {

        tabela = document.querySelector("#idItemsTableT1")
        var linha = tabela.insertRow()
        var endereco = linha.insertCell(0)
        var codigo = linha.insertCell(1)
        var nome = linha.insertCell(2)
        var tipo = linha.insertCell(3)
        var tier = linha.insertCell(4)
        var botaoRemover = linha.insertCell(5)
        var botaoEditar = linha.insertCell(6)
        endereco.innerHTML = "|"
        codigo.innerHTML = items.codigo
        nome.innerHTML = items.nome
        tipo.innerHTML = items.tipo
        tier.innerHTML = items.tier
        addBotoesEditarDeletar(botaoRemover, botaoEditar, items)

    }

    /* 
       Funcao Adiciona Botoes na Linha da Tabela

       Parametros: botaoRemover,botaoEditar e Funcionario
    */
    function addBotoesEditarDeletar(botaoRemover, botaoEditar, items) {

        var btnRemover = document.createElement("button")
        btnRemover.className = "form-control"
        btnRemover.textContent = "Remover"
        btnRemover.name = "btnRemover"
        btnRemover.onclick = () => {
            removerItem(botaoRemover.parentNode.rowIndex, items)
        };
        botaoRemover.appendChild(btnRemover)
        var btnEditar = document.createElement("button")
        btnEditar.className = "form-control"
        btnEditar.textContent = "Editar"
        btnEditar.name = "btnEditar"
        btnEditar.onclick = () => {
            editarItem(botaoEditar.parentNode, items)
        };
        botaoEditar.appendChild(btnEditar)
    }

    /*
       Ajusta a interface grafica para o status de edição de um item

       Parametros: row e itemEdicao
    */
    function editarItemGUI(row, itemEdicao) {

        var auxind = itemEdicao.tipoIND;

        document.getElementById("idCodigo").value = itemEdicao.codigo;
        document.getElementById("idNome").value = itemEdicao.nome;
        document.getElementById("comboBox").selectedIndex = auxind;
        document.getElementById("comboBox").disabled = true;
        document.getElementById("idCodigo").disabled = true;
        document.getElementById("comboBoxT").disabled = true;
        document.getElementById("idStatus").innerHTML = "Editando item #" + itemEdicao.codigo;
        rowEdit = row;
        let botoesRemover = document.getElementsByName("btnRemover");
        console.log(botoesRemover);
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = true;
        }
    }
    /*
       Ajusta a interface grafica para o status de Cadastro de um novo item
    */
    function setStatusCadastroGUI() {

        rowEdit.cells[2].innerHTML = itemEdicao.nome;


        document.getElementById("idCodigo").disabled = false;
        document.getElementById("comboBox").disabled = false;
        document.getElementById("comboBoxT").disabled = false;
        let botoesRemover = document.getElementsByName("btnRemover");
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = false;
        }
        document.getElementById("idStatus").innerHTML = "Novo Item";
        rowEdit = null;
    }
    /*
       Função que remove uma linha desejada da tabela
    */
    function removerItemGUI(rowIndex) {
        document.getElementById("idItemsTableT1").deleteRow(rowIndex);

    }
}

/************************************ Items T2 ****************************************/
{

    var todosItems = []
    var indiceItemTabela = 1
    var botaoSalvar = document.querySelector("#salvar")
    var itemEdicao = null
    var rowEdit = null

    itemsRefT2.on("child_added", snap => {
        let f = snap.val();
        console.log(f)
        f.key = snap.key;
        todosItems.push(f);
        RegistroNaTabela(f);
    });


    botaoSalvar.addEventListener("click", () => {

        var comboTier = document.querySelector("#comboBoxT")
        var itmTo = comboTier.options
        var indTo = comboTier.selectedIndex
        var varificaTier = itmTo[indTo].value

        if (varificaTier == 'T2') {
            if (itemEdicao == null) {

                let codigo = document.querySelector("#idCodigo").value
                if (verificaCodigo(codigo) == null) {

                    var items = new Item()

                    comboBox = document.querySelector("#comboBox")
                    itm = comboBox.options
                    ind = comboBox.selectedIndex

                    comboBoxT = document.querySelector("#comboBoxT")
                    itmT = comboBoxT.options
                    indT = comboBoxT.selectedIndex

                    items.codigo = document.querySelector("#idCodigo").value
                    items.nome = document.querySelector("#idNome").value
                    items.tipo = itm[ind].value
                    items.tipoIND = ind

                    items.tier = itmT[indT].value
                    items.tierIND = indT
                    console.log(itmT[indT].value)
                    console.log(indT)

                    itemsRefT2.push({
                        "codigo": items.codigo,
                        "nome": items.nome,
                        "tipo": items.tipo,
                        "tier": items.tier,
                    });

                    console.log(items)

                    // todosItems.push(items)
                    //RegistroNaTabela(items)
                    LimparFormulario()

                    alert(items.nome + " foi cadastrado(a) com sucesso!")
                } else {
                    alert("Não é possível cadastrar items com o mesmo código ou nome!")
                }

            } else {

                itemEdicao.nome = document.getElementById("idNome").value
                comboBox = document.querySelector("#comboBox")
                itm = comboBox.options
                ind = comboBox.selectedIndex

                comboBoxT = document.querySelector("#comboBoxT")
                itmT = comboBoxT.options
                indT = comboBoxT.selectedIndex

                itemEdicao.tipo = itm[ind].value
                itemEdicao.tier = itmT[indT].value

                itemsRefT2.child(itemEdicao.key).update({
                    "nome": itemEdicao.nome,
                    "tipo": itemEdicao.tipo,
                    "tier": itemEdicao.tier,
                });

                setStatusCadastroGUI();
                LimparFormulario()
                itemEdicao = null;
                alert("Item #" + itemEdicao.codigo + " Atualizado! ");

            }
        }
    })

    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: codigo(linha:83)
    */
    function verificaCodigo(codigo) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == codigo) {
                return todosItems[i];
            }
        }
        return null;
    }
    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: nome(linha:84)
    */
    function verificaNome(nome) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].nome == nome) {
                return todosItems[i];
            }
        }
        return null;
    }


    /*
        habilita a edição de um item da tabela

        Parametros: row e items
    */
    function editarItem(row, items) {
        itemEdicao = items;
        editarItemGUI(row, itemEdicao);
    }


    /*++++++++++++++++++++++++++ Regras da GUI ++++++++++++++++++++++++++*/

    /* 
        Limpa o conteúdo que foi digitado no formulário
    */
    function LimparFormulario() {
        document.querySelector("#formCadastro").reset()
    }

    /* 
        Remove um item da tabela

        Parametros: rowIndex e items
     */
    function removerItem(rowIndex, items) {
        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == items.codigo) {
                todosItems.splice(i, 1);
            }
        }

        itemsRefT2.child(items.key).remove();

        removerItemGUI(rowIndex)
    }
    /*
        Insere o conteúdos que foram digitados pelo usuário na tabela
        
        Parametros: items
    */
    function RegistroNaTabela(items) {

        tabela = document.querySelector("#idItemsTableT2")
        var linha = tabela.insertRow()
        var endereco = linha.insertCell(0)
        var codigo = linha.insertCell(1)
        var nome = linha.insertCell(2)
        var tipo = linha.insertCell(3)
        var tier = linha.insertCell(4)
        var botaoRemover = linha.insertCell(5)
        var botaoEditar = linha.insertCell(6)
        endereco.innerHTML = "|"
        codigo.innerHTML = items.codigo
        nome.innerHTML = items.nome
        tipo.innerHTML = items.tipo
        tier.innerHTML = items.tier
        addBotoesEditarDeletar(botaoRemover, botaoEditar, items)

    }

    /* 
       Funcao Adiciona Botoes na Linha da Tabela

       Parametros: botaoRemover,botaoEditar e Funcionario
    */
    function addBotoesEditarDeletar(botaoRemover, botaoEditar, items) {

        var btnRemover = document.createElement("button")
        btnRemover.className = "form-control"
        btnRemover.textContent = "Remover"
        btnRemover.name = "btnRemover"
        btnRemover.onclick = () => {
            removerItem(botaoRemover.parentNode.rowIndex, items)
        };
        botaoRemover.appendChild(btnRemover)
        var btnEditar = document.createElement("button")
        btnEditar.className = "form-control"
        btnEditar.textContent = "Editar"
        btnEditar.name = "btnEditar"
        btnEditar.onclick = () => {
            editarItem(botaoEditar.parentNode, items)
        };
        botaoEditar.appendChild(btnEditar)
    }

    /*
       Ajusta a interface grafica para o status de edição de um item

       Parametros: row e itemEdicao
    */
    function editarItemGUI(row, itemEdicao) {

        var auxind = itemEdicao.tipoIND;

        document.getElementById("idCodigo").value = itemEdicao.codigo;
        document.getElementById("idNome").value = itemEdicao.nome;
        document.getElementById("comboBox").selectedIndex = auxind;
        document.getElementById("idCodigo").disabled = true;
        document.getElementById("idStatus").innerHTML = "Editando item #" + itemEdicao.codigo;
        rowEdit = row;
        let botoesRemover = document.getElementsByName("btnRemover");
        console.log(botoesRemover);
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = true;
        }
    }
    /*
       Ajusta a interface grafica para o status de Cadastro de um novo item
    */
    function setStatusCadastroGUI() {

        rowEdit.cells[2].innerHTML = itemEdicao.nome;
        rowEdit.cells[3].innerHTML = itemEdicao.tipo;

        document.getElementById("idCodigo").disabled = false;
        let botoesRemover = document.getElementsByName("btnRemover");
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = false;
        }
        document.getElementById("idStatus").innerHTML = "Novo Item";
        rowEdit = null;
    }
    /*
       Função que remove uma linha desejada da tabela
    */
    function removerItemGUI(rowIndex) {
        document.getElementById("idItemsTableT2").deleteRow(rowIndex);

    }
}


/************************************ Items T3 ****************************************/
{

    var todosItems = []
    var indiceItemTabela = 1
    var botaoSalvar = document.querySelector("#salvar")
    var itemEdicao = null
    var rowEdit = null

    itemsRefT3.on("child_added", snap => {
        let f = snap.val();
        console.log(f)
        f.key = snap.key;
        todosItems.push(f);
        RegistroNaTabela(f);
    });


    botaoSalvar.addEventListener("click", () => {

        var comboTier = document.querySelector("#comboBoxT")
        var itmTo = comboTier.options
        var indTo = comboTier.selectedIndex
        var varificaTier = itmTo[indTo].value

        if (varificaTier == 'T3') {
            if (itemEdicao == null) {

                let codigo = document.querySelector("#idCodigo").value
                if (verificaCodigo(codigo) == null) {

                    var items = new Item()

                    comboBox = document.querySelector("#comboBox")
                    itm = comboBox.options
                    ind = comboBox.selectedIndex

                    comboBoxT = document.querySelector("#comboBoxT")
                    itmT = comboBoxT.options
                    indT = comboBoxT.selectedIndex

                    items.codigo = document.querySelector("#idCodigo").value
                    items.nome = document.querySelector("#idNome").value
                    items.tipo = itm[ind].value
                    items.tipoIND = ind

                    items.tier = itmT[indT].value
                    items.tierIND = indT
                    console.log(itmT[indT].value)
                    console.log(indT)

                    itemsRefT3.push({
                        "codigo": items.codigo,
                        "nome": items.nome,
                        "tipo": items.tipo,
                        "tier": items.tier,
                    });

                    console.log(items)

                    // todosItems.push(items)
                    //RegistroNaTabela(items)
                    LimparFormulario()

                    alert(items.nome + " foi cadastrado(a) com sucesso!")
                } else {
                    alert("Não é possível cadastrar items com o mesmo código ou nome!")
                }

            } else {

                itemEdicao.nome = document.getElementById("idNome").value
                comboBox = document.querySelector("#comboBox")
                itm = comboBox.options
                ind = comboBox.selectedIndex

                comboBoxT = document.querySelector("#comboBoxT")
                itmT = comboBoxT.options
                indT = comboBoxT.selectedIndex

                itemEdicao.tipo = itm[ind].value
                itemEdicao.tier = itmT[indT].value

                itemsRefT3.child(itemEdicao.key).update({
                    "nome": itemEdicao.nome,
                    "tipo": itemEdicao.tipo,
                    "tier": itemEdicao.tier,
                });

                setStatusCadastroGUI();
                LimparFormulario()
                itemEdicao = null;
                alert("Item #" + itemEdicao.codigo + " Atualizado! ");

            }
        }
    })

    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: codigo(linha:83)
    */
    function verificaCodigo(codigo) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == codigo) {
                return todosItems[i];
            }
        }
        return null;
    }
    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: nome(linha:84)
    */
    function verificaNome(nome) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].nome == nome) {
                return todosItems[i];
            }
        }
        return null;
    }


    /*
        habilita a edição de um item da tabela

        Parametros: row e items
    */
    function editarItem(row, items) {
        itemEdicao = items;
        editarItemGUI(row, itemEdicao);
    }


    /*++++++++++++++++++++++++++ Regras da GUI ++++++++++++++++++++++++++*/

    /* 
        Limpa o conteúdo que foi digitado no formulário
    */
    function LimparFormulario() {
        document.querySelector("#formCadastro").reset()
    }

    /* 
        Remove um item da tabela

        Parametros: rowIndex e items
     */
    function removerItem(rowIndex, items) {
        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == items.codigo) {
                todosItems.splice(i, 1);
            }
        }

        itemsRefT3.child(items.key).remove();

        removerItemGUI(rowIndex)
    }
    /*
        Insere o conteúdos que foram digitados pelo usuário na tabela
        
        Parametros: items
    */
    function RegistroNaTabela(items) {

        tabela = document.querySelector("#idItemsTableT3")
        var linha = tabela.insertRow()
        var endereco = linha.insertCell(0)
        var codigo = linha.insertCell(1)
        var nome = linha.insertCell(2)
        var tipo = linha.insertCell(3)
        var tier = linha.insertCell(4)
        var botaoRemover = linha.insertCell(5)
        var botaoEditar = linha.insertCell(6)
        endereco.innerHTML = "|"
        codigo.innerHTML = items.codigo
        nome.innerHTML = items.nome
        tipo.innerHTML = items.tipo
        tier.innerHTML = items.tier
        addBotoesEditarDeletar(botaoRemover, botaoEditar, items)

    }

    /* 
       Funcao Adiciona Botoes na Linha da Tabela

       Parametros: botaoRemover,botaoEditar e Funcionario
    */
    function addBotoesEditarDeletar(botaoRemover, botaoEditar, items) {

        var btnRemover = document.createElement("button")
        btnRemover.className = "form-control"
        btnRemover.textContent = "Remover"
        btnRemover.name = "btnRemover"
        btnRemover.onclick = () => {
            removerItem(botaoRemover.parentNode.rowIndex, items)
        };
        botaoRemover.appendChild(btnRemover)
        var btnEditar = document.createElement("button")
        btnEditar.className = "form-control"
        btnEditar.textContent = "Editar"
        btnEditar.name = "btnEditar"
        btnEditar.onclick = () => {
            editarItem(botaoEditar.parentNode, items)
        };
        botaoEditar.appendChild(btnEditar)
    }

    /*
       Ajusta a interface grafica para o status de edição de um item

       Parametros: row e itemEdicao
    */
    function editarItemGUI(row, itemEdicao) {

        var auxind = itemEdicao.tipoIND;

        document.getElementById("idCodigo").value = itemEdicao.codigo;
        document.getElementById("idNome").value = itemEdicao.nome;
        document.getElementById("comboBox").selectedIndex = auxind;
        document.getElementById("idCodigo").disabled = true;
        document.getElementById("idStatus").innerHTML = "Editando item #" + itemEdicao.codigo;
        rowEdit = row;
        let botoesRemover = document.getElementsByName("btnRemover");
        console.log(botoesRemover);
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = true;
        }
    }
    /*
       Ajusta a interface grafica para o status de Cadastro de um novo item
    */
    function setStatusCadastroGUI() {

        rowEdit.cells[2].innerHTML = itemEdicao.nome;
        rowEdit.cells[3].innerHTML = itemEdicao.tipo;

        document.getElementById("idCodigo").disabled = false;
        let botoesRemover = document.getElementsByName("btnRemover");
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = false;
        }
        document.getElementById("idStatus").innerHTML = "Novo Item";
        rowEdit = null;
    }
    /*
       Função que remove uma linha desejada da tabela
    */
    function removerItemGUI(rowIndex) {
        document.getElementById("idItemsTableT3").deleteRow(rowIndex);

    }
}

/************************************ Items T4 ****************************************/
{

    var todosItems = []
    var indiceItemTabela = 1
    var botaoSalvar = document.querySelector("#salvar")
    var itemEdicao = null
    var rowEdit = null

    itemsRefT4.on("child_added", snap => {
        let f = snap.val();
        console.log(f)
        f.key = snap.key;
        todosItems.push(f);
        RegistroNaTabela(f);
    });


    botaoSalvar.addEventListener("click", () => {

        var comboTier = document.querySelector("#comboBoxT")
        var itmTo = comboTier.options
        var indTo = comboTier.selectedIndex
        var varificaTier = itmTo[indTo].value

        if (varificaTier == 'T4') {
            if (itemEdicao == null) {

                let codigo = document.querySelector("#idCodigo").value
                if (verificaCodigo(codigo) == null) {

                    var items = new Item()

                    comboBox = document.querySelector("#comboBox")
                    itm = comboBox.options
                    ind = comboBox.selectedIndex

                    comboBoxT = document.querySelector("#comboBoxT")
                    itmT = comboBoxT.options
                    indT = comboBoxT.selectedIndex

                    items.codigo = document.querySelector("#idCodigo").value
                    items.nome = document.querySelector("#idNome").value
                    items.tipo = itm[ind].value
                    items.tipoIND = ind

                    items.tier = itmT[indT].value
                    items.tierIND = indT
                    console.log(itmT[indT].value)
                    console.log(indT)

                    itemsRefT4.push({
                        "codigo": items.codigo,
                        "nome": items.nome,
                        "tipo": items.tipo,
                        "tier": items.tier,
                    });

                    console.log(items)

                    // todosItems.push(items)
                    //RegistroNaTabela(items)
                    LimparFormulario()

                    alert(items.nome + " foi cadastrado(a) com sucesso!")
                } else {
                    alert("Não é possível cadastrar items com o mesmo código ou nome!")
                }

            } else {

                itemEdicao.nome = document.getElementById("idNome").value
                comboBox = document.querySelector("#comboBox")
                itm = comboBox.options
                ind = comboBox.selectedIndex

                comboBoxT = document.querySelector("#comboBoxT")
                itmT = comboBoxT.options
                indT = comboBoxT.selectedIndex

                itemEdicao.tipo = itm[ind].value
                itemEdicao.tier = itmT[indT].value

                itemsRefT4.child(itemEdicao.key).update({
                    "nome": itemEdicao.nome,
                    "tipo": itemEdicao.tipo,
                    "tier": itemEdicao.tier,
                });

                setStatusCadastroGUI();
                LimparFormulario()
                itemEdicao = null;
                alert("Item #" + itemEdicao.codigo + " Atualizado! ");

            }
        }
    })

    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: codigo(linha:83)
    */
    function verificaCodigo(codigo) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == codigo) {
                return todosItems[i];
            }
        }
        return null;
    }
    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: nome(linha:84)
    */
    function verificaNome(nome) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].nome == nome) {
                return todosItems[i];
            }
        }
        return null;
    }


    /*
        habilita a edição de um item da tabela

        Parametros: row e items
    */
    function editarItem(row, items) {
        itemEdicao = items;
        editarItemGUI(row, itemEdicao);
    }


    /*++++++++++++++++++++++++++ Regras da GUI ++++++++++++++++++++++++++*/

    /* 
        Limpa o conteúdo que foi digitado no formulário
    */
    function LimparFormulario() {
        document.querySelector("#formCadastro").reset()
    }

    /* 
        Remove um item da tabela

        Parametros: rowIndex e items
     */
    function removerItem(rowIndex, items) {
        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == items.codigo) {
                todosItems.splice(i, 1);
            }
        }

        itemsRefT4.child(items.key).remove();

        removerItemGUI(rowIndex)
    }
    /*
        Insere o conteúdos que foram digitados pelo usuário na tabela
        
        Parametros: items
    */
    function RegistroNaTabela(items) {

        tabela = document.querySelector("#idItemsTableT4")
        var linha = tabela.insertRow()
        var endereco = linha.insertCell(0)
        var codigo = linha.insertCell(1)
        var nome = linha.insertCell(2)
        var tipo = linha.insertCell(3)
        var tier = linha.insertCell(4)
        var botaoRemover = linha.insertCell(5)
        var botaoEditar = linha.insertCell(6)
        endereco.innerHTML = "|"
        codigo.innerHTML = items.codigo
        nome.innerHTML = items.nome
        tipo.innerHTML = items.tipo
        tier.innerHTML = items.tier
        addBotoesEditarDeletar(botaoRemover, botaoEditar, items)

    }

    /* 
       Funcao Adiciona Botoes na Linha da Tabela

       Parametros: botaoRemover,botaoEditar e Funcionario
    */
    function addBotoesEditarDeletar(botaoRemover, botaoEditar, items) {

        var btnRemover = document.createElement("button")
        btnRemover.className = "form-control"
        btnRemover.textContent = "Remover"
        btnRemover.name = "btnRemover"
        btnRemover.onclick = () => {
            removerItem(botaoRemover.parentNode.rowIndex, items)
        };
        botaoRemover.appendChild(btnRemover)
        var btnEditar = document.createElement("button")
        btnEditar.className = "form-control"
        btnEditar.textContent = "Editar"
        btnEditar.name = "btnEditar"
        btnEditar.onclick = () => {
            editarItem(botaoEditar.parentNode, items)
        };
        botaoEditar.appendChild(btnEditar)
    }

    /*
       Ajusta a interface grafica para o status de edição de um item

       Parametros: row e itemEdicao
    */
    function editarItemGUI(row, itemEdicao) {

        var auxind = itemEdicao.tipoIND;

        document.getElementById("idCodigo").value = itemEdicao.codigo;
        document.getElementById("idNome").value = itemEdicao.nome;
        document.getElementById("comboBox").selectedIndex = auxind;
        document.getElementById("idCodigo").disabled = true;
        document.getElementById("idStatus").innerHTML = "Editando item #" + itemEdicao.codigo;
        rowEdit = row;
        let botoesRemover = document.getElementsByName("btnRemover");
        console.log(botoesRemover);
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = true;
        }
    }
    /*
       Ajusta a interface grafica para o status de Cadastro de um novo item
    */
    function setStatusCadastroGUI() {

        rowEdit.cells[2].innerHTML = itemEdicao.nome;
        rowEdit.cells[3].innerHTML = itemEdicao.tipo;

        document.getElementById("idCodigo").disabled = false;
        let botoesRemover = document.getElementsByName("btnRemover");
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = false;
        }
        document.getElementById("idStatus").innerHTML = "Novo Item";
        rowEdit = null;
    }
    /*
       Função que remove uma linha desejada da tabela
    */
    function removerItemGUI(rowIndex) {
        document.getElementById("idItemsTableT4").deleteRow(rowIndex);

    }
}

/************************************ Items T5 ****************************************/
{

    var todosItems = []
    var indiceItemTabela = 1
    var botaoSalvar = document.querySelector("#salvar")
    var itemEdicao = null
    var rowEdit = null

    itemsRefT5.on("child_added", snap => {
        let f = snap.val();
        console.log(f)
        f.key = snap.key;
        todosItems.push(f);
        RegistroNaTabela(f);
    });


    botaoSalvar.addEventListener("click", () => {

        var comboTier = document.querySelector("#comboBoxT")
        var itmTo = comboTier.options
        var indTo = comboTier.selectedIndex
        var varificaTier = itmTo[indTo].value

        if (varificaTier == 'T5') {
            if (itemEdicao == null) {

                let codigo = document.querySelector("#idCodigo").value
                if (verificaCodigo(codigo) == null) {

                    var items = new Item()

                    comboBox = document.querySelector("#comboBox")
                    itm = comboBox.options
                    ind = comboBox.selectedIndex

                    comboBoxT = document.querySelector("#comboBoxT")
                    itmT = comboBoxT.options
                    indT = comboBoxT.selectedIndex

                    items.codigo = document.querySelector("#idCodigo").value
                    items.nome = document.querySelector("#idNome").value
                    items.tipo = itm[ind].value
                    items.tipoIND = ind

                    items.tier = itmT[indT].value
                    items.tierIND = indT
                    console.log(itmT[indT].value)
                    console.log(indT)

                    itemsRefT5.push({
                        "codigo": items.codigo,
                        "nome": items.nome,
                        "tipo": items.tipo,
                        "tier": items.tier,
                    });

                    console.log(items)

                    // todosItems.push(items)
                    //RegistroNaTabela(items)
                    LimparFormulario()

                    alert(items.nome + " foi cadastrado(a) com sucesso!")
                } else {
                    alert("Não é possível cadastrar items com o mesmo código ou nome!")
                }

            } else {

                itemEdicao.nome = document.getElementById("idNome").value
                comboBox = document.querySelector("#comboBox")
                itm = comboBox.options
                ind = comboBox.selectedIndex

                comboBoxT = document.querySelector("#comboBoxT")
                itmT = comboBoxT.options
                indT = comboBoxT.selectedIndex

                itemEdicao.tipo = itm[ind].value
                itemEdicao.tier = itmT[indT].value

                itemsRefT5.child(itemEdicao.key).update({
                    "nome": itemEdicao.nome,
                    "tipo": itemEdicao.tipo,
                    "tier": itemEdicao.tier,
                });

                setStatusCadastroGUI();
                LimparFormulario()
                itemEdicao = null;
                alert("Item #" + itemEdicao.codigo + " Atualizado! ");

            }
        }
    })

    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: codigo(linha:83)
    */
    function verificaCodigo(codigo) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == codigo) {
                return todosItems[i];
            }
        }
        return null;
    }
    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: nome(linha:84)
    */
    function verificaNome(nome) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].nome == nome) {
                return todosItems[i];
            }
        }
        return null;
    }


    /*
        habilita a edição de um item da tabela

        Parametros: row e items
    */
    function editarItem(row, items) {
        itemEdicao = items;
        editarItemGUI(row, itemEdicao);
    }


    /*++++++++++++++++++++++++++ Regras da GUI ++++++++++++++++++++++++++*/

    /* 
        Limpa o conteúdo que foi digitado no formulário
    */
    function LimparFormulario() {
        document.querySelector("#formCadastro").reset()
    }

    /* 
        Remove um item da tabela

        Parametros: rowIndex e items
     */
    function removerItem(rowIndex, items) {
        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == items.codigo) {
                todosItems.splice(i, 1);
            }
        }

        itemsRefT5.child(items.key).remove();

        removerItemGUI(rowIndex)
    }
    /*
        Insere o conteúdos que foram digitados pelo usuário na tabela
        
        Parametros: items
    */
    function RegistroNaTabela(items) {

        tabela = document.querySelector("#idItemsTableT5")
        var linha = tabela.insertRow()
        var endereco = linha.insertCell(0)
        var codigo = linha.insertCell(1)
        var nome = linha.insertCell(2)
        var tipo = linha.insertCell(3)
        var tier = linha.insertCell(4)
        var botaoRemover = linha.insertCell(5)
        var botaoEditar = linha.insertCell(6)
        endereco.innerHTML = "|"
        codigo.innerHTML = items.codigo
        nome.innerHTML = items.nome
        tipo.innerHTML = items.tipo
        tier.innerHTML = items.tier
        addBotoesEditarDeletar(botaoRemover, botaoEditar, items)

    }

    /* 
       Funcao Adiciona Botoes na Linha da Tabela

       Parametros: botaoRemover,botaoEditar e Funcionario
    */
    function addBotoesEditarDeletar(botaoRemover, botaoEditar, items) {

        var btnRemover = document.createElement("button")
        btnRemover.className = "form-control"
        btnRemover.textContent = "Remover"
        btnRemover.name = "btnRemover"
        btnRemover.onclick = () => {
            removerItem(botaoRemover.parentNode.rowIndex, items)
        };
        botaoRemover.appendChild(btnRemover)
        var btnEditar = document.createElement("button")
        btnEditar.className = "form-control"
        btnEditar.textContent = "Editar"
        btnEditar.name = "btnEditar"
        btnEditar.onclick = () => {
            editarItem(botaoEditar.parentNode, items)
        };
        botaoEditar.appendChild(btnEditar)
    }

    /*
       Ajusta a interface grafica para o status de edição de um item

       Parametros: row e itemEdicao
    */
    function editarItemGUI(row, itemEdicao) {

        var auxind = itemEdicao.tipoIND;

        document.getElementById("idCodigo").value = itemEdicao.codigo;
        document.getElementById("idNome").value = itemEdicao.nome;
        document.getElementById("comboBox").selectedIndex = auxind;
        document.getElementById("idCodigo").disabled = true;
        document.getElementById("idStatus").innerHTML = "Editando item #" + itemEdicao.codigo;
        rowEdit = row;
        let botoesRemover = document.getElementsByName("btnRemover");
        console.log(botoesRemover);
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = true;
        }
    }
    /*
       Ajusta a interface grafica para o status de Cadastro de um novo item
    */
    function setStatusCadastroGUI() {

        rowEdit.cells[2].innerHTML = itemEdicao.nome;
        rowEdit.cells[3].innerHTML = itemEdicao.tipo;

        document.getElementById("idCodigo").disabled = false;
        let botoesRemover = document.getElementsByName("btnRemover");
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = false;
        }
        document.getElementById("idStatus").innerHTML = "Novo Item";
        rowEdit = null;
    }
    /*
       Função que remove uma linha desejada da tabela
    */
    function removerItemGUI(rowIndex) {
        document.getElementById("idItemsTableT5").deleteRow(rowIndex);

    }
}

/************************************ Materiais ****************************************/
{

    var todosItems = []
    var indiceItemTabela = 1
    var botaoSalvar = document.querySelector("#salvar")
    var itemEdicao = null
    var rowEdit = null

    itemsRefMaterial.on("child_added", snap => {
        let f = snap.val();
        console.log(f)
        f.key = snap.key;
        todosItems.push(f);
        RegistroNaTabela(f);
    });


    botaoSalvar.addEventListener("click", () => {

        var comboTier = document.querySelector("#comboBoxT")
        var itmTo = comboTier.options
        var indTo = comboTier.selectedIndex
        var varificaTier = itmTo[indTo].value

        if (varificaTier == 'Material') {
            if (itemEdicao == null) {

                let codigo = document.querySelector("#idCodigo").value
                if (verificaCodigo(codigo) == null) {

                    var items = new Item()

                    comboBox = document.querySelector("#comboBox")
                    itm = comboBox.options
                    ind = comboBox.selectedIndex

                    comboBoxT = document.querySelector("#comboBoxT")
                    itmT = comboBoxT.options
                    indT = comboBoxT.selectedIndex

                    items.codigo = document.querySelector("#idCodigo").value
                    items.nome = document.querySelector("#idNome").value
                    items.tipo = itm[ind].value
                    items.tipoIND = ind


                    items.tier = itmT[indT].value
                    items.tierIND = indT
                    console.log(itmT[indT].value)
                    console.log(indT)

                    var quantMat = document.querySelector("#quantMat").value
                    items.quantidade = quantMat

                    var valorMat = document.querySelector("#valorMat").value
                    items.valor = valorMat

                    itemsRefMaterial.push({
                        "codigo": items.codigo,
                        "nome": items.nome,
                        "tipo": items.tipo,
                        "tier": items.tier,
                        "quantidade": items.quantidade,
                        "valor": items.valor,
                    });

                    console.log(items)

                    // todosItems.push(items)
                    //RegistroNaTabela(items)
                    LimparFormulario()

                    alert(items.nome + " foi cadastrado(a) com sucesso!")
                } else {
                    alert("Não é possível cadastrar items com o mesmo código ou nome!")
                }

            } else {

                itemEdicao.nome = document.getElementById("idNome").value
                comboBox = document.querySelector("#comboBox")
                itm = comboBox.options
                ind = comboBox.selectedIndex

                comboBoxT = document.querySelector("#comboBoxT")
                itmT = comboBoxT.options
                indT = comboBoxT.selectedIndex

                itemEdicao.tipo = itm[ind].value
                itemEdicao.tier = itmT[indT].value

                itemEdicao.quantidade = document.querySelector("#quantMat").value
                itemEdicao.valor = document.querySelector("#valorMat").value

                itemsRefMaterial.child(itemEdicao.key).update({
                    "nome": itemEdicao.nome,
                    "tipo": itemEdicao.tipo,
                    "tier": itemEdicao.tier,
                    "quantidade": itemEdicao.quantidade,
                    "valor": itemEdicao.valor,
                });

                setStatusCadastroGUI();
                LimparFormulario()
                itemEdicao = null;
                alert("Item #" + itemEdicao.codigo + " Atualizado! ");

            }
        }
    })

    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: codigo(linha:83)
    */
    function verificaCodigo(codigo) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == codigo) {
                return todosItems[i];
            }
        }
        return null;
    }
    /*
        Verifica a integridade do código (se há ou não um código repetido)

        Parametros: nome(linha:84)
    */
    function verificaNome(nome) {

        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].nome == nome) {
                return todosItems[i];
            }
        }
        return null;
    }


    /*
        habilita a edição de um item da tabela

        Parametros: row e items
    */
    function editarItem(row, items) {
        itemEdicao = items;
        editarItemGUI(row, itemEdicao);
    }


    /*++++++++++++++++++++++++++ Regras da GUI ++++++++++++++++++++++++++*/

    /* 
        Limpa o conteúdo que foi digitado no formulário
    */
    function LimparFormulario() {
        document.querySelector("#formCadastro").reset()
    }

    /* 
        Remove um item da tabela

        Parametros: rowIndex e items
     */
    function removerItem(rowIndex, items) {
        for (let i = 0; i < todosItems.length; i++) {
            if (todosItems[i].codigo == items.codigo) {
                todosItems.splice(i, 1);
            }
        }

        itemsRefMaterial.child(items.key).remove();

        removerItemGUI(rowIndex)
    }
    /*
        Insere o conteúdos que foram digitados pelo usuário na tabela
        
        Parametros: items
    */
    function RegistroNaTabela(items) {

        tabela = document.querySelector("#idItemsTableMaterial")
        var linha = tabela.insertRow()
        var endereco = linha.insertCell(0)
        var codigo = linha.insertCell(1)
        var nome = linha.insertCell(2)
        var tipo = linha.insertCell(3)
        var tier = linha.insertCell(4)
        var quant = linha.insertCell(5)
        var valor = linha.insertCell(6)
        var botaoRemover = linha.insertCell(7)
        var botaoEditar = linha.insertCell(8)
        endereco.innerHTML = "|"
        codigo.innerHTML = items.codigo
        nome.innerHTML = items.nome
        tipo.innerHTML = items.tipo
        tier.innerHTML = items.tier
        quant.innerHTML = items.quantidade
        valor.innerHTML = items.valor
        addBotoesEditarDeletar(botaoRemover, botaoEditar, items)

    }

    /* 
       Funcao Adiciona Botoes na Linha da Tabela

       Parametros: botaoRemover,botaoEditar e Funcionario
    */
    function addBotoesEditarDeletar(botaoRemover, botaoEditar, items) {

        var btnRemover = document.createElement("button")
        btnRemover.className = "form-control"
        btnRemover.textContent = "Remover"
        btnRemover.name = "btnRemover"
        btnRemover.onclick = () => {
            removerItem(botaoRemover.parentNode.rowIndex, items)
        };
        botaoRemover.appendChild(btnRemover)
        var btnEditar = document.createElement("button")
        btnEditar.className = "form-control"
        btnEditar.textContent = "Editar"
        btnEditar.name = "btnEditar"
        btnEditar.onclick = () => {
            editarItem(botaoEditar.parentNode, items)
        };
        botaoEditar.appendChild(btnEditar)
    }

    /*
       Ajusta a interface grafica para o status de edição de um item

       Parametros: row e itemEdicao
    */
    function editarItemGUI(row, itemEdicao) {

        var auxind = itemEdicao.tipoIND;
        var auxTierInd = itemEdicao.tierIND;

        document.getElementById("idCodigo").value = itemEdicao.codigo;
        document.getElementById("idNome").value = itemEdicao.nome;
        document.getElementById("comboBox").selectedIndex = auxind;
        document.getElementById("comboBox").disabled = true;
        document.getElementById("idCodigo").disabled = true;
        document.getElementById("comboBoxT").selectedIndex = 5;
        document.getElementById("comboBoxT").disabled = true;
        document.getElementById("quantMat").disabled = false;
        document.getElementById("quantMat").value = itemEdicao.quantidade;
        document.getElementById("valorMat").disabled = false;
        document.getElementById("valorMat").value = itemEdicao.valor;
        document.getElementById("idStatus").innerHTML = "Editando item #" + itemEdicao.codigo;
        rowEdit = row;
        let botoesRemover = document.getElementsByName("btnRemover");
        console.log(botoesRemover);
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = true;
        }
    }
    /*
       Ajusta a interface grafica para o status de Cadastro de um novo item
    */
    function setStatusCadastroGUI() {

        rowEdit.cells[2].innerHTML = itemEdicao.nome;
        rowEdit.cells[5].innerHTML = itemEdicao.quantidade
        rowEdit.cells[6].innerHTML = itemEdicao.valor

        document.getElementById("idCodigo").disabled = false;
        document.getElementById("comboBox").disabled = false;
        document.getElementById("comboBoxT").disabled = false;
        let botoesRemover = document.getElementsByName("btnRemover");
        for (let i = 0; i < botoesRemover.length; i++) {
            botoesRemover[i].disabled = false;
        }
        document.getElementById("idStatus").innerHTML = "Novo Item";
        rowEdit = null;
        document.querySelector("#quantMat").disabled = true
        document.querySelector("#valorMat").disabled = true
    }
    /*
       Função que remove uma linha desejada da tabela
    */
    function removerItemGUI(rowIndex) {
        document.getElementById("idItemsTableMaterial").deleteRow(rowIndex);

    }
}