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
                        titulo: "Máquinas Simples-Alavancas",
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
                        id: "nXG_p2cAJFk",
                        titulo: "Máquinas Simples-Rodas e Eixos",
                        assunto: "Máquinas Simples",
                        perguntas: [
                            {
                                pergunta: "Qual é o princípio fundamental de funcionamento da roda e do eixo?",
                                opcoes: ["Aumentar a força aplicada através de alavancas.",
                                    "Diminuir o atrito e multiplicar a força ou a velocidade.",
                                    "Converter movimento linear em rotacional.",
                                    "Armazenar energia potencial gravitacional."],
                                correta: 1
                            },
                            {
                                pergunta: "Em uma roda e eixo, o que representa a 'força potente' (FP)?",
                                opcoes: ["O peso do objeto que está sendo movido.",
                                    "A força aplicada pelo operador (ex: girando o volante).",
                                    "A força de atrito entre o eixo e a roda.",
                                    "A força de resistência do solo."],
                                correta: 1
                            },
                            {
                                pergunta: "Para que serve o 'ganho mecânico' em uma roda e eixo?",
                                opcoes: ["Serve para aumentar a velocidade de rotação.",
                                    "Serve para diminuir a força necessária para mover uma carga.",
                                    "Serve para frear o movimento.",
                                    "Serve para medir a temperatura."],
                                correta: 1
                            },
                            {
                                pergunta: "Qual das seguintes situações NÃO é um exemplo de roda e eixo?",
                                opcoes: ["Volante de um carro.",
                                    "Manivela de um poço.",
                                    "Parafuso.",
                                    "Catraca de bicicleta."],
                                correta: 2
                            },
                            {
                                pergunta: "Como o ganho mecânico é calculado em uma roda e eixo?",
                                opcoes: ["Raio da roda / Raio do eixo.",
                                    "Raio do eixo / Raio da roda.",
                                    "Força potente / Força resistente.",
                                    "Força resistente / Força potente."],
                                correta: 0
                            },
                            {
                                pergunta: "Em um carrinho de mão, a roda e o eixo estão posicionados de forma que o ganho mecânico seja...",
                                opcoes: ["Maior que 1 (multiplica a força).",
                                    "Menor que 1 (multiplica a velocidade).",
                                    "Igual a 1 (sem alteração).",
                                    "Variável."],
                                correta: 1
                            },
                            {
                                pergunta: "Qual é a principal vantagem de usar uma roda e eixo em vez de arrastar uma carga?",
                                opcoes: ["Reduz a força necessária e diminui o atrito.",
                                    "Aumenta a velocidade de deslocamento.",
                                    "Permite subir inclinações íngremes.",
                                    "Diminui o peso da carga."],
                                correta: 0
                            }
                        ]
                    },
                    {
                        id: "_2KfIUj77a4",
                        titulo: "Máquinas Simples-Roldanas (Polias)",
                        assunto: "Máquinas Simples",
                        perguntas: [
                            {
                                pergunta: "O que é uma roldana (ou polia)?",
                                opcoes: [
                                    "Uma roda com um sulco pelo qual passa uma corda ou cabo.",
                                    "Uma alavanca fixa que não se move.",
                                    "Um plano inclinado usado para descer objetos.",
                                    "Um tipo de engrenagem sem dentes."
                                ],
                                correta: 0
                            },
                            {
                                pergunta: "Qual é a principal função de uma roldana fixa?",
                                opcoes: [
                                    "Multiplicar a força aplicada.",
                                    "Mudar a direção e o sentido da força aplicada.",
                                    "Aumentar a velocidade do objeto.",
                                    "Reduzir o peso do objeto pela metade."
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O que acontece ao usar uma roldana móvel?",
                                opcoes: [
                                    "A força necessária para levantar a carga é reduzida pela metade.",
                                    "A direção da força é alterada, mas o esforço é o mesmo.",
                                    "O peso do objeto aumenta.",
                                    "A corda não se move."
                                ],
                                correta: 0
                            },
                            {
                                pergunta: "Se combinarmos uma roldana fixa com uma roldana móvel (um cadernal), o que ocorre?",
                                opcoes: [
                                    "Nenhuma vantagem mecânica é obtida.",
                                    "A força necessária é dobrada.",
                                    "Unimos a vantagem de mudar a direção da força com a de reduzir o esforço.",
                                    "O objeto não pode ser levantado."
                                ],
                                correta: 2
                            }

                        ]
                    },
                    {
                        id: "V6c_j0-VEOs",
                        titulo: "Máquinas Simples-Plano Inclinado",
                        assunto: "Máquinas Simples",
                        perguntas: [
                            {
                                pergunta: "O que é um plano inclinado?",
                                opcoes: [
                                    "Uma superfície perfeitamente nivelada e horizontal.",
                                    "Uma superfície plana e rígida, inclinada em relação à horizontal.",
                                    "Um tipo de alavanca com o ponto de apoio no centro.",
                                    "Uma roda conectada a um eixo central."
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual a principal vantagem de usar um plano inclinado?",
                                opcoes: [
                                    "Eleva uma carga aplicando uma força menor do que a necessária para erguê-la verticalmente.",
                                    "Diminui a distância percorrida pelo objeto.",
                                    "Aumenta a velocidade de queda do objeto.",
                                    "Aumenta o peso do objeto que será movido."
                                ],
                                correta: 0
                            },
                            {
                                pergunta: "A rampa, o parafuso e a cunha são aplicações práticas de qual máquina simples?",
                                opcoes: [
                                    "Roldanas",
                                    "Alavancas",
                                    "Plano inclinado",
                                    "Rodas e Eixos"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Como a inclinação da rampa afeta a força necessária para subir o objeto?",
                                opcoes: [
                                    "Quanto mais íngreme, menor a força necessária.",
                                    "Quanto mais suave (menos inclinada), maior a força necessária.",
                                    "A inclinação não afeta a força necessária.",
                                    "Quanto mais suave (menos inclinada), menor a força, mas maior a distância."
                                ],
                                correta: 3
                            }
                        ]
                    },
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
