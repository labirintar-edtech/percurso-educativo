# Percurso Educativo LABirintar

Landing page para inscrição nos Percursos Educativos e Mentorias da rede Labirintar.

## Sobre o Projeto

A formação dos educadores da rede Labirintar é entendida como um processo contínuo, vivo e situado. Esta landing page apresenta o sistema educativo da Labirintar, que se organiza em duas camadas indissociáveis:

- **Percursos Educativos**: Dimensão estruturante e formativa da rede
- **Mentorias**: Acompanhamento contínuo e situado da formação

## Funcionalidades

- Apresentação do sistema educativo da Labirintar
- Informações sobre Percursos Educativos e Mentorias
- Três opções de inscrição:
  - Percurso Educativo — Formação Base da Rede
  - Mentoria e Percurso Pedagógico — Beacon School
  - Mentoria e Percurso Pedagógico — Escola Viva
- Formulário de inscrição com seleção de educadores cadastrados
- Design responsivo e acessível

## Tecnologias

- React 19
- Vite
- TailwindCSS
- Google Fonts (Roboto Slab, Raleway, Aglet Slab)

## Executar Localmente

**Pré-requisitos:** Node.js

1. Instalar dependências:
   ```bash
   npm install
   ```

2. Executar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acessar `http://localhost:5173`

## Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## Deploy

O projeto pode ser servido usando o script fornecido:

```bash
./serve-dist.sh
```

## Estrutura do Projeto

```
percurso-educativo/
├── assets/           # Imagens e recursos
├── components/       # Componentes React
│   ├── icons/       # Ícones personalizados
│   └── RegistrationForm.jsx
├── App.jsx          # Componente principal
├── index.jsx        # Ponto de entrada
└── index.html       # Template HTML
```

## Webhook de Inscrição

As inscrições são enviadas para:
`https://n8n.labirintar.com.br/webhook/percurso-educativo`

Payload:
```json
{
  "name": "Nome do Educador",
  "email": "email@exemplo.com",
  "phoneNumber": "(11) 99999-9999",
  "percurso": "base|beacon|viva"
}
```
