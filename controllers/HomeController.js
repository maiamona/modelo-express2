exports.paginaInicial = (req, res) =>{
    res.send(`
    <form action="/" method="post">
    <table>
   <tr><td>Nome :</td><td><input type="text" name="nome"></td> </tr> 
  <tr><td>Sobrenome :</td> <td><input type="text" name="sobrenome"></td> </tr> 
  <tr><td> <button>Enviar</button></td> </tr> 
</table>
</form>
    `);
};

exports.trataPost = (req, res) =>{
// res.send('sou sua nova rota de Post');
res.send(`seu nome completo é ${req.body.nome} ${req.body.sobrenome}`);
};