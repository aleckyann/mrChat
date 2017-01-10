# mrChat
Chat com PHP 7 + Jquery 3.1.1 + Medoo 1.1.3

Medoo - medoo.in/
Jquery - https://jquery.com/

1) CRIE UM DB, OU USE O DB DE SUA APLICAÇÃO.
===

2) RODE O SQL:
===
```
CREATE TABLE `chat` (
  `de` int(11) NOT NULL,
  `para` int(11) NOT NULL,
  `mensagem` text NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);
```

3) RODE SUA APP, ex: ` php -S http://localhost:8000 `
===

---
Próxima release:
Sem Jquery - Js puro
Sem Html - Criação de elementos dinâmica
