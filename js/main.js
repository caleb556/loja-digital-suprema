// frontend/js/main.js
fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(produtos => {
        const container = document.getElementById('produtos-container');
        produtos.forEach(prod => {
            const card = document.createElement('div');
            card.innerHTML = `
        <h3>${prod.nome}</h3>
        <p>${prod.descricao}</p>
        <strong>R$ ${prod.preco.toFixed(2)}</strong>
      `;
            container.appendChild(card);
        });
    });
