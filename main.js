function sortear() {
  let nome = [];
  let vogais = "";
  let consoantes = "";
  let idade = 0;
  let classe = [];
  let imagem = [];
  let sorteio;
  let cores = [];

  vogais = "aeiou";
  consoantes = "bcdfghjklmnpqrstvwxyz";

  //forma o nome do personagem
  while (nome.length < 5) {
    sorteio = Math.floor(Math.random() * 5)
    nome.push(vogais.charAt(sorteio));

    if (nome.length != 5) {
      sorteio = Math.floor(Math.random() * 21)
      nome.push(consoantes.charAt(sorteio));
    }
  }
  nome = nome.join("") //junta tudo da array sem espaço
  nome = nome.charAt(0).toUpperCase() + nome.substr(1)   //primeira letra maiúscula + nome sem a 1ª letra
  document.getElementById("nome").innerText = `Nome: ${nome}`;
 
  //sorteia a idade entre 18 e 100 anos
  idade = Math.floor(Math.random() * (100 - 18) + 18)
  document.getElementById("idade").innerText = `Idade: ${idade}`;

  //sorteia a classe do personagem
  classe = ['Vampira', 'Espiã', 'Vilã', 'Feiticeira', 'Guerreira']
  sorteio = Math.floor(Math.random() * 5)
  document.getElementById("classe").innerText = `Classe: ${classe[sorteio]}`;

  //sorteia a imagem do personagens
  imagem = [
    'https://i.pinimg.com/originals/7f/bf/76/7fbf76ec9c2ad24e276c737de46e31f1.jpg',
    'https://i.pinimg.com/originals/58/56/5b/58565b4d873aaa818b6112d6a4d4e404.jpg',
    'https://i.pinimg.com/originals/31/e1/49/31e149c7e1fc5e20314a38d6b6f44c31.png',
    'https://i.pinimg.com/564x/76/e1/bc/76e1bc5610e333379e78ba36ef4b9826--isabelle-lightwood-alec-lightwood.jpg',
    'https://i.pinimg.com/originals/e6/9b/0b/e69b0b109c85747273db026c77c0a41a.jpg'
  ]
  sorteio = Math.floor(Math.random() * 5)
  document.getElementById("imagemPersonagem").src = imagem[sorteio];

  //sorteia a cor de fundo
  cores = ['rgb(182, 35, 35)','rgb(52, 52, 179)','rgb(46, 121, 46)','rgb(102, 23, 102)','rgb(212, 143, 13)'];
  sorteio = Math.floor(Math.random()*5);
  document.body.style.backgroundColor = cores[sorteio];
}