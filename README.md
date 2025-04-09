# SIMBIOSYS - FrontEnd

Bem vindo ao SimbioSys, uma plataforma de auxilio no cadastro para as instituições sociais! 💙 Nosso objetivo é conectar organizações que cuidam de pessoas em situação de vulnerabilidade a recursos, voluntários e oportunidades que fazem a diferença. Este README irá guiá-lo através das funcionalidades do nosso projeto frontend.

<p align="center">
  <img src="https://imgur.com/6s2lH3n.png" alt="Simbiosys Logo">
</p>

### Componentes existentes:

<br>

**Button:** O componente Button é um botão versátil com diversas variações de estilo.

Para utilizá-lo, basta chamar a tag \<Button> com o fechamento apropriado \<\Button>.

**Props:**

- variant:
  define a aparência e o estilo do botão. <br>
  Aceita os seguintes valores:

<br>

_Institucional:_

1. "inst-primary": Para botões primários com destaque visual.
2. "inst-secondary": Para botões secundários, com bordas.
3. "inst-light": Para botões com estilo de texto simples, sem bordas.
4. "inst-link": Para botões que parecem links.

_sistema:_

5. "sys-primary": Para botões primários com destaque visual.
6. "sys-secondary": Para botões secundários, com bordas.
7. "sys-light": Para botões com estilo de texto simples, sem bordas.
   <br>
   <br>

- children: define o conteúdo do botão, que será exibido dentro dele.

---

<br>

**Menu hamburguer:** O componente Menu Hamburguer é um botão que ao ser clicar abrirá uma sidebar lateral à direita da tela.

Para utilizá-lo, basta chamar a tag \<MenuHamburguer> com o fechamento apropriado \<\MenuHamburguer>.

**Props:**

- children: define o conteúdo do menu hamburguer, que será exibido dentro da sidebar lateral.

---

<br>

**Header:** O componente Header é um cabeçalho versátil com o seu conteudo sendo de livre escolha de quem implementa-lo.

Para utilizá-lo, basta chamar a tag \<Header> com o fechamento apropriado \<\Header>.

**Props:**

- children: define o conteúdo do cabeçalho, que será exibido à direita.

---

<br>

**Footer:** O componente Footer é um rodapé versátil com o seu conteudo sendo de livre escolha de quem implementa-lo.

Para utilizá-lo, basta chamar a tag \<Footer> com o fechamento apropriado \<\Footer>.

**Props:**

- children: define o conteúdo do rodapé, que será exibido entre a logo e as redes sociais.
