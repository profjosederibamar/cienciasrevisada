# 🔬 Ciências Revisada

Plataforma gamificada de vídeos de Ciências para alunos do Ensino Fundamental.  
Os alunos escolhem turma e bimestre, assistem vídeos do YouTube e respondem quizzes para ganhar XP!

---

## 🚀 Como funciona

1. O aluno digita seu nome
2. Escolhe a turma (6° ao 9° Ano)
3. Escolhe o bimestre (1° ao 4°)
4. Assiste os vídeos e responde quizzes
5. Ganha XP, sobe de nível e conquista badges!

---

## 📝 Como adicionar vídeos (Professor)

Edite **apenas** o arquivo `js/data.js`. Para cada vídeo, você precisa:

### 1. Pegue o ID do vídeo no YouTube

A URL do YouTube tem este formato:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                 └── Este é o ID ──┘
```

### 2. Adicione o vídeo no arquivo `js/data.js`

Encontre o ano e bimestre desejado e adicione um novo bloco dentro do array `videos`:

```javascript
{
    id: "COLE_O_ID_AQUI",          // ID do YouTube
    titulo: "Nome do Vídeo",        // Título que aparecerá no app
    assunto: "Tema da Aula",        // Ex: "Ecologia", "Corpo Humano"
    perguntas: [
        {
            pergunta: "Sua pergunta aqui?",
            opcoes: [
                "Alternativa A",
                "Alternativa B",
                "Alternativa C",
                "Alternativa D"
            ],
            correta: 0  // 0=A, 1=B, 2=C, 3=D
        }
    ]
}
```

> **Dica:** Você pode adicionar de 1 a 5 perguntas por vídeo. Cada pergunta correta vale 20 XP!

---

## 🎮 Sistema de Gamificação

| Nível | XP Necessário | Emoji |
|-------|---------------|-------|
| Explorador | 0 | 🔍 |
| Cientista Jr. | 100 | 🧑‍🔬 |
| Cientista | 300 | 👨‍🔬 |
| Pesquisador | 600 | 🔬 |
| Gênio da Ciência | 1000 | 🧠 |
| Mestre da Ciência | 1500 | 🏆 |
| Lenda Científica | 2500 | ⭐ |

**Pontuação:**
- Assistir vídeo: **+10 XP**
- Acertar pergunta do quiz: **+20 XP** cada

---

## 🌐 Deploy no GitHub Pages

1. Crie um repositório no GitHub chamado `cienciasrevisada`
2. Faça upload de todos os arquivos
3. Vá em **Settings → Pages → Source → Branch: main**
4. O site estará disponível em: `https://seuusuario.github.io/cienciasrevisada`

---

## 📁 Estrutura de Arquivos

```
cienciasrevisada/
├── index.html        ← Página principal
├── css/
│   └── style.css     ← Estilos visuais
├── js/
│   ├── data.js       ← 📝 EDITE AQUI para adicionar vídeos
│   └── app.js        ← Lógica do aplicativo
└── README.md         ← Este arquivo
```

---

© 2026 Ciências Revisada — Feito com ❤️ para professores e alunos.
