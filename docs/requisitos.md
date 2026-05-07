# Documento de Requisitos

---

## 📄 1. Visão do Produto

### 1.1 Objetivo

O aplicativo tem como objetivo permitir o registro, organização e consulta de anotações relacionadas a livros (especialmente webnovels), de forma estruturada, rápida e totalmente offline, substituindo o uso de blocos de notas genéricos.

### 1.2 Problema que resolve

Atualmente, anotações sobre diferentes livros são registradas em ferramentas genéricas, como blocos de notas simples, o que resulta em desorganização, dificuldade de localização de informações específicas e ausência de mecanismos de busca e filtragem eficientes.
Com o aumento da quantidade de anotações e obras, a recuperação de conteúdo torna-se lenta e frustrante.

### 1.3 Público-alvo

Usuários individuais que desejam registrar e organizar anotações pessoais sobre livros, especialmente leitores frequentes de webnovels, que lidam com grande volume de informações e precisam de acesso rápido e estruturado.

### 1.4 Proposta de valor

O aplicativo oferece uma forma simples e organizada de associar anotações a livros específicos, permitindo buscas rápidas e navegação estruturada, mantendo todos os dados localmente no dispositivo, sem necessidade de conexão com internet ou criação de conta.

## 📄 2. Escopo do Produto

### 2.1 Escopo da Versão 1 (MVP)

A primeira versão do aplicativo terá como foco a organização local de anotações associadas a livros, com funcionalidades essenciais para cadastro, edição, exclusão e busca de informações.

#### 📚 Gerenciamento de Livros

- Cadastrar livros
- Editar livros
- Excluir livros
- Listar livros

#### 📝 Gerenciamento de Anotações

- Criar anotações vinculadas a um livro
- Editar anotações
- Excluir anotações
- Listar anotações de um livro

#### 🔍 Busca

##### Buscar livros por:

- título
- autor
- gênero

##### Buscar anotações por:

- conteúdo (texto simples)

#### 💾 Backup

- Exportar todos os dados (livros + anotações) para JSON
- Importar dados a partir de JSON

### 2.2 Fora de Escopo (Versão 1)

As funcionalidades abaixo estão previstas para evolução futura, mas não fazem parte da primeira versão do sistema.

- Autenticação de usuários
- Sincronização em nuvem
- Upload de imagens de capa
- Sistema de tags em anotações
- Busca avançada (FTS)
- Filtros complexos (ex: múltiplos critérios combinados)
- Compartilhamento de dados

## 📄 3. Premissas e Restrições

### 3.1 Premissas

- O sistema será utilizado por um único usuário por dispositivo, sem necessidade de autenticação ou múltiplos perfis.

- O aplicativo funcionará de forma totalmente offline na versão inicial, não dependendo de conexão com internet para suas funcionalidades principais.

- Os dados serão armazenados exclusivamente no dispositivo do usuário, utilizando banco de dados local.

- O volume de dados esperado na versão inicial será moderado (dezenas de livros e suas respectivas anotações), não exigindo otimizações avançadas de performance.

- O aplicativo será utilizado como ferramenta pessoal de organização de leituras, sem necessidade de compartilhamento de dados entre usuários.

- O sistema será projetado considerando possível evolução futura para sincronização com backend, embora essa funcionalidade não faça parte da versão inicial.

- O usuário será responsável por realizar exportações manuais dos dados para fins de backup e recuperação.

### 3.2 Restrições Técnicas

- O aplicativo será desenvolvido utilizando React Native com Expo.

- O armazenamento de dados será realizado localmente utilizando SQLite.

- A aplicação será desenvolvida inicialmente apenas para a plataforma Android.

- O sistema não contará com backend na versão inicial.

- A aplicação deverá funcionar sem dependência de serviços externos.

## 📄 4. Funcionalidades (Épicos e Features)

### 4.1 Épicos

Os épicos representam agrupamentos de funcionalidades relacionadas, organizando o sistema em grandes blocos funcionais.

