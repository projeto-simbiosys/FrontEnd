# 🌐 Frontend do Projeto **SIMBIOSYS**

<p align="center">
  <img src="https://imgur.com/6s2lH3n.png" alt="Simbiosys Logo">
</p>

<p align="center">
Interface web oficial do projeto <strong>SIMBIOSYS</strong>, construída para oferecer uma experiência intuitiva, moderna e eficiente.
</p>

---

## ⚙️ **Tecnologias Utilizadas**

- **React.js**
- **Vite**
- **JavaScript / TypeScript** (dependendo da versão do projeto)
- **Axios** para requisições
- **React Router** para navegação
- **TailwindCSS / CSS Modules** (caso aplicável)
- Integração com a API do Backend SIMBIOSYS

---

## 🚀 **1. Clonar o Repositório**

```bash
git clone https://github.com/projeto-simbiosys/FrontEnd
cd FrontEnd
```
## 📦 **2. Instalar Dependências**
```bash
npm install
```
## ▶️ **3. Rodar o Projeto em Desenvolvimento**
```bash
npm run dev
```
## 🏗️ **4. Gerar Build para Produção**
```bash
npm run build
```
## 🌍 **5. Subindo em Produção**

Você pode publicar o build em ambientes como:

Vercel

Netlify

AWS S3 + CloudFront

GitHub Pages

Servidor próprio (Nginx/Apache)

## 🔌 **6. Configuração da API**

Edite a URL da API no arquivo:

src/services/api.js


Exemplo:
```bash
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080"
});
```
