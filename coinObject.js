const body = document.querySelector('body')

const coin = {
   state: 0,
   flip: function() {
       // 1. Um ponto: Randomicamente configura a propriedade “estado” do
       // seu objeto moeda para ser um dos seguintes valores:
       // 0 ou 1: use "this.state" para acessar a propriedade "state" neste objeto.
       this.state = Math.round(Math.random())
   },
   toString: function() {
       // 2. Um ponto: Retorna a string "Heads" ou "Tails", dependendo de como
       //  "this.state" está como 0 ou 1.
       return this.state ? "Heads" : "Tails" 
   },
   toHTML: function() {
       const image = document.createElement('img');
       // 3. Um ponto: Configura as propriedades do elemento imagem
       // para mostrar a face voltada para cima ou para baixo dependendo
       // do valor de this.state está 0 ou 1.
       image.src = `images/${this.toString()}.png`
       return image;
   }
};

function display20Flips() {
   const results = [];
   // 4. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez
   // mostrando o resultado como uma string na página.
   // Depois de que seu loop terminar, retorne um array com o
   // resultado de cada arremesso.
    for (let i=0;i < 20;i++){
        coin.flip()
        let textnode = document.createTextNode(coin.toString())
        body.appendChild(textnode)        
        results.push(coin.toString())
    }
    return results
}

function display20Images() {
   const results = [];
   // 5. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez
   // mostrando o resultado como uma imagem na página.
   // Depois de que seu loop terminar, retorne um array com o
   // resultado de cada arremesso.
    for (let i=0;i < 20;i++){
        coin.flip()
        body.appendChild(coin.toHTML())        
        results.push(coin.toString())
    }
    return results
}

display20Flips()
display20Images()