- **Gerenciamento de Livros:** responsável pelo ciclo de vida dos livros cadastrados no sistema.
- **Gerenciamento de Anotações:** responsável pela criação, edição e organização das anotações associadas aos livros.
- **Busca:** responsável pela localização de livros e anotações com base em critérios definidos.
- **Backup e Restauração:** responsável pela exportação e importação dos dados do sistema.

### 4.2 Features por Épico

As features descrevem as funcionalidades do sistema em um nível intermediário, sem detalhamento técnico.

#### Gerenciamento de Livros

- Criar um novo livro
- Editar informações de um livro existente
- Excluir um livro
- Listar todos os livros cadastrados
- Visualizar detalhes de um livro

#### Gerenciamento de Anotações

- Criar anotação vinculada a um livro
- Editar anotação
- Excluir anotação
- Listar anotações de um livro
- Visualizar conteúdo completo de uma anotação

#### Busca

- Buscar livros por título
- Buscar livros por autor
- Buscar livros por gênero
- Buscar anotações por conteúdo textual

#### Backup e Restauração

- Exportar todos os dados (livros e anotações) para arquivo JSON
- Importar dados a partir de arquivo JSON

## 📄 5. Histórias de Usuário

As histórias de usuário descrevem as principais interações do usuário com o sistema, focando nas ações que podem ser realizadas e no valor gerado por essas ações.

Elas são utilizadas para representar os requisitos funcionais de forma orientada ao uso, permitindo uma compreensão clara do comportamento esperado do sistema sob a perspectiva do usuário.

As histórias de usuário não detalham regras específicas, validações ou exceções, que serão definidas posteriormente por meio de critérios de aceitação.

### 5.1 Gerenciamento de Livros

#### Cadastro de Livro

Como usuário
Quero cadastrar um livro com suas informações básicas
Para organizar minhas leituras e consultá-las posteriormente

#### Listagem de Livros

Como usuário
Quero visualizar a lista de livros cadastrados
Para acompanhar e acessar minhas leituras

#### Detalhes do Livro

Como usuário
Quero visualizar os detalhes de um livro
Para verificar suas informações e acessar suas anotações

### 5.2 Gerenciamento de Anotações

#### Cadastro de Anotação

Como usuário
Quero criar uma anotação vinculada a um livro
Para registrar informações relevantes sobre a leitura

#### Listagem de Anotações

Como usuário
Quero visualizar as anotações de um livro
Para consultar rapidamente as informações registradas

#### Edição de Anotação

Como usuário
Quero editar uma anotação
Para corrigir ou atualizar seu conteúdo

### 5.3 Busca

#### Busca de Livros

Como usuário
Quero buscar livros por título, autor ou gênero
Para localizar rapidamente uma obra específica

#### Busca de Anotações

Como usuário
Quero buscar anotações por conteúdo
Para encontrar informações específicas registradas anteriormente

### 5.4 Backup e Restauração

#### Exportação de Dados

Como usuário
Quero exportar meus dados
Para realizar backup das minhas informações

#### Importação de Dados

Como usuário
Quero importar dados de um arquivo
Para restaurar minhas informações no aplicativo

## 📄 6. Critérios de Aceitação

### 6.1 Introdução

Os critérios de aceitação definem as condições que devem ser atendidas para que uma funcionalidade seja considerada concluída com sucesso.

Eles detalham o comportamento esperado do sistema, incluindo regras, validações e respostas a diferentes cenários, complementando as histórias de usuário.

Os critérios são descritos no formato “Dado / Quando / Então”, permitindo uma definição clara e testável das funcionalidades.

### 6.2 Gerenciamento de Livros

#### Cadastro de Livro

##### Critério 1 — Sucesso no cadastro

Dado que estou na tela de cadastro de livro
Quando informo um título válido
Então o livro deve ser salvo no sistema

##### Critério 2 — Validação de campo obrigatório

Dado que estou na tela de cadastro de livro
Quando tento salvar sem informar o título
Então o sistema deve impedir o cadastro e exibir uma mensagem de erro

##### Critério 3 — Persistência dos dados

