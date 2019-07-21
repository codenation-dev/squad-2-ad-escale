# Imagem base do projeto
FROM python:3.7-alpine

# Copia o diretorio da aplicação para o container
ADD application /app

# Define o diretorio de trabalho
WORKDIR /app

# Executa o arquivo principal do projeto
CMD ["python", "main.py"]