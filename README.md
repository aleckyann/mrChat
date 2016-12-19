# mrChat
Chat com PHP 7 + Jquery 3.1.1 + Medoo 1.1.3

Medoo - medoo.in/
Jquery - https://jquery.com/


BANCO ULTILIZADO: Mysql.

NÚMERO DE TABELAS USADAS PARA CHAT: 1

COLUNAS USADAS NA TABELA: 3


1)
===
```
CREATE TABLE `chat` (
  `de` int(11) NOT NULL,
  `para` int(11) NOT NULL,
  `mensagem` text NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

```


2)
===
```
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

```

3)
===
```
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);
```



---
Próxima release:
Sem Jquery - Js puro
Sem Html - Criação de elementos dinâmica