Dado que um livro foi cadastrado com sucesso
Então ele deve aparecer na lista de livros

##### Critério 4 — Comportamento após salvar

Dado que um livro foi cadastrado com sucesso
Então o usuário deve ser redirecionado para a lista de livros

### 6.3 Gerenciamento de Anotações

#### Cadastro de Anotação

##### Critério 1 — Criação com sucesso

Dado que estou na tela de criação de anotação de um livro
Quando informo um conteúdo válido
Então a anotação deve ser salva vinculada ao livro

##### Critério 2 — Associação obrigatória com livro

Dado que estou visualizando um livro
Quando crio uma anotação
Então a anotação deve ser associada automaticamente a esse livro

##### Critério 3 — Validação de conteúdo obrigatório

Dado que estou na tela de criação de anotação
Quando tento salvar sem informar conteúdo
Então o sistema deve impedir o cadastro e exibir uma mensagem de erro

##### Critério 4 — Persistência na lista

Dado que uma anotação foi criada com sucesso
Então ela deve aparecer na lista de anotações do livro correspondente

##### Critério 5 — Comportamento após salvar

Dado que uma anotação foi criada com sucesso
Então o usuário deve retornar para a lista de anotações do livro

### 6.4 Busca

#### Busca de Anotações

##### Critério 1 — Busca por conteúdo

Dado que existem anotações cadastradas
Quando informo um termo de busca
Então o sistema deve retornar as anotações que contenham esse termo

##### Critério 2 — Busca parcial

Dado que existem anotações com palavras maiores
Quando informo parte de uma palavra
Então o sistema deve retornar anotações que contenham essa correspondência parcial

##### Critério 3 — Case insensitive

Dado que existem anotações cadastradas
Quando informo um termo de busca em qualquer combinação de maiúsculas e minúsculas
Então o sistema deve retornar resultados independentemente da capitalização

##### Critério 4 — Busca sem resultados

Dado que não existem anotações que correspondam ao termo informado
Então o sistema deve informar que nenhum resultado foi encontrado

##### Critério 5 — Atualização dinâmica dos resultados

Dado que estou realizando uma busca
Quando altero o termo de busca
Então a lista de resultados deve ser atualizada conforme o novo termo

### 6.5 Backup e Restauração

#### Importação de Dados

##### Critério 1 — Seleção de arquivo

Dado que o usuário deseja importar dados
Quando seleciona um arquivo JSON válido
Então o sistema deve permitir iniciar o processo de importação

##### Critério 2 — Confirmação antes de sobrescrever

Dado que existem dados já cadastrados no sistema
Quando o usuário inicia a importação
Então o sistema deve solicitar confirmação antes de substituir os dados existentes

##### Critério 3 — Substituição dos dados

Dado que o usuário confirmou a importação
Quando o processo é concluído
Então todos os dados anteriores devem ser substituídos pelos dados do arquivo

##### Critério 4 — Importação bem-sucedida

Dado que o arquivo JSON está em formato válido
Quando a importação é realizada
Então os livros e suas respectivas anotações devem ser carregados corretamente no sistema

##### Critério 5 — Tratamento de erro (arquivo inválido)

Dado que o arquivo selecionado está inválido ou corrompido
Quando o usuário tenta importar
Então o sistema deve exibir uma mensagem de erro e não alterar os dados existentes

##### Critério 6 — Atualização após importação

Dado que a importação foi realizada com sucesso
Então a interface do sistema deve refletir os novos dados importados

#### Exportação de Dados

##### Critério 1 — Geração do arquivo

Dado que o usuário deseja exportar seus dados
Quando inicia o processo de exportação
Então o sistema deve gerar um arquivo no formato JSON contendo todos os dados

##### Critério 2 — Conteúdo completo

Dado que existem livros e anotações cadastrados
Quando a exportação é realizada
Então o arquivo deve conter todos os livros e suas respectivas anotações

##### Critério 3 — Estrutura consistente

Dado que a exportação foi realizada
Então o arquivo JSON deve possuir uma estrutura válida e compatível com o processo de importação

