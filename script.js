
async function carregarConsultas() {
    try {
        const resposta = await fetch("https://my-json-server.typicode.com/CristianAfonsoD/TrabalhoFinal/consultas");
        const consultas = await resposta.json();

        const tbody = document.querySelector("#tabela-consultas tbody");
        tbody.innerHTML = ""; // limpa antes de inserir

        consultas.forEach(c => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.time}</td>
                <td>${c.dataNascimento}</td>
                <td>${c.date}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (erro) {
        console.error("Erro ao carregar consultas:", erro);
    }
}

// chama quando a página carregar
carregarConsultas();

