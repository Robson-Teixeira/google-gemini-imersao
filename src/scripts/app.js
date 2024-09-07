// Essa função é responsável por buscar os dados dos veículos e exibir os resultados na página.
function pesquisarVeiculo() {

    // Obtém a seção HTML onde os resultados serão inseridos.
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultadosPesquisaHtml = "";

    // Itera sobre cada dado de veículo no array 'dados'.
    for (let dado of dados) {

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

    // Insere o HTML gerado na seção de resultados.
    section.innerHTML = resultadosPesquisaHtml;
}