##### Critério 4 — Dados vazios

Dado que não existem dados cadastrados
Quando o usuário realiza a exportação
Então o sistema deve informar que não há dados a serem exportados

##### Critério 5 — Sucesso na exportação

Dado que a exportação foi concluída com sucesso
Então o sistema deve informar ao usuário que o backup foi realizado

##### Critério 6 — Acesso ao arquivo

Dado que a exportação foi realizada
Então o usuário deve conseguir acessar ou compartilhar o arquivo gerado

## 📄 7. Requisitos Não Funcionais

### 7.1 Introdução

Os requisitos não funcionais definem características de qualidade, restrições e comportamentos esperados do sistema, complementando os requisitos funcionais.

Esses requisitos descrevem como o sistema deve operar em termos de usabilidade, desempenho, confiabilidade, arquitetura e compatibilidade.

### 7.2 Usabilidade

- O aplicativo deve possuir fluxo de navegação simples e intuitivo.

- As principais funcionalidades devem ser acessíveis com o menor número possível de interações.

- A interface deve priorizar organização visual e facilidade de utilização.

- O sistema deve minimizar a quantidade de telas e etapas necessárias para execução das ações principais.

### 7.3 Desempenho

- As operações de busca devem apresentar resultados de forma rápida e responsiva para o volume de dados previsto na versão inicial.

- O sistema deve manter funcionamento fluido durante operações de cadastro, edição, exclusão e busca de dados.

### 7.4 Persistência e Confiabilidade

- Os dados cadastrados devem permanecer armazenados localmente mesmo após o fechamento do aplicativo.

- O sistema deve garantir integridade dos dados durante operações de importação e exportação.

- O sistema deve exigir confirmação explícita do usuário antes de sobrescrever dados existentes durante a importação.

### 7.5 Funcionamento Offline

- O aplicativo deve funcionar integralmente sem conexão com internet na versão inicial.

- Funcionalidades principais, como cadastro, edição, busca e visualização de dados, devem estar disponíveis offline.

- Funcionalidades futuras poderão utilizar conexão com internet, especialmente recursos relacionados à sincronização em nuvem.

### 7.6 Arquitetura e Manutenibilidade

- O sistema deve seguir separação de responsabilidades entre interface, regras de negócio e acesso a dados.

- A arquitetura do projeto deve facilitar futuras evoluções, incluindo possível integração com backend remoto.

- O código deve ser organizado de forma modular para facilitar manutenção e escalabilidade futura.

### 7.7 Compatibilidade

- O aplicativo será desenvolvido inicialmente para dispositivos Android.

- A arquitetura do sistema deve permitir futura adaptação para outras plataformas compatíveis com React Native.

## 📄 8. Modelo de Dados

### 8.1 Introdução

O modelo de dados define as principais entidades do sistema, seus atributos e relacionamentos, servindo como base para persistência das informações da aplicação.

A estrutura foi projetada considerando simplicidade para a versão inicial, mantendo compatibilidade com futuras evoluções, como sincronização em nuvem, upload de imagens e expansão das funcionalidades de busca.

**O sistema possui duas entidades principais:**

- Livro

- Anotação

### 8.2 Entidades Principais

#### Livro

Representa uma obra cadastrada pelo usuário, contendo suas informações básicas e servindo como agrupador das anotações relacionadas.

#### Anotação

Representa um registro textual associado a um livro, utilizado para armazenar observações, comentários ou informações relevantes sobre a leitura.

### 8.3 Estrutura da Entidade Livro

| Campo           | Tipo     | Obrigatório | Descrição                               |
| --------------- | -------- | ----------- | --------------------------------------- |
| id              | UUID     | Sim         | Identificador único do livro            |
| titulo          | String   | Sim         | Título da obra                          |
| autor           | String   | Não         | Nome do autor da obra                   |
| genero          | String   | Não         | Gênero literário da obra                |
| estado          | String   | Não         | Estado de leitura do livro              |
| ano_publicacao  | Integer  | Não         | Ano de publicação da obra               |
| imagem_capa_uri | String   | Não         | Caminho ou referência da imagem de capa |
| criado_em       | DateTime | Sim         | Data de criação do registro             |
| atualizado_em   | DateTime | Sim         | Data da última atualização do registro  |

