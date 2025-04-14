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

---

<br>

**Tabs:**
O componente Tabs é um conjunto de abas versátil com o seu conteudo sendo de livre escolha de quem implementa-lo.

Para utilizá-lo, basta chamar a tag \<Tabs> com o fechamento apropriado \<\Tabs>.

**Props:**

- orientation:
  define a orientação dos elementos dentro do componente.<br>
  Aceita os seguintes valores:

<br>

1. horizontal (padrão): alinha os elementos na horizontal.
2. vertical: alinha os elementos na vertical.

<br>
<br>

- children: define o conteúdo do componente, que será exibido dentro dele.

---

<br>

**Heading:**
O componente Heading é um conjunto de cabeçalhos versátil com o seu conteudo sendo de livre escolha de quem implementa-lo.

Para utilizá-lo, basta chamar a tag \<Heading> com o fechamento apropriado \<\Heading>.

**Props:**

- level:
  define o nivel do cabeçalho.<br>
  Aceita os seguintes valores:

<br>

1: cabeçalho de nivel H1. <br>
2: cabeçalho de nivel H2. <br>
3: cabeçalho de nivel H3. <br>
4: cabeçalho de nivel H4. <br>
5: cabeçalho de nivel H5. <br>
6: cabeçalho de nivel H6. <br>

<br>

- weight:
  Define o peso da fonte.<br>
  Aceita os seguintes valores:

<br>

1. extralight.
2. light.
3. normal.
4. medium.
5. semibold.
6. bold.

- children:
  define o conteúdo do componente, que será exibido dentro dele.

---

<br>

**Input:**
O componente Input é um componente personalizado com estilizações se estiver desativado ou com erro.

Para utilizá-lo, basta chamar a tag com o auto fechamento \<Input />.

**Props:**

- hasError (opcional): define se o input possui um erro.<br>
  Aceita os seguintes valores:

1. true
2. false

---

<br>

**InputError:**
O componente InputError é um pequeno texto de erro com icone para ser usado junto ao componente Input.

Para utilizá-lo, basta chamar a tag \<InputError> com o fechamento \</InputError>.

**Props:**

- message:
  define o texto que o componente deve renderizar.

---

<br>

**Notification:**
O componente Notification é uma pequena notificação de sucesso ou falha que aparece a direita da tela.

Para utilizá-lo, basta chamar a tag com o auto fechamento \<Notification />.

**Props:**

- type:
  define o tipo da notificação.<br>
  Aceita os seguintes valores:

1. success.
2. error.

- title:
  define o texto do titulo da notificação.

- body:
  define o texto do corpo da notificação.

- show:
  define se a notificação aparece.<br>
  Aceita os seguintes valores:

1. true.
2. false.

---

<br>
