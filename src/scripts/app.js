// Essa função é responsável por buscar os dados dos veículos e exibir os resultados na página.
function pesquisarVeiculo() {

    // Obtém o valor do campo de pesquisa com o ID "campo-pesquisa" e converte para letras minúsculas.
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();   

    // Obtém a seção HTML onde os resultados serão inseridos.
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultadosPesquisaHtml = "";

    // Verifica se o campo de pesquisa está vazio ou contém apenas espaços em branco.
    if (!campoPesquisa || campoPesquisa.trim() === "") {

        // Se estiver vazio, exibe uma mensagem de erro na seção HTML.
        section.innerHTML = "Favor informar o valor do campo de pesquisa.";

        // Interrompe a execução da função.
        return;
    }

    // Inicializa uma string vazia para armazenar o título dos dados.
    let titulo = "";

    // Inicializa uma string vazia para armazenar a descrição dos dados.
    let descricao = "";

    // Inicializa uma string vazia para armazenar as tags dos dados.
    let tags = "";    

    // Itera sobre cada dado de veículo no array 'dados'.
    for (let dado of dados) {

        // Converte o título para letras minúsculas.
        titulo = dado.titulo.toLowerCase();

        // Converte a descrição para letras minúsculas.
        descricao = dado.descricao.toLowerCase();

        // Converte as tags para letras minúsculas.
        tags = dado.tags.toLowerCase();        

        // Verifica se o título, descrição ou tags contêm o valor do campo de pesquisa.
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            
                // Cria um novo elemento HTML para cada resultado.
                resultadosPesquisaHtml += `
                    <div class="item-resultado">
                    <h2>
                        <a href="${dado.linkVideo}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
                    <a href="${dado.linkSaibaMais}" target="_blank">Saiba mais</a>
                    </div>
                `;

        }
    }

    // Verifica se o resultado está vazio.
    if (!resultadosPesquisaHtml) {

        // Se estiver vazio, exibe uma mensagem de erro na seção HTML.
        resultadosPesquisaHtml = "Nenhum resultado encontrado.";

    }    

    // Insere o HTML gerado na seção de resultados.
    section.innerHTML = resultadosPesquisaHtml;
}