#### Valores sugeridos para `estado`

- lendo
- concluído
- planejado
- pausado

### 8.4 Estrutura da Entidade Anotação

| Campo         | Tipo     | Obrigatório | Descrição                              |
| ------------- | -------- | ----------- | -------------------------------------- |
| id            | UUID     | Sim         | Identificador único da anotação        |
| livro_id      | UUID     | Sim         | Referência ao livro associado          |
| titulo        | String   | Não         | Título resumido da anotação            |
| conteudo      | String   | Sim         | Conteúdo textual da anotação           |
| criado_em     | DateTime | Sim         | Data de criação da anotação            |
| atualizado_em | DateTime | Sim         | Data da última atualização da anotação |

### 8.5 Relacionamentos

O sistema possui um relacionamento de um-para-muitos entre livros e anotações.

- Um livro pode possuir várias anotações
- Uma anotação pertence obrigatoriamente a um único livro

**Representação lógica:**
`Livro (1) -------- (N) Anotação`

### 8.6 Considerações de Persistência

- Os identificadores das entidades serão gerados utilizando `UUID`.

- Os dados serão armazenados localmente utilizando SQLite.

- As datas de criação e atualização serão utilizadas para controle de persistência, ordenação e futuras evoluções do sistema.

- A estrutura do modelo foi projetada para permitir futura integração com backend remoto e sincronização em nuvem.

- O campo `imagem_capa_uri` permitirá futura expansão para suporte a imagens personalizadas e armazenamento remoto.

## 📄 9. Evoluções Futuras

### 9.1 Introdução

A arquitetura e estrutura do sistema foram planejadas considerando possibilidade de evolução futura da aplicação, permitindo expansão gradual das funcionalidades sem necessidade de reconstrução completa do projeto.

As funcionalidades descritas nesta seção não fazem parte da versão inicial do aplicativo, mas representam possíveis melhorias e expansões futuras.

### 9.2 Funcionalidades Futuras

#### Sincronização em Nuvem

- Permitir sincronização de livros e anotações entre múltiplos dispositivos.
- Possibilitar recuperação de dados utilizando armazenamento remoto.

#### Autenticação de Usuários

- Permitir criação e autenticação de contas de usuário.
- Garantir associação segura dos dados a cada usuário autenticado.

#### Upload de Imagens de Capa

- Permitir que o usuário personalize a capa dos livros utilizando imagens locais ou remotas.

#### Rich Text em Anotações

- Permitir formatação avançada de texto nas anotações, incluindo estilos, listas e destaques.

#### Sistema de Tags

- Permitir categorização de anotações através de tags personalizadas.

#### Busca Avançada

- Implementar mecanismos avançados de busca utilizando indexação textual (FTS).
- Melhorar desempenho e relevância dos resultados de pesquisa.

#### Filtros Avançados

- Permitir combinação de múltiplos critérios de filtragem.
- Possibilitar organização por estado, gênero, data e outros atributos.

#### Organização e Personalização

- Permitir ordenação customizada de livros e anotações.
- Possibilitar criação de coleções ou agrupamentos personalizados.

#### Estatísticas de Leitura

- Exibir informações relacionadas ao progresso e hábitos de leitura do usuário.

#### Compatibilidade com iOS

- Expandir suporte da aplicação para dispositivos iOS.

#### Backup Automático

- Permitir exportação automática periódica dos dados.
- Disponibilizar opção para ativação ou desativação da funcionalidade pelo usuário.

### 9.3 Evoluções Técnicas

- Possível migração parcial ou completa para arquitetura com backend remoto.

- Implementação de sincronização incremental entre dispositivo e servidor.

- Evolução da estrutura de persistência para suportar maior volume de dados e múltiplos dispositivos.

- Expansão da arquitetura modular para suportar novas funcionalidades sem impacto significativo nas funcionalidades existentes.

---
