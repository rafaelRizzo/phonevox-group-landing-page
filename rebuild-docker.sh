#!/bin/bash

# Nome do container
CONTAINER_NAME="phonevox-app"

# Nome da imagem
IMAGE_NAME="phonevox-site"

# Parar todos os containers em execução
echo "Parando todos os containers..."
docker stop $(docker ps -q)

# Remover todos os containers
echo "Removendo todos os containers..."
docker rm $(docker ps -a -q)

# Build da nova imagem
echo "Fazendo o build da nova imagem..."
docker build -t $IMAGE_NAME .

# Rodar o novo container
echo "Rodando o novo container..."
docker run -d --restart always -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME

echo "Processo concluído!"
