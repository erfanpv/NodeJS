const fetch1 = fetch(`https://pokeapi.co/api/v2/pokemon/mew`);
fetch1.then((res) => res.json())
.then((data) => console.log(data.moves))
