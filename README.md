Levando em consideração a página que foi especificada:

Crie um cenário onde clicamos nos botões "One", "Two, e "Four", depois verifique a ausência dos mesmos.

Dentro da mesma página, clique nos botões "One", "Two" e "Four" que encontram-se dentro do painel "IFRAME BUTTONS" e valide a não-presença dos mesmos.

No cenário final, iremos preencher o campo "YourFirstName" com um texto qualquer. Clique no botão "One", cheque a opção "OptionThree", selecione a opção "ExampleTwo" dentro da select box, e valide a presença da imagem do logo do "Selenium Webdriver".

Documente as versões das ferramentas utilizadas (O.S, Ruby, Firefox, Geckodriver, Chromedriver, etc.) e crie um step-by-step informando como configurar e utilizar esse ambiente, levando em conta a possibilidade de alguma pessoa iniciante dar continuidade em um projeto feito por você. Documente as versões das ferramentas utilizadas (googlechrome, node js 16.15 lts, vs studio, cypress v10.1.0)

============ Configurações =================================

#Instale em sua máquina: Visual Studio Code Node js LTS Browser

step 1: Após instalado o Node Js, abra seu Visual Studio Code e execute o comando no 'Terminal', para instalação dos node_modules: step 2:  npm init -y step 4: Em seguida execute o comando de instalação do Cypress: step 5:  npm i cypress --save--include=dev step 6: Após terminado, será necessário a instalação do cypress-iframe, que será usado para busca dos componentes da tela no DOM, execute o seguinte comando: step 7: $ npm install cypress-iframe step 8: Concluído, execute o comando que irá iniciar o projeto Cypress e instalar os resto das dependências, o mesmo comando será utilizado para iniciar o projeto: step 9:  npx cypress open irá aparecer uma tela que terpa de escolher a opção 'E2E Testing', depois de selecionado, você vai marcar a opção Start E2E Testing in .

#Versões do utilizadas no projeto: Visual Studio Code v17.2 Node Js v16.15 Google Chrome v102.0.5005.63 Cypress v10.1 Cypress i-frame v1.0

============ Utilização ===================================

e2e: É onde se encontra os arquivos de scripts dos testes. cypress.config.json: É onde incluiremos algumas configurações do projeto, Plugins: Com eles é possível trocar, modificar ou estender o comportamento interno do Cypress. Support: Criar comandos que podem ser executados dentro dos testes ou sobrescrever comandos já existentes. Fixtures: É onde seus mocks são armazenados podendo ser utilizados em qualquer teste.
