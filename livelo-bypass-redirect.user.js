// ==UserScript==
// @name         Set livelo_bypass_redirect Cookie
// @namespace    https://github.com/Stanislal/livelo-cookie-script
// @version      1.0
// @description  Define o cookie livelo_bypass_redirect ao carregar a página
// @author       Você
// @match        *://*.livelo.com.br/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.cookie = "livelo_bypass_redirect=livelo_bypass_redirect; path=/; max-age=" + (60 * 60 * 24 * 30);
})();
