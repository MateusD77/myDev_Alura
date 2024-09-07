function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
    console.log(section); // Loga o elemento HTML para fins de depuração
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

  //se o campoPesquisa for uma string sem nada
  if(!campoPesquisa){
      section.innerHTML = "<p> Nenhum Jogo encontrado! </p>"
      return
  }
    console.log(campoPesquisa);
    // Inicializa uma string vazia para armazenar os resultados
  campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

    // Itera sobre cada dado na lista de jogos
    for (let dado of jogos) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if(titulo.includes(campoPesquisa) || 
      descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
console.log(dado.titulo.includes(campoPesquisa))
      // Constrói o HTML para cada resultado, formatando os dados
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Saiba Mais...</a>
        </div>
      `;
      }
      
    }
    if (!resultados) {
      resultados = "<p> Pequisa não encontrada...Digite algo relacionado ao Jogo! </p>"
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  };
