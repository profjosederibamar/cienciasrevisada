/* ============================================================
   CIÊNCIAS REVISADA — Dados dos Vídeos
   ============================================================
   
   PROFESSOR: Para adicionar vídeos, siga o modelo abaixo.
   Você precisa inserir APENAS o ID do vídeo do YouTube.
   
   O ID é a parte final da URL do vídeo. Exemplo:
   URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
   ID:  dQw4w9WgXcQ
   
   Para cada vídeo, adicione também:
   - titulo: Nome do vídeo
   - assunto: Tema da aula
   - perguntas: Array de perguntas (mínimo 1, máximo 5)
     - pergunta: Texto da pergunta
     - opcoes: Array com 4 alternativas
     - correta: Índice da resposta certa (0=A, 1=B, 2=C, 3=D)
   ============================================================ */

const VIDEOS_DATA = {
    "6ano": {
        nome: "6° Ano",
        emoji: "🔬",
        cor: "#7c3aed",
        bimestres: {
            "1": {
                titulo: "1° Bimestre",
                icone: "🌱",
                cor: "#10b981",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",  // ← Substitua pelo ID real do vídeo
                        titulo: "Matéria e suas Propriedades",
                        assunto: "Matéria e Energia",
                        perguntas: [
                            {
                                pergunta: "O que é matéria?",
                                opcoes: [
                                    "Tudo que tem massa e ocupa lugar no espaço",
                                    "Apenas coisas que podemos ver",
                                    "Somente objetos sólidos",
                                    "Apenas substâncias líquidas"
                                ],
                                correta: 0
                            },
                            {
                                pergunta: "Qual é uma propriedade geral da matéria?",
                                opcoes: [
                                    "Cor",
                                    "Sabor",
                                    "Massa",
                                    "Cheiro"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O que acontece quando aquecemos a maioria dos materiais?",
                                opcoes: [
                                    "Eles encolhem",
                                    "Eles se dilatam",
                                    "Nada acontece",
                                    "Eles ficam mais pesados"
                                ],
                                correta: 1
                            }
                        ]
                    },
                    {
                        id: "dQw4w9WgXcQ",  // ← Substitua pelo ID real
                        titulo: "Estados Físicos da Matéria",
                        assunto: "Matéria e Energia",
                        perguntas: [
                            {
                                pergunta: "Quais são os três estados físicos básicos da matéria?",
                                opcoes: [
                                    "Quente, frio e morno",
                                    "Sólido, líquido e gasoso",
                                    "Grande, médio e pequeno",
                                    "Leve, pesado e normal"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "A mudança do estado sólido para o líquido é chamada de:",
                                opcoes: [
                                    "Evaporação",
                                    "Condensação",
                                    "Fusão",
                                    "Sublimação"
                                ],
                                correta: 2
                            }
                        ]
                    }
                ]
            },
            "2": {
                titulo: "2° Bimestre",
                icone: "🌊",
                cor: "#3b82f6",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "A Água e suas Propriedades",
                        assunto: "Água",
                        perguntas: [
                            {
                                pergunta: "Qual é a fórmula química da água?",
                                opcoes: ["CO2", "H2O", "O2", "NaCl"],
                                correta: 1
                            },
                            {
                                pergunta: "Em que temperatura a água ferve ao nível do mar?",
                                opcoes: ["50°C", "80°C", "100°C", "120°C"],
                                correta: 2
                            }
                        ]
                    }
                ]
            },
            "3": {
                titulo: "3° Bimestre",
                icone: "🪨",
                cor: "#f97316",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Tipos de Rochas",
                        assunto: "Geologia",
                        perguntas: [
                            {
                                pergunta: "Quais são os três tipos principais de rochas?",
                                opcoes: [
                                    "Duras, moles e médias",
                                    "Ígneas, sedimentares e metamórficas",
                                    "Grandes, pequenas e micro",
                                    "Claras, escuras e coloridas"
                                ],
                                correta: 1
                            }
                        ]
                    }
                ]
            },
            "4": {
                titulo: "4° Bimestre",
                icone: "🌍",
                cor: "#ec4899",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Camadas da Terra",
                        assunto: "Geologia",
                        perguntas: [
                            {
                                pergunta: "Qual é a camada mais externa da Terra?",
                                opcoes: ["Manto", "Núcleo", "Crosta", "Astenosfera"],
                                correta: 2
                            }
                        ]
                    }
                ]
            }
        }
    },

    "7ano": {
        nome: "7° Ano",
        emoji: "🧪",
        cor: "#3b82f6",
        bimestres: {
            "1": {
                titulo: "1° Bimestre",
                icone: "🦠",
                cor: "#10b981",
                videos: [
                    {
                        id: "SL7bxTDhlEw",
                        titulo: "Máquinas Simples",
                        assunto: "Alavancas",
                        perguntas: [
                            {
                                pergunta: "O que define uma alavanca como uma máquina simples?",
                                opcoes: ["É um dispositivo que depende obrigatoriamente de eletricidade.",
                                    "É uma ferramenta usada exclusivamente para diminuir a velocidade.",
                                    "É um objeto que só funciona se for feito de metal flexível.",
                                    "É qualquer barra que se mova sobre um ponto de apoio ou fulcro."],
                                correta: 3
                            },
                            {
                                pergunta: "Como se chama o ponto onde a alavanca se apoia e gira?",
                                opcoes: ["Resistência.",
                                    "Potência",
                                    "Fulcro (ponto de apoio)",
                                    "Força"],
                                correta: 2
                            },
                            {
                                pergunta: "Para levantar um objeto muito pesado (maior que o seu próprio peso), qual é a estratégia correta de posicionamento do ponto de apoio?",
                                opcoes: ["Posicionar o ponto de apoio o mais longe possível da carga.",
                                    "Posicionar o ponto de apoio o mais próximo possível da carga.",
                                    "Posicionar o ponto de apoio no meio da carga.",
                                    "Posicionar o ponto de apoio acima da carga."],
                                correta: 1
                            },
                            {
                                pergunta: "Em qual das seguintes situações a alavanca é classificada como Interpotente?",
                                opcoes: ["O ponto de apoio está entre a força potente e a resistência.",
                                    "A força resistente está entre o ponto de apoio e a força potente.",
                                    "A força potente está entre o ponto de apoio e a força resistente.",
                                    "A força potente e a resistência estão no mesmo ponto."],
                                correta: 2
                            },
                            {
                                pergunta: "Em qual das seguintes situações a alavanca é classificada como Interfixa?",
                                opcoes: ["O ponto de apoio está entre a força potente e a resistência.",
                                    "A força resistente está entre o ponto de apoio e a força potente.",
                                    "A força potente está entre o ponto de apoio e a força resistente.",
                                    "A força potente e a resistência estão no mesmo ponto."],
                                correta: 0
                            },
                            {
                                pergunta: "Em qual das seguintes situações a alavanca é classificada como Inter-resistente ?",
                                opcoes: ["O ponto de apoio está entre a força potente e a resistência.",
                                    "A força resistente está entre o ponto de apoio e a força potente.",
                                    "A força potente está entre o ponto de apoio e a força resistente.",
                                    "A força potente e a resistência estão no mesmo ponto."],
                                correta: 1
                            },
                            {
                                pergunta: "Qual dos objetos abaixo é um exemplo de alavanca?",
                                opcoes: ["Lâmpada.",
                                    "Carrinho de mão.",
                                    "Escada.",
                                    "Televisão."],
                                correta: 1
                            }
                        ]
                    },
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Reino Plantae",
                        assunto: "Botânica",
                        perguntas: [
                            {
                                pergunta: "O que as plantas produzem durante a fotossíntese?",
                                opcoes: ["CO2", "Glicose e O2", "Água", "Nitrogênio"],
                                correta: 1
                            }
                        ]
                    }
                ]
            },
            "2": {
                titulo: "2° Bimestre",
                icone: "🌿",
                cor: "#3b82f6",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Reino Plantae",
                        assunto: "Botânica",
                        perguntas: [
                            {
                                pergunta: "O que as plantas produzem durante a fotossíntese?",
                                opcoes: ["CO2", "Glicose e O2", "Água", "Nitrogênio"],
                                correta: 1
                            }
                        ]
                    }
                ]
            },
            "3": {
                titulo: "3° Bimestre",
                icone: "🐾",
                cor: "#f97316",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Reino Animalia - Invertebrados",
                        assunto: "Zoologia",
                        perguntas: [
                            {
                                pergunta: "Os insetos pertencem a qual filo?",
                                opcoes: ["Moluscos", "Anelídeos", "Artrópodes", "Equinodermos"],
                                correta: 2
                            }
                        ]
                    }
                ]
            },
            "4": {
                titulo: "4° Bimestre",
                icone: "🧬",
                cor: "#ec4899",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Reino Animalia - Vertebrados",
                        assunto: "Zoologia",
                        perguntas: [
                            {
                                pergunta: "Qual grupo de vertebrados tem penas?",
                                opcoes: ["Répteis", "Mamíferos", "Aves", "Anfíbios"],
                                correta: 2
                            }
                        ]
                    }
                ]
            }
        }
    },

    "8ano": {
        nome: "8° Ano",
        emoji: "🧬",
        cor: "#f97316",
        bimestres: {
            "1": {
                titulo: "1° Bimestre",
                icone: "💀",
                cor: "#10b981",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Sistema Esquelético e Muscular",
                        assunto: "Corpo Humano",
                        perguntas: [
                            {
                                pergunta: "Quantos ossos tem o corpo humano adulto?",
                                opcoes: ["106", "156", "206", "306"],
                                correta: 2
                            },
                            {
                                pergunta: "Qual é o maior osso do corpo humano?",
                                opcoes: ["Úmero", "Tíbia", "Fêmur", "Rádio"],
                                correta: 2
                            }
                        ]
                    }
                ]
            },
            "2": {
                titulo: "2° Bimestre",
                icone: "❤️",
                cor: "#3b82f6",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Sistema Circulatório",
                        assunto: "Corpo Humano",
                        perguntas: [
                            {
                                pergunta: "Quantas câmaras tem o coração humano?",
                                opcoes: ["2", "3", "4", "5"],
                                correta: 2
                            }
                        ]
                    }
                ]
            },
            "3": {
                titulo: "3° Bimestre",
                icone: "🫁",
                cor: "#f97316",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Sistema Respiratório",
                        assunto: "Corpo Humano",
                        perguntas: [
                            {
                                pergunta: "Onde ocorre a troca gasosa no sistema respiratório?",
                                opcoes: ["Brônquios", "Traqueia", "Alvéolos", "Laringe"],
                                correta: 2
                            }
                        ]
                    }
                ]
            },
            "4": {
                titulo: "4° Bimestre",
                icone: "🧠",
                cor: "#ec4899",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Sistema Nervoso",
                        assunto: "Corpo Humano",
                        perguntas: [
                            {
                                pergunta: "Qual célula é a unidade básica do sistema nervoso?",
                                opcoes: ["Hemácia", "Neurônio", "Plaqueta", "Leucócito"],
                                correta: 1
                            }
                        ]
                    }
                ]
            }
        }
    },

    "9ano": {
        nome: "9° Ano",
        emoji: "⚡",
        cor: "#ec4899",
        bimestres: {
            "1": {
                titulo: "1° Bimestre",
                icone: "⚛️",
                cor: "#10b981",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Estrutura Atômica",
                        assunto: "Química",
                        perguntas: [
                            {
                                pergunta: "Quais são as partículas subatômicas do átomo?",
                                opcoes: [
                                    "Prótons, nêutrons e elétrons",
                                    "Moléculas e átomos",
                                    "Íons e cátions",
                                    "Fótons e neutrinos"
                                ],
                                correta: 0
                            },
                            {
                                pergunta: "Onde ficam os elétrons no átomo?",
                                opcoes: [
                                    "No núcleo",
                                    "Na eletrosfera",
                                    "Dentro dos prótons",
                                    "Fora do átomo"
                                ],
                                correta: 1
                            }
                        ]
                    }
                ]
            },
            "2": {
                titulo: "2° Bimestre",
                icone: "🔗",
                cor: "#3b82f6",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Ligações Químicas",
                        assunto: "Química",
                        perguntas: [
                            {
                                pergunta: "Na ligação iônica, o que acontece com os elétrons?",
                                opcoes: [
                                    "São compartilhados",
                                    "São transferidos",
                                    "Desaparecem",
                                    "Se multiplicam"
                                ],
                                correta: 1
                            }
                        ]
                    }
                ]
            },
            "3": {
                titulo: "3° Bimestre",
                icone: "🔭",
                cor: "#f97316",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Leis de Newton",
                        assunto: "Física",
                        perguntas: [
                            {
                                pergunta: "A Primeira Lei de Newton também é conhecida como Lei da:",
                                opcoes: ["Gravidade", "Inércia", "Ação e Reação", "Energia"],
                                correta: 1
                            }
                        ]
                    }
                ]
            },
            "4": {
                titulo: "4° Bimestre",
                icone: "🌌",
                cor: "#ec4899",
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        titulo: "Ondas e Energia",
                        assunto: "Física",
                        perguntas: [
                            {
                                pergunta: "O som é uma onda de que tipo?",
                                opcoes: ["Eletromagnética", "Mecânica", "Gravitacional", "Nuclear"],
                                correta: 1
                            }
                        ]
                    }
                ]
            }
        }
    }
};

