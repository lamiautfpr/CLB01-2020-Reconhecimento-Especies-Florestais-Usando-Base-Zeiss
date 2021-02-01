<h1 align="center">
  <br>
  <a href="https://www.lamia.sh.utfpr.edu.br/">
    <img src="https://user-images.githubusercontent.com/26206052/86039037-3dfa0b80-ba18-11ea-9ab3-7e0696b505af.png" alt="LAMIA - Laboratório de                  Aprendizagem de Máquina e Imagens Aplicados à Indústria" width="400"></a>
<br> <br>
<h4 align="center"><a href="https://bit.ly/paineldadoscovid19" target="_blank">Protótipo de Reconhecimento de Espécies Florestais </a></h4>
</h1>

<p align="center">
<b>Equipe:</b>  
<br>
Thiago Naves <a href="https://github.com/tfnaves" target="_blank">  (Naves, T. F.)</a> - Coordenador  <br>
Luis Fernando da Rosa<a href="https://github.com/LuisFernandoRosa" target="_blank">  (Luis, F. R.)</a> - Membro Líder <br>
João Pacheco <a href="https://github.com/joaopacheco7" target="_blank">  (João, P.)</a> - Membro <br>
Gustavo Silva Quieregato<a href="https://github.com/L3onT3chh" target="_blank">  (Gustavo, S. Q.)</a> - Novato  <br>
Rafael Lechensque De Aquino<a href="https://github.com/RafaelLechensqueDeAquino" target="_blank">  (Rafael, L. A.)</a> - Novato <br>
Marcos Huang<a href="https://github.com/marcoshuang" target="_blank">  (Marcos, H.)</a> - Novato <br>
Ana Capeletti<a href="https://github.com/ANACAPELETTI" target="_blank">  (Ana, C.)</a> - Novata <br>
</p>

<p align="center">  
<b>Grupo</b>: <a href="https://www.lamia.sh.utfpr.edu.br/" target="_blank">LAMIA - Laboratório de Aprendizado de Máquina e Imagens Aplicados à Indústria </a> <br>
<b>Email</b>: <a href="mailto:lamia-sh@utfpr.edu.br" target="_blank">lamia-sh@utfpr.edu.br</a> <br>
<b>Organização</b>: <a href="http://portal.utfpr.edu.br" target="_blank">Universidade Tecnológica Federal do Paraná</a> <a href="http://www.utfpr.edu.br/campus/santahelena" target="_blank"> - Campus Santa Helena</a> <br>
</p>

<p align="center">
<br>
Status do Projeto: Em desenvolvimento :warning:
</p>

<p align="center">
  <a href="https://www.loom.com/share/078eb1ade510400ea0826053973d385e">
    <img src="https://raw.githubusercontent.com/lamiautfpr/CLB01-2020-Reconhecimento-Especies-Florestais-Usando-Base-Zeiss/master/frontend/src/assets/image_frontend.png" width="900">
  </a>
</p>

___

## Resumo

Arquitetura de Visão Computacional com Deep Learning para classificação de diferentes espécies florestais da Amazônia a partir de fotos macroscópicas da madeira cortada, sendo essa uma ferramenta para identificação rápida e precisa em campo quando identificados cortes e desmatamentos ilegais no bioma, com foco em auxiliar os peritos da polícia federal e florestal a reduzir os crimes contra o bioma Amazônico. 

## Objetivos

