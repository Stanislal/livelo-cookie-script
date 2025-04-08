# Livelo Cookie Script

Este script define automaticamente o cookie `livelo_bypass_redirect` ao carregar páginas do domínio Livelo, permitindo navegar sem ser redirecionado para a nova versão do site.

---

## 🔧 Requisitos

Você precisa da extensão [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=pt-BR) instalada no seu navegador.

---

## 📦 Instalação do Script

Clique no link abaixo para instalar o script diretamente via Tampermonkey:

👉 [Instalar Script](https://github.com/Stanislal/livelo-cookie-script/raw/refs/heads/master/livelo-bypass-redirect.user.js)

---

## 💡 Como funciona?

1. Acesse uma página que esteja sem o redirecionamento habilitado, como por exemplo:  
   [https://livelo.com.br/central-de-ajuda](https://livelo.com.br/central-de-ajuda)

2. O script será executado automaticamente, inserindo o cookie `livelo_bypass_redirect`.

3. A partir daí, sua navegação no site continuará sem o redirecionamento automático para a nova versão.

---

## ✅ Observações

- O cookie tem validade de 30 dias e é inserido sempre que a página for carregada.
- Funciona apenas para domínios `*.livelo.com.br`.

---

## 📄 Licença

Este projeto está sob a licença MIT.
