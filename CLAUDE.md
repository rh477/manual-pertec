# Pertec Móveis — RH | Claude Code OS

## O que é esse workspace

Workspace da Aline, Analista de RH Generalista da Pertec Móveis. Usado para produzir documentos, comunicações, processos e materiais de RH com mais agilidade e qualidade.

**Estrutura de pastas:**
- `_contexto/` — memória do sistema (não apagar)
- `marca/` — logo e guia de identidade visual
- `rh/recrutamento-selecao/` — vagas, triagens, entrevistas
- `rh/treinamentos/` — planos, materiais e registros de treinamento
- `rh/documentos/` — manuais, políticas, normas, manual do colaborador
- `rh/indicadores/` — rotatividade, tempo de contratação, treinamentos
- `rh/comunicacao-interna/` — endomarketing, comunicados, campanhas internas
- `projetos/` — projetos maiores (ex: manual interativo do colaborador)
- `dados/` — planilhas, laudos, arquivos pra análise
- `tarefas.md` — lista de tarefas corrente
- `templates/skills/` — templates de skills prontos pra personalizar com /mapear
- `templates/ferramentas/catalogo.md` — APIs e ferramentas disponíveis pra usar em skills

## Sobre a empresa

Pertec Móveis é uma empresa de venda de móveis e eletrodomésticos com matriz em Fraiburgo-SC e filial em Videira-SC, totalizando 18 colaboradores. O RH é gerido inteiramente pela Aline.

## O que mais fazemos aqui

- Recrutamento e seleção do início ao fim do processo
- Comunicados, políticas e documentos internos para colaboradores
- Manuais e materiais de onboarding e integração
- Relatórios e apresentações de indicadores de RH (rotatividade, treinamentos, tempo de contratação)
- Avaliações de desempenho, PDIs e gestão de clima organizacional
- Materiais de endomarketing e comunicação interna
- Análise de perfil comportamental e suporte a líderes

## Tom de voz

Comunicação clara, objetiva e profissional. Bem estruturada, com uso de tópicos quando necessário. Linguagem acessível aos colaboradores, sem ser informal demais.

Evitar: textos prolixos, confusos, sem clareza prática, linguagem excessivamente técnica sem necessidade.

## Ferramentas

- Excel e Word (uso frequente)
- KOMMO (CRM)

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (se existirem e estiverem configurados):

1. `_contexto/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_contexto/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_contexto/estrategia.md` — foco atual, prioridades, o que pode esperar

Usar essas informações como base pra qualquer resposta ou decisão. Ao sugerir prioridades, formatos ou abordagens, considerar o foco atual descrito em `estrategia.md`.

Para qualquer tarefa visual (carrossel, proposta, slide, landing page), consultar `marca/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe uma skill relevante em `.claude/skills/` ou `.claude/commands/`.
Se encontrar, seguir as instruções da skill.
Se não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma instrução que parece permanente (frases como "na verdade é assim", "não faça mais isso", "prefiro assim", "sempre que...", "evita...", "da próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (quem são os colaboradores, como funciona a empresa, processos, políticas) → adicionar em `_contexto/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato de resposta, o que evitar, como estruturar textos) → adicionar em `_contexto/preferencias.md`
- **Sobre prioridades e foco atual** (projetos em andamento, metas do momento, prazos importantes) → adicionar em `_contexto/estrategia.md`
- **Regra de comportamento nessa pasta** (onde salvar arquivos, como nomear, fluxos específicos) → adicionar no próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar o que foi salvo mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na verdade o arquivo se chama X"). Só perguntar quando a informação tiver valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante no projeto (novo processo, nova skill, mudança de foco, ferramenta instalada, estrutura de pastas alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize os arquivos de memória?"

Se sim, identificar o que precisa atualizar:

- **Novo processo, política, ferramenta, mudança na equipe** → `_contexto/empresa.md`
- **Mudança de prioridade ou foco** → `_contexto/estrategia.md`
- **Correção de tom ou estilo** → `_contexto/preferencias.md`
- **Nova pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Mudança visual (cores, fontes, logo)** → `marca/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais que não mudam o contexto (ex: escrever um comunicado, criar um documento avulso)
- Perguntas simples ou conversas sem ação
- Mudanças que já foram salvas pelo bloco "Aprender com correções"

**Dica:** se não sabe se algo mudou, rode `/atualizar` pra uma varredura completa.

---

## Criação de skills

Quando o usuário pedir pra criar uma nova skill:

1. Verificar se existe um template relevante em `templates/skills/`. Se existir, usar como base e adaptar pro contexto do usuário
2. Perguntar: "Essa skill é específica pra esse projeto ou vai ser útil em qualquer projeto?"
   - Específica desse negócio → salvar em `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Útil em qualquer projeto → salvar em `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_contexto/empresa.md` e `_contexto/preferencias.md` pra calibrar o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, referências, exemplos), criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code
