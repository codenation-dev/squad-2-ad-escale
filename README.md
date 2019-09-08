<p># squad-2-ad-escale</p>
<p>PETCODES</p>
<p><br /><strong>Objetivo</strong></p>
<p>Plataforma web para publica&ccedil;&atilde;o e busca de animais perdidos, achados ou dispon&iacute;veis para ado&ccedil;&atilde;o.</p>
<p><strong>Contextualiza&ccedil;&atilde;o</strong></p>
<p>Milhares de c&atilde;es, gatos e outros animais s&atilde;o perdidos e encontrados todos os anos no Brasil e agora seu squad &eacute; respons&aacute;vel por criar a mais nova solu&ccedil;&atilde;o para ajudar na resolu&ccedil;&atilde;o desse problema.</p>
<p><strong>Informa&ccedil;&otilde;es adicionais</strong></p>
<p>Com exce&ccedil;&atilde;o dos requisitos t&eacute;cnicos obrigat&oacute;rios, as funcionalidades e seus atributos podem ser alterados livremente por cada squad, desde que as altera&ccedil;&otilde;es sejam justific&aacute;veis. Exemplos: tempo de desenvolvimento, nova ideia que facilite o uso pelo usu&aacute;rio, complexidade, etc.</p>
<p><strong>Requisitos t&eacute;cnicos obrigat&oacute;rios:</strong></p>
<p>Banco de Dados;<br />Desenvolvimento de Backend - Python;<br />Desenvolvimento de API - Python;<br />Desenvolvimento de Frontend (utilizando de framework React).</p>
<p><strong>Funcionalidades</strong></p>
<p>Cada squad tem liberdade para definir a linha de desenvolvimento de seus produtos, por&eacute;m levem em considera&ccedil;&atilde;o algumas sugest&otilde;es levantadas abaixo:</p>
<ul>
<li>Mobile first: lembrem-se, a grande maioria dos seus usu&aacute;rios tentar&atilde;o usar seu produto pelo celular, portanto, caprichem para que eles tenham uma boa experi&ecirc;ncia de uso no mobile;</li>
<li>Foco em resolver problemas: ter milhares de bot&otilde;es ou funcionalidades malucas n&atilde;o significa mais valor para seus usu&aacute;rios; logo, o foco &eacute; resolver;</li>
<li>MVP e evolu&ccedil;&atilde;o incremental: para evitar que, ao final do Acelera Dev, seu squad n&atilde;o consiga colocar uma solu&ccedil;&atilde;o funcional no ar, trabalhe com solu&ccedil;&otilde;es incrementais. Defina, desenvolva, lance e, a partir disso e de intera&ccedil;&otilde;es, aperfei&ccedil;oe a sua solu&ccedil;&atilde;o aos poucos.</li>
</ul>
<p><strong>CADASTRO</strong></p>
<p>Atributos:</p>
<ul>
<li>Nome;</li>
<li>E-mail;</li>
<li>Senha;</li>
<li>Repetir a senha.</li>
</ul>
<p>Fluxo e a&ccedil;&otilde;es esperadas: Qualquer usu&aacute;rio poder&aacute; navegar pela plataforma, por&eacute;m, para adicionar ou editar informa&ccedil;&otilde;es, precisar&aacute; criar um cadastro de usu&aacute;rio nela.</p>
<p><strong>Inspira&ccedil;&otilde;es</strong>:</p>
<p>https://www.uplabs.com/search?q=sign%20up<br />https://www.uplabs.com/search?q=register<br />https://www.uplabs.com/search?q=social%20login<br />Dicas e outras informa&ccedil;&otilde;es: caso o squad tenha interesse, poder&aacute; tamb&eacute;m usar cadastro/login utilizando redes sociais que possuem APIs, como Facebook e Google.</p>
<p><strong>Links &uacute;teis:</strong></p>
<p>Login com Google - https://developers.google.com/identity/sign-in/web/sign-in;<br />Login com Facebook - https://developers.facebook.com/docs/facebook-login?locale=pt_B R<br />Login social com Auth0 - https://auth0.com/learn/social-login/</p>
<p><strong>AUTENTICA&Ccedil;&Atilde;O/LOGIN</strong></p>
<p>Atributos:</p>
<ul>
<li>E-mail;</li>
<li>Senha;</li>
<li>Links (ou bot&otilde;es)para redefinir senha e cadastro.</li>
</ul>
<p>Fluxo e a&ccedil;&otilde;es esperadas: aplicar um processo de autentica&ccedil;&atilde;o simples, por meio do qual usu&aacute;rios possam acessar determinadas funcionalidades da plataforma utilizando e-mail e senha.</p>
<p>Inspira&ccedil;&otilde;es:</p>
<p>https://www.uplabs.com/search?q=login<br />https://www.uplabs.com/search?q=social%20login<br />Dicas e outras informa&ccedil;&otilde;es: lembrem-se de contemplar erros e fluxos diferentes do usual que podem ocorrer por parte dos usu&aacute;rios, como inser&ccedil;&atilde;o errada de senha, diferencia&ccedil;&atilde;o de letras mai&uacute;sculas e min&uacute;sculas, etc.</p>
<p><strong>ESQUECI MINHA SENHA</strong></p>
<p>Atributos:</p>
<ul>
<li>E-mail - na tela para solicitar redefini&ccedil;&atilde;o de senha;</li>
<li>Senha - na tela para criar uma nova senha.</li>
<li>Fluxo e a&ccedil;&otilde;es esperadas: usu&aacute;rio insere endere&ccedil;o de e-mail para redefinir senha e recebe um e-mail com as instru&ccedil;&otilde;es para redefini&ccedil;&atilde;o e link para direcion&aacute;-lo &agrave; tela onde ele inserir&aacute; a nova senha.</li>
</ul>
<p>Inspira&ccedil;&otilde;es:</p>
<p>https://www.uplabs.com/search?q=forget%20password<br />Dicas e outras informa&ccedil;&otilde;es: lembrem-se de analisar a seguran&ccedil;a do processo de redefini&ccedil;&atilde;o de senha.</p>
<p><strong>MAIN PAGE - BUSCA DE PETS</strong></p>
<p>Atributos:</p>
<ul>
<li>P&aacute;gina com lista de pets nas seguintes categorias:
<ul>
<li>Achados &ndash; para pets que possivelmente tenham donos e tenham sido encontrados nas ruas;</li>
<li>Perdidos &ndash; para pets que fugiram ou foram roubados, e possuem uma fam&iacute;lia &agrave; procura deles;</li>
<li>Ado&ccedil;&atilde;o &ndash; para pets resgatados das ruas ou de situa&ccedil;&atilde;o de maus tratos e que est&atilde;o &agrave; espera de um lar.</li>
</ul>
</li>
<li>Exemplos de filtros e pesquisas que podem ser explorados (a crit&eacute;rio do squad);</li>
<li>Esp&eacute;cie de pet &ndash; cachorro, gato, rato, cavalo, papagaio, etc;</li>
<li>Porte - pequeno, m&eacute;dio, grande;</li>
<li>Sexo - macho, f&ecirc;mea;</li>
<li>Data da postagem - per&iacute;odo que o animal foi postado (exemplo: de 13&frasl;10-15&frasl;10);</li>
<li>Categoria - achados, perdidos, ado&ccedil;&atilde;o;</li>
<li>Localiza&ccedil;&atilde;o - filtro por cidade, estado, dist&acirc;ncia, ou outras formas que julgarem interessantes;</li>
<li>Nome - busca por nome do pet.</li>
</ul>
<p>As informa&ccedil;&otilde;es de cada pet que ser&atilde;o mostradas na p&aacute;gina principal ficam a crit&eacute;rio do squad.<br /><br />Fluxo e a&ccedil;&otilde;es esperadas: Ao acessar o site, o usu&aacute;rio dever&aacute; conseguir navegar entre as categorias descritas, filtrar pets quando necess&aacute;rio, acessar mais informa&ccedil;&otilde;es dos pets, criar cadastro e realizar login.</p>
<p>Inspira&ccedil;&otilde;es:</p>
<p>https://www.petfinder.com/<br />https://www.adoptapet.com/dog-adoption<br />https://www.petsmartcharities.org/adopt-a-pet/find-a-pet<br />http://petango.com/<br />https://www.puppyfi.com/anuncios<br />http://www.adotebicho.com.br/</p>
<p>Dicas e outras informa&ccedil;&otilde;es: esta &eacute; uma das telas mais importantes da plataforma, portanto busquem construir uma experi&ecirc;ncia agrad&aacute;vel e f&aacute;cil para seus usu&aacute;rios. Busquem exemplos e inspira&ccedil;&otilde;es e lembrem-se: nem sempre as inspira&ccedil;&otilde;es precisam vir de plataformas concorrentes. Exemplos: AirBnB ou App Store podem servir de inspira&ccedil;&otilde;es para o projeto, em especial ao analisarmos o fluxo de busca e navega&ccedil;&atilde;o para acessar determinado app (App Store) ou hospedagem ( AirBnB).</p>
<p><strong>P&Aacute;GINA DO PET</strong></p>
<p>Atributos:</p>
<ul>
<li>Informa&ccedil;&otilde;es do pet- apresentar as informa&ccedil;&otilde;es cadastradas sobre o pet;</li>
<li>Coment&aacute;rios - n&atilde;o obrigat&oacute;rio, por&eacute;m uma boa sugest&atilde;o &eacute; permitir que as pessoas comentem na p&aacute;gina do pet. Para n&atilde;o precisar criar uma funcionalidade de coment&aacute;rios do zero, uma boa op&ccedil;&atilde;o &eacute; o uso do Disqus, um plugin muito usado em p&aacute;ginas da internet, veja esse exemplo em uso.</li>
<li>Compartilhamento social - item tamb&eacute;m n&atilde;o obrigat&oacute;rio, por&eacute;m boa alternativa para compartilhamento r&aacute;pido atrav&eacute;s de bot&otilde;es para compartilhar em WhatsApp, Facebook, Twitter, etc.</li>
<li>Fluxo e a&ccedil;&otilde;es esperadas: p&aacute;gina que permita visualizar os dados do pet.<br />Inspira&ccedil;&otilde;es: busquem exemplos em e-commerces e outras plataformas que possam apresentar informa&ccedil;&otilde;es detalhadas sobre determinado item. Exemplo: Webmotors, Mercado Livre, Americanas.com, etc.</li>
<li>Dicas e outras informa&ccedil;&otilde;es: lembrem de pensar na hierarquia das informa&ccedil;&otilde;es, quais devem ter mais relev&acirc;ncia frente &agrave;s outras.</li>
</ul>
<p><strong>PERFIL &amp; CONFIGURA&Ccedil;&Otilde;ES</strong></p>
<p>Atributos:</p>
<ul>
<li>Editar Perfil - permitir edi&ccedil;&atilde;o dos dados cadastrados;</li>
<li>Adicionar Pet - permitir adicionar pets por essa p&aacute;gina (fica a crit&eacute;rio do squad adicionar essa a&ccedil;&atilde;o em outras p&aacute;ginas da plataforma, caso julguem importante);</li>
<li>Visualizar Pets - visualizar lista de pets cadastrados pelo usu&aacute;rio;</li>
<li>Editar Pets - permitir a edi&ccedil;&atilde;o de pets cadastrados pelo usu&aacute;rio.</li>
</ul>
<p>Fluxo e a&ccedil;&otilde;es esperadas: p&aacute;gina que permita altera&ccedil;&otilde;es de dados pessoais, gest&atilde;o de animais cadastrados, etc.</p>
<p>Inspira&ccedil;&otilde;es: busquem exemplos em apps e plataformas que permitam adicionar e excluir itens e que tenham perfil, como Mercado Livre, AirBnB, etc.</p>
<p>Dicas e outras informa&ccedil;&otilde;es: caso desejem, outras funcionalidades e detalhes podem ser adicionados nessa p&aacute;gina, por&eacute;m levem sempre em considera&ccedil;&atilde;o o que o usu&aacute;rio estar&aacute; buscando ao acessar essa p&aacute;gina.</p>
<p><strong>ADICIONAR PET</strong></p>
<p>Atributos:</p>
<ul>
<li>Foto(s) do animal - podendo ser uma ou mais fotos, sendo a crit&eacute;rio do squad;</li>
<li>Tipo de pet &ndash; cachorro, gato, rato, cavalo, papagaio, etc;</li>
<li>Porte - pequeno, m&eacute;dio, grande;</li>
<li>Sexo - macho, f&ecirc;mea;</li>
<li>Categoria - achados, perdidos, ado&ccedil;&atilde;o;</li>
<li>Localiza&ccedil;&atilde;o - localiza&ccedil;&atilde;o do pet;</li>
<li>Descri&ccedil;&atilde;o - informa&ccedil;&otilde;es adicionais sobre o pet;</li>
<li>Contato - e-mail, telefone, ou outra forma de contato que o squad definir.</li>
</ul>
<p>Fluxo e a&ccedil;&otilde;es esperadas: Permitir que o usu&aacute;rio possa adicionar novos pets na plataforma.<br />Inspira&ccedil;&otilde;es:</p>
<p>https://www.uplabs.com/search?q=adoption<br />https://www.uplabs.com/search?q=add</p>
<p>Dicas e outras informa&ccedil;&otilde;es: lembrem-se de considerar diferentes fluxos de navega&ccedil;&atilde;o, como por exemplo: usu&aacute;rios n&atilde;o logados, logados, atrav&eacute;s da p&aacute;gina principal, vindos de outras p&aacute;ginas, etc.</p>
<p><strong>EDITAR/EXCLUIR PET</strong></p>
<p>Atributos:</p>
<ul>
<li>Excluir - excluir pet da plataforma;</li>
<li>Editar - alterar informa&ccedil;&otilde;es previamente cadastradas para determinado pet;</li>
<li>Alterar status - para metrificar a evolu&ccedil;&atilde;o dos resultados da plataforma, adicione diferentes status para cada categoria.</li>
<li>Sugest&otilde;es:
<ul>
<li>Encontrados: Achei meu dono; Estou procurando meu dono; Fui adotado por um novo dono;</li>
<li>Procura-se: Encontrei meu pet; Estou &agrave; procura.</li>
<li>Ado&ccedil;&atilde;o: Adotado; Para adotar.</li>
</ul>
</li>
</ul>
<p>Fluxo e a&ccedil;&otilde;es esperadas: permitir que usu&aacute;rios excluam ou editem pets cadastrados por eles.</p>
<p>Inspira&ccedil;&otilde;es: Busquem exemplos em apps e plataformas que permitam adicionar e excluir itens, como Mercado Livre, OLX, AirBnB, etc.</p>
<p>Dicas e outras informa&ccedil;&otilde;es: pensem em formas que facilitem altera&ccedil;&otilde;es de status ou edi&ccedil;&otilde;es nos pets.</p>
<p><strong>OUTRAS FUNCIONALIDADES</strong></p>
<p>Cada squad tem total liberdade para pensar em novas funcionalidades ou upgrades em outras funcionalidades j&aacute; descritas neste documento, por&eacute;m considerem os prazos e a qualidade da entrega.</p>