## Como Utilizar
Para clonar e rodar está aplicação será necessário o [Git](https://git-scm.com) e o [Python3](https://www.python.org/downloads/) instalados em sua máquina. A partir da linha de comando descrita abaixo será possível clonar este repositório.

```bash
# Clone this repository
$ git clone https://github.com/lamiautfpr/CLB01-2020-Reconhecimento-Especies-Florestais-Usando-Base-Zeiss.git

# Go into the repository
$ cd CLB01-2020-Reconhecimento-Especies-Florestais-Usando-Base-Zeiss/
```
Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use the command prompt from your IDE.

Agora que você já está com o o repositório clonado, será necessário que realize a criação de um ambiente virtual do python para executar o backend através do módulo 'run.py'.

```bash
* Pip

# Create virtualenv
$ virtualenv venv

# Execute virtualenv
$ source venv/bin/activate

* Conda

# Create virtualenv with conda
$ conda create -n virtualenv 

# Execute virtualenv
$ conda activate virtualenv
```

Com o virtual enviroment criado e sendo executa será necessário baixar as bibliotecas presentes no requeriments.txt. Para isso basta utilizar o pip3 para fazer a instalação recursiva de todas as bibliotecas presentes no arquivo de texto. Certifique-se que o shell está no diretório do requeriments. Recomenda-se a utilização da execução em super usuário utilizando sudo.

```bash

# Install all requeriments

* Pip

$ sudo pip3 install -r requeriments.txt

* Conda

# conda install --file requirements.txt 

```

Com a criação do ambiente finalizada, configure o arquivo credentials.json com as credenciais de seu banco de dados e voalá! É só rodar o arquivo main.py para inserir todas as bases em seu banco de dados. É importante lembrar que não se utilize nenhum lint do Python na compilação dos algoritmos, pois o mesmo demonstra alguns bugs para importação de packages.

As bibliotecas utilizadas no projeto estão presentes no arquivo requeriments.txt.

```bash
absl-py==0.11.0
aniso8601==8.1.0
astunparse==1.6.3
cachetools==4.2.0
certifi==2020.12.5
chardet==4.0.0
click==7.1.2
Flask==1.1.2
Flask-Cors==3.0.10
Flask-RESTful==0.3.8
flatbuffers==1.12
gast==0.3.3
grpcio==1.32.0
h5py==2.10.0
idna==2.10
itsdangerous==1.1.0
Jinja2==2.11.2
Keras-Preprocessing==1.1.2
Markdown==3.3.3
MarkupSafe==1.1.1
numpy==1.19.5
oauthlib==3.1.0
opencv-python==4.5.1.48
opt-einsum==3.3.0
Pillow==8.1.0
protobuf==3.14.0
pyasn1==0.4.8
pyasn1-modules==0.2.8
pytz==2020.5
requests==2.25.1
requests-oauthlib==1.3.0
rsa==4.7
six==1.15.0
tensorboard==2.4.1
tensorboard-plugin-wit==1.8.0
tensorflow==2.4.1
tensorflow-estimator==2.4.0
termcolor==1.1.0
typing-extensions==3.7.4.3
urllib3==1.26.2
Werkzeug==1.0.1
wrapt==1.12.1
```

Será preciso que realize a instalação das dependências do frontend, para isso siga as instruções abaixo.

```bash
# Install dependencies npm 
$ npm install
```

Caso haja algum erro, execute os seguintes comandos.

```bash
# Remove folder 'node_modules'
$ rm -rf node_modules

# Reinstall dependencies
$ npm install
```

Dependências do frontend

```bash
vue-cli
axios
bootstrap-vue-cli
```

Com todo o projeto já configurado, execute os comandos abaixo no terminal para rodar o projeto.

```bash
# Backend
$ python run.py

# Frontend
$ npm run dev
```

Obs: O projeto será hospedado localmente utilizando a porta 8080 para o frontend e utilizará a porta 5000 para receber a imagem utilizando o 'axios'.

## Tecnologias

O protótipo utiliza as seguintes bibliotecas e tecnologias:

* [Flask](https://flask.palletsprojects.com/en/1.1.x/) - Executar a API para realizar a comunicação entre o Frontend e o Backend
* [TensorFlow](https://www.tensorflow.org/?hl=pt-br) - Executa o modelo 
* [Keras-Preprocessing](https://keras.io/guides/preprocessing_layers/) - Executa as camadas de pré-processamento de cada entrada 
* [Requests](https://requests.readthedocs.io/en/master/) - Utilizada para fazer requisições HTTP pelo Python.
* [Numpy](https://numpy.org/) - Manipulação dos dados.
* [Vue](https://keras.io/guides/preprocessing_layers/) - Framework utilizado para criar cada componente renderizado pela interface de interação com o usuário (Frontend).

## Citação

Se você utliza e quer citar o projeto em sua pesquisa, por favor utilize o formato de citação abaixo:
    
    @inproceedings{LAMIA_ic02,
      title={Protótipo de Reconhecimento de espécies},
      author={Naves, T. F.; BEUREN, A. T.; BRILHADOR, A.},
      journal={IEEE Conference on Big Data},
      year={2020}
    }
