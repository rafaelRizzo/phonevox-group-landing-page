# Use uma imagem base com Node.js
FROM node:23-alpine

# Crie o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install --legacy-peer-deps

# Copie o resto dos arquivos do projeto para o diretório de trabalho
COPY . .

# Gerando a build no Next.js
RUN npm run build

# Comando para iniciar o aplicativo Next.js quando o contêiner for iniciado
CMD ["npm", "start"]