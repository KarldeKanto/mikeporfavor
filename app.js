function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

async function fetchPlayers() {
    const response = await fetch(
      "https://mikeporfavor.herokuapp.com/players_api",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        const ul = document.getElementById('players');
        let products = data;
        //console.log(products);
        
        for(let p of players){
            let li = createNode('li');
            let span = createNode('span');           
            span.innerHTML = `${p.name} ${p.surname} ${p.age} ${p.position} ${p.team}`;            
            append(li, span);
            append(ul, li);
        }
        
      })
      .catch((error) => console.log(error));
  }

  fetchProducts();