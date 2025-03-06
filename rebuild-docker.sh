#!/bin/bash

# Nome do container
CONTAINER_NAME="phonevox-app"

# Nome da imagem
IMAGE_NAME="phonevox-site"

# Atualiza o repositório
echo "Atualizando código do repositório..."
git pull

# Faz o build da nova imagem
echo "Buildando nova imagem..."
docker build -t $IMAGE_NAME .

# Para e remove só o container do site (não todos)
echo "Parando e removendo o container antigo..."
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

# Sobe o novo container com a nova imagem
echo "Subindo novo container..."
docker run -d --restart always -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME

echo "Deploy concluído!"