/* ============================================================
   SISTEMA DE NÍVEIS E BADGES
   ============================================================ */
const LEVELS = [
    { nome: "Explorador", minXP: 0, emoji: "🔍" },
    { nome: "Cientista Jr.", minXP: 100, emoji: "🧑‍🔬" },
    { nome: "Cientista", minXP: 300, emoji: "👨‍🔬" },
    { nome: "Pesquisador", minXP: 600, emoji: "🔬" },
    { nome: "Gênio da Ciência", minXP: 1000, emoji: "🧠" },
    { nome: "Mestre da Ciência", minXP: 1500, emoji: "🏆" },
    { nome: "Lenda Científica", minXP: 2500, emoji: "⭐" }
];

const BADGES = [
    { id: "first_video", nome: "Primeiro Vídeo", emoji: "🎬", desc: "Assista seu primeiro vídeo" },
    { id: "first_quiz", nome: "Primeiro Quiz", emoji: "📝", desc: "Complete seu primeiro quiz" },
    { id: "perfect_quiz", nome: "Quiz Perfeito", emoji: "💯", desc: "Acerte todas num quiz" },
    { id: "five_videos", nome: "Maratonista", emoji: "🏃", desc: "Assista 5 vídeos" },
    { id: "ten_videos", nome: "Viciado em Ciência", emoji: "🤩", desc: "Assista 10 vídeos" },
    { id: "all_bimestre", nome: "Bimestre Completo", emoji: "📚", desc: "Veja todos os vídeos de um bimestre" },
    { id: "streak_3", nome: "3 Dias Seguidos", emoji: "🔥", desc: "Estude 3 dias seguidos" },
    { id: "streak_7", nome: "Semana Inteira", emoji: "⚡", desc: "Estude 7 dias seguidos" },
    { id: "xp_500", nome: "500 XP", emoji: "🌟", desc: "Alcance 500 XP" },
    { id: "xp_1000", nome: "1000 XP", emoji: "💎", desc: "Alcance 1000 XP" }
];
