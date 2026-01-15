import React, { useState, useRef } from 'react';
import logo from './assets/logo.png';
import capa from "./assets/capa23.png";
import { RegistrationForm } from './components/RegistrationForm';

const App = () => {
  const formRef = useRef(null);
  const [selectedPath, setSelectedPath] = useState(null); // 'base', 'beacon', 'viva'

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center py-12 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#e6cbe4" }}
    >
      {/* Elementos decorativos de fundo - "rede" sutil */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="2"
                fill="currentColor"
                className="text-brand-chocolate"
              />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="50"
                stroke="currentColor"
                strokeWidth="1"
                className="text-brand-chocolate"
              />
              <line
                x1="50"
                y1="50"
                x2="50"
                y2="100"
                stroke="currentColor"
                strokeWidth="1"
                className="text-brand-chocolate"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <main className="w-full space-y-8 bg-brand-areia rounded-2xl p-6 sm:p-8">
          {/* Imagem da Capa */}
          <div className="relative overflow-hidden -mx-6 sm:-mx-8 -mt-6 sm:-mt-8">
            <img
              src={capa}
              alt="Percurso Educativo LABirintar"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Seção de Informações */}
          <div className="space-y-6">
            {/* Seção Principal */}
            <div className="relative">
              <div className="grid md:grid-cols-5 gap-8 items-start">
                {/* Coluna Esquerda - Frase de Efeito */}
                <div className="md:col-span-2 space-y-6">
                  <p className="text-2xl sm:text-3xl font-slab font-bold text-brand-chocolate/85 leading-tight">
                    Formação dos Educadores:
                    <br />
                    o sistema educativo
                    <br />
                    da Labirintar
                  </p>

                  <div className="space-y-6 text-brand-chocolate/85 leading-relaxed">
                    <p className="text-base">
                      A formação dos educadores da rede Labirintar é entendida como um{" "}
                      <strong className="text-brand-chocolate">
                        processo contínuo, vivo e situado
                      </strong>
                      . Não se reduz a momentos pontuais de capacitação nem a acúmulo de conteúdos.
                    </p>

                    <p className="text-base">
                      Ela é pensada como uma{" "}
                      <strong className="text-brand-chocolate">
                        infraestrutura pedagógica
                      </strong>{" "}
                      que sustenta a qualidade, a coerência e a continuidade das experiências educativas oferecidas nas escolas.
                    </p>
                  </div>

                  <button
                    onClick={scrollToForm}
                    className="px-6 py-3 bg-brand-goiaba hover:bg-brand-goiaba/90 text-white font-slab font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
                  >
                    Continuar
                  </button>
                </div>

                {/* Coluna Direita - Texto */}
                <div className="md:col-span-3 space-y-6 text-brand-chocolate/85 leading-relaxed">
                  <p className="text-base">
                    Essa formação se organiza a partir de duas camadas indissociáveis:{" "}
                    <strong className="text-brand-chocolate">
                      os Percursos Educativos e as Mentorias
                    </strong>
                    .
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-slab font-bold text-brand-chocolate text-lg mb-2">
                        Percursos Educativos
                      </h4>
                      <p className="text-base">
                        Constituem a dimensão estruturante e formativa da rede. Eles criam lastro comum, linguagem compartilhada e alinhamento pedagógico entre os educadores, conectando prática, reflexão e intencionalidade.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-slab font-bold text-brand-chocolate text-lg mb-2">
                        Mentorias
                      </h4>
                      <p className="text-base">
                        Compõem a camada de acompanhamento contínuo e situado da formação. Enquanto os Percursos oferecem direção, aprofundamento e horizonte pedagógico, as mentorias acompanham as miudezas do cotidiano, aquilo que acontece no chão da escola.
                      </p>
                    </div>
                  </div>

                  <p className="text-base">
                    É essa combinação que sustenta um dos principais ativos da Labirintar:{" "}
                    <strong className="text-brand-chocolate">
                      a excelência pedagógica com continuidade
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quem pode se inscrever */}
          <div className="bg-brand-lavanda/30 border-2 border-brand-lavanda/50 rounded-lg p-6">
            <h3 className="text-xl font-slab font-bold text-brand-chocolate mb-4">
              Quem pode se inscrever
            </h3>
            <div className="space-y-3 text-brand-chocolate/85">
              <p className="text-base">
                Somente educadores cadastrados na rede Labirintar poderão se inscrever.
              </p>
              <p className="text-base">
                Caso você ainda não tenha sido informado(a) de que sua experiência foi selecionada por uma escola parceira, você será direcionado(a) para a inscrição apenas no{" "}
                <strong className="text-brand-chocolate">Percurso Educativo</strong>.
              </p>
              <p className="text-base">
                Se sua experiência já tiver sido escolhida por uma escola, você será direcionado(a) para a inscrição do{" "}
                <strong className="text-brand-chocolate">Percurso Educativo e da Mentoria</strong>, conforme o contexto da escola.
              </p>
            </div>
          </div>

          {/* Cards de Percursos */}
          <div className="space-y-6" ref={formRef}>
            <h3 className="text-2xl font-slab font-bold text-brand-chocolate text-center mb-8">
              Escolha seu percurso
            </h3>

            {/* Percurso Educativo Base */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-brand-creme hover:border-brand-goiaba transition-all duration-200">
              <div className="space-y-4">
                <h4 className="text-xl font-slab font-bold text-brand-chocolate">
                  Percurso Educativo — Formação Base da Rede
                </h4>
                <p className="text-base text-brand-chocolate/85">
                  Formação estruturante que apresenta os fundamentos institucionais, conceituais, operacionais e tecnológicos da Labirintar, alinhando visão pedagógica, práticas de atuação e uso das ferramentas da rede.
                </p>
                <p className="text-sm text-brand-chocolate/70 italic">
                  Para educadores cadastrados e autenticados na rede Labirintar
                </p>

                <div className="space-y-3 bg-brand-creme/30 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="text-brand-goiaba font-bold text-lg">📅</div>
                    <div>
                      <p className="font-bold text-brand-chocolate">29/01 (quarta-feira) | 17h às 20h — Presencial</p>
                      <p className="text-sm text-brand-chocolate/85">Base Institucional da Labirintar e base conceitual sobre a escola, as crianças e os professores em tempos complexos.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-brand-goiaba font-bold text-lg">📅</div>
                    <div>
                      <p className="font-bold text-brand-chocolate">30/01 (quinta-feira) | 17h às 20h — Presencial</p>
                      <p className="text-sm text-brand-chocolate/85">Base conceitual sobre infâncias e o brincar, base operacional (como chegar e atuar na escola) e base tecnológica (Plataforma NINA).</p>
                    </div>
                  </div>
                  <p className="text-sm text-brand-chocolate/70 mt-2">
                    <strong>Condução:</strong> Lourdes Atié e Claudia Rossi
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedPath('base');
                    setTimeout(scrollToForm, 100);
                  }}
                  className="w-full px-6 py-3 bg-brand-goiaba hover:bg-brand-goiaba/90 text-white font-slab font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
                >
                  Inscreva-se!
                </button>
              </div>
            </div>

            {/* Beacon School */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-brand-creme hover:border-brand-goiaba transition-all duration-200">
              <div className="space-y-4">
                <h4 className="text-xl font-slab font-bold text-brand-chocolate">
                  Mentoria e Percurso Pedagógico — Beacon School
                </h4>
                <p className="text-base text-brand-chocolate/85">
                  Percurso que integra formação base e mentoria contextualizada, conectando os princípios da Labirintar à realidade específica da Beacon School, com acompanhamento próximo da prática pedagógica.
                </p>

                <div className="space-y-3 bg-brand-creme/30 p-4 rounded-lg">
                  <div>
                    <p className="font-bold text-brand-chocolate mb-2">Mentoria</p>
                    <div className="flex items-start gap-3">
                      <div className="text-brand-goiaba font-bold text-lg">📅</div>
                      <div>
                        <p className="font-bold text-brand-chocolate">22/01 (quarta-feira) | 18h às 19h — Virtual</p>
                        <p className="text-sm text-brand-chocolate/85">Contexto da Beacon School e preenchimento coletivo do Guia Vivo da Experiência.</p>
                        <p className="text-sm text-brand-chocolate/70 mt-1"><strong>Condução:</strong> Luiz Camacho</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-brand-chocolate mb-2">Percurso Pedagógico</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="text-brand-goiaba font-bold text-lg">📅</div>
                        <div>
                          <p className="font-bold text-brand-chocolate">29/01 (quarta-feira) | 17h às 20h — Presencial</p>
                          <p className="text-sm text-brand-chocolate/85">Base Institucional da Labirintar e base conceitual sobre escola, crianças e educadores.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-brand-goiaba font-bold text-lg">📅</div>
                        <div>
                          <p className="font-bold text-brand-chocolate">30/01 (quinta-feira) | 17h às 20h — Presencial</p>
                          <p className="text-sm text-brand-chocolate/85">Infâncias e brincar, base operacional e base tecnológica (Plataforma NINA).</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-brand-chocolate/70 mt-2">
                      <strong>Núcleo Pedagógico:</strong> Lourdes Atié e Claudia Rossi
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPath('beacon');
                    setTimeout(scrollToForm, 100);
                  }}
                  className="w-full px-6 py-3 bg-brand-goiaba hover:bg-brand-goiaba/90 text-white font-slab font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
                >
                  Inscreva-se!
                </button>
              </div>
            </div>

            {/* Escola Viva */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-brand-creme hover:border-brand-goiaba transition-all duration-200">
              <div className="space-y-4">
                <h4 className="text-xl font-slab font-bold text-brand-chocolate">
                  Mentoria e Percurso Pedagógico — Escola Viva
                </h4>
                <p className="text-base text-brand-chocolate/85">
                  Formação que articula o percurso comum da rede com mentoria situada na realidade da Escola Viva, apoiando o educador na leitura do contexto, no planejamento e na qualificação da experiência educativa.
                </p>

                <div className="space-y-3 bg-brand-creme/30 p-4 rounded-lg">
                  <div>
                    <p className="font-bold text-brand-chocolate mb-2">Mentoria</p>
                    <div className="flex items-start gap-3">
                      <div className="text-brand-goiaba font-bold text-lg">📅</div>
                      <div>
                        <p className="font-bold text-brand-chocolate">22/01 (quarta-feira) | 19h às 20h — Virtual</p>
                        <p className="text-sm text-brand-chocolate/85">Contexto da Escola Viva e preenchimento coletivo do Guia Vivo da Experiência.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-brand-chocolate mb-2">Percurso Pedagógico</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="text-brand-goiaba font-bold text-lg">📅</div>
                        <div>
                          <p className="font-bold text-brand-chocolate">29/01 (quarta-feira) | 17h às 20h — Presencial</p>
                          <p className="text-sm text-brand-chocolate/85">Base Institucional da Labirintar e base conceitual sobre escola, crianças e educadores.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-brand-goiaba font-bold text-lg">📅</div>
                        <div>
                          <p className="font-bold text-brand-chocolate">30/01 (quinta-feira) | 17h às 20h — Presencial</p>
                          <p className="text-sm text-brand-chocolate/85">Infâncias e brincar, base operacional e base tecnológica (Plataforma NINA).</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-brand-chocolate/70 mt-2">
                      <strong>Núcleo Pedagógico:</strong> Lourdes Atié e Claudia Rossi
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPath('viva');
                    setTimeout(scrollToForm, 100);
                  }}
                  className="w-full px-6 py-3 bg-brand-goiaba hover:bg-brand-goiaba/90 text-white font-slab font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
                >
                  Inscreva-se!
                </button>
              </div>
            </div>
          </div>

          {/* Formulário de Inscrição */}
          {selectedPath && (
            <div className="w-full">
              <RegistrationForm selectedPath={selectedPath} />
            </div>
          )}

          {/* Footer */}
          <footer className="text-center mt-12 space-y-4 border-t border-brand-chocolate/10 pt-8">
            <img
              src={logo}
              alt="LABirintar"
              className="w-48 sm:w-64 h-auto mx-auto"
            />
            <p className="text-brand-chocolate/70 text-sm">
              © 2025 LABirintar. Todos os direitos reservados.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;

