# Configurar navegador

Necessário abrir o firefox com `about:config` e alterar o seguinte atributo para false
```
security.mixed_content.block_active_content
```
# Abrir navegador firefox
```
http://localhost:2500
```
# Docker

Necessário primeiramente construir a imagem com o comando:
```
docker build -t mestihudson/latex:0.1.0 .
```
Para iniciar o servidor basta:
```
docker-compose down --volumes --remove-orphans && docker-compose up
```
