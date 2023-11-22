//DOM
document.addEventListener('DOMContentLoaded', function () {
    // Elemento onde o menu será inserido
    let menuHeader = document.querySelector('#menu');
    let sideMenu = document.querySelector('#asideMenu');
    let containerHtml = document.querySelector('.container2');
  
    // Função para buscar categorias da API
    fetch("categoria.json")
      .then((response) => response.json())
      .then((categoria) => {
        // Estilizando o menu do cabeçalho 
        menuHeader.style.display = "flex";
        menuHeader.style.gap = "20px";
  
        categoria.items.forEach((item) => {
          // Criando elementos de lista (li) dinamicamente
          let listItem = document.createElement('li');
          listItem.textContent = item.name;
  
          // Adicionando evento de clique ao item da lista
          listItem.addEventListener('click', () => {
           carregar()
          });
  
          // Adicionando o item à lista
          menuHeader.appendChild(listItem);
  
          // Estilizando o item da lista
          listItem.style.textTransform = "uppercase";
          listItem.style.cursor = "pointer";
        });
  
        // Retornando a categoria para usar no próximo then
        return categoria;
      })
      .then((categoria) => {
        categoria.items.forEach((item) => {
          // Criando elementos de lista (li) dinamicamente
          let listItem = document.createElement('li');
          listItem.textContent = item.name;
  
          // Adicionando evento de clique ao item da lista
          listItem.addEventListener('click', () => {
            carregar()
          });
  
          // Adicionando o item à lista
          sideMenu.appendChild(listItem);
  
          // Estilizando o item da lista
          listItem.style.listStyle = "none";
          listItem.style.cursor = "pointer";
          listItem.style.paddingRight = "70px";
          listItem.style.paddingLeft = "20px";
        });
      })
      .catch((erro) => console.error('Erro ao obter categorias:', erro));
  
  
    // ADICIONANDO OS PRODUTOS DO CATALOGO
  
    function carregar() {
      fetch("produtos1.json")
        .then(response => response.json())
        .then(produtos1 => {
          const container = document.querySelector("#produtos")
          container.innerHTML = '';
  
          produtos1.forEach(item => {
              const card = document.createElement("div")
              card.style.marginTop = "60px"
              card.classList.add("card")
  
              const img = document.createElement("img");
              img.src = item.image
              img.alt = item.name
  
              const titulo = document.createElement("h3")
              titulo.textContent = item.name
              titulo.style.fontFamily = "Open sans"
  
              const preco = document.createElement("h2")
              preco.textContent = `R$${item.price}`
              preco.style.color = "#1E2B50"
              preco.style.fontWeight = "bold"
              preco.style.fontSize = "20px"
              preco.style.fontFamily = "Open sans"
  
              const btn = document.createElement("h3")
              btn.style.backgroundColor = "#27A3A9"
              btn.style.borderRadius = "5px"
              btn.style.padding = "10px"
              btn.style.color = "#fff"
              btn.style.fontSize = "15px"
              btn.style.fontWeight = "bold"
              btn.textContent = "COMPRAR"
  
              card.appendChild(img)
              card.appendChild(titulo)
              card.appendChild(preco)
              card.appendChild(btn)
  
              containerHtml.style.display = "none"
  
              container.appendChild(card)
          })
        })
    }
  
  });