## Comando para iniciar o projeto
    * npm run dev - Iniciar o frontend
        - Caso rode algum erro:
            + apague a pasta 'node_modules', comando: rm -r ou rmdir 'node_modules'
            + baixe as dependencias com o comando: npm install
    * python run.py - Iniciar o backend

# Comandos para navegar
    * cd 'nome da pasta' ou '..' para voltar a pasta anterior

# Iniciar um terminal 
    Atalho: 
        * " ctrl + shift + ' "

# Criar um ambiente virtual com o pip
    * pip -m venv 'nome do ambiente'
    Ativar o ambiente
    Windows
        'nome do ambiente/Scripts/activate'
    Linux
        'source "nome do ambiente"/bin/.activate'

# Criar um ambiente virtual com o conda
    * conda create -n 'nome do ambiente'
    Ativar ambiente
    conda activate 'nome do ambiente'

# link do projeto quando iniciar
    @ localhost:8080
    @ ip_local:8080

# Comandos do git
    Atualizar o projeto com o que está na web
        * git pull
    Usar a branch:
        * git checkout 'nome da branch'
    Verificar as branchs existentes:
        * git info
    Adicionar arquivos para subir p/ github
        git status - Para verificar se o arquivo foi enviado
            * Se estiver vermelho não foi enviado ainda
            * Verde significa que já foi enviado
        Passo 1: 
            * git add 'nome do arquivo' ou --all para adicionar todos ao commit
        Passo 2:
            * git commit -m "Mensagem" Para adicionar a mensagem do commit
        Passo 3: 
            * git push -f origin 'nome da branch' (ana_test)