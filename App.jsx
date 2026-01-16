import React, { useState, useRef } from 'react';
import logo from './assets/logo.png';
import capa from "./assets/capa.png";
import fotoLourdes from './assets/lourdes-atie.png';
import fotoLuiz from './assets/luiz-camacho.png';
import { RegistrationForm } from './components/RegistrationForm';

const App = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center py-12 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#aec5e7" }}
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
              alt="Percurso Educativo Labirintar"
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
                    A formação que prepara a rede
                    <br />
                    para pisar no chão da escola:
                    <br />
                    com intencionalidade e presença.
                  </p>

                  <div className="space-y-6 text-brand-chocolate/85 leading-relaxed">
                    <p className="text-base">
                      Começa o ano letivo. E com ele, começa também o nosso movimento de chegada ao que importa:{" "}
                      <strong className="text-brand-chocolate">
                        o chão da escola
                      </strong>
                      .
                    </p>

                  <p className="text-base">
                    É ali - no encontro real com crianças, equipes e comunidades - que a Labirintar acontece.
                  </p>
                </div>
              </div>

                {/* Coluna Direita - Texto */}
                <div className="md:col-span-3 space-y-6 text-brand-chocolate/85 leading-relaxed">
                  <p className="text-base">
                    É por isso que inauguramos, com alegria e responsabilidade, o início dos{" "}
                    <strong className="text-brand-chocolate">
                      Percursos Educativos e das Mentorias
                    </strong>{" "}
                    da Rede Labirintar.
                  </p>

                  <p className="text-base">
                    Mais do que uma agenda de encontros, isso é um marco: um convite para atravessar o ano em companhia.
                  </p>

                  <div className="bg-brand-creme/30 p-5 rounded-lg border border-brand-creme">
                    <h4 className="font-slab font-bold text-brand-chocolate text-lg mb-3">
                      O que estamos inaugurando
                    </h4>
                    <p className="text-base mb-3">
                      A formação dos educadores da Rede Labirintar é um processo contínuo, vivo e situado.
                    </p>
                    <p className="text-base mb-3">
                      Ela não existe para "acumular conteúdo", mas para sustentar algo muito maior:
                    </p>
                    <ul className="space-y-2 text-base ml-4">
                      <li>• qualidade pedagógica com continuidade</li>
                      <li>• coerência entre experiências, escolas e educadores</li>
                      <li>• autoria com responsabilidade</li>
                      <li>• crescimento com sustentação (e não com improviso)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Duas camadas inseparáveis */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-slab font-bold text-brand-chocolate text-center">
              Para isso, nossa formação se organiza em duas camadas inseparáveis
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Percursos Educativos */}
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border-2 border-brand-creme">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-goiaba rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <h4 className="text-lg sm:text-xl font-slab font-bold text-brand-chocolate">
                    Percursos Educativos
                  </h4>
                </div>
                <div className="space-y-3 text-brand-chocolate/85">
                  <p className="text-base">
                    Os Percursos Educativos são o que dá estrutura à rede.
                  </p>
                  <p className="text-base">
                    Eles criam linguagem comum, fortalecem nossa visão pedagógica e alinham o jeito Labirintar de planejar, conduzir, registrar e aprender com a prática.
                  </p>
                  <p className="text-base">
                    Mais do que cursos, os Percursos são caminhos: um espaço para aprofundar princípios, refletir junto e construir referências compartilhadas para que a expansão da rede não fragmente a experiência vivida pelas crianças.
                  </p>
                  <p className="text-base">
                    Por isso, o Percurso é <strong className="text-brand-chocolate">pré-requisito para atuação nas escolas parceiras</strong>: não como exigência burocrática, mas como pacto formativo e ético.
                  </p>
                </div>
              </div>

              {/* Mentorias */}
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border-2 border-brand-creme">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-laranja rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <h4 className="text-lg sm:text-xl font-slab font-bold text-brand-chocolate">
                    Mentorias
                  </h4>
                </div>
                <div className="space-y-3 text-brand-chocolate/85">
                  <p className="text-base">
                    As Mentorias são a camada de acompanhamento vivo, dentro da realidade de cada escola.
                  </p>
                  <p className="text-base">
                    Enquanto os Percursos oferecem direção e base, a Mentoria acompanha as miudezas do cotidiano: as decisões do dia a dia, os impasses, as adaptações necessárias, aquilo que emerge no encontro com as crianças.
                  </p>
                  <p className="text-base">
                    Mentoria é <strong className="text-brand-chocolate">"par e passo"</strong>: não acontece antes nem depois da prática, acontece junto.
                  </p>
                  <p className="text-base">
                    Porque educar é lidar com o sensível, com o relacional e com o imprevisto. E isso exige acompanhamento, escuta e cuidado contínuo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Por que tudo isso é valor */}
          <div className="bg-brand-lavanda/30 border-2 border-brand-lavanda/50 rounded-lg p-6">
            <h3 className="text-xl font-slab font-bold text-brand-chocolate mb-4">
              Por que tudo isso é valor?
            </h3>
            <div className="space-y-3 text-brand-chocolate/85">
              <p className="text-base font-semibold">
                Porque aprender assim é raro.
              </p>
              <ul className="space-y-2 text-base ml-4">
                <li>• Aprender com especialistas valiosos.</li>
                <li>• Aprender em rede.</li>
                <li>• Aprender com a prática real como matéria viva.</li>
                <li>• Aprender com estrutura e em companhia - sem atravessar o caminho sozinho(a).</li>
              </ul>
              <p className="text-base mt-4">
                A Labirintar está oferecendo à sua rede uma oportunidade preciosa:{" "}
                <strong className="text-brand-chocolate">crescer com consistência, sem perder beleza</strong>.
              </p>
            </div>
          </div>

          {/* Quem pode se inscrever */}
          <div className="bg-white border-2 border-brand-creme rounded-lg p-6">
            <h3 className="text-xl font-slab font-bold text-brand-chocolate mb-4">
              Quem pode se inscrever
            </h3>
            <div className="space-y-3 text-brand-chocolate/85">
              <p className="text-base">
                <strong className="text-brand-chocolate">Somente educadores cadastrados e autenticados na Rede Labirintar, via sistema Nina.</strong>
              </p>
              <p className="text-base">
                Se você ainda não fez seu cadastro,{" "}
                <strong className="text-brand-chocolate">acelera que dá tempo!</strong>
              </p>
            </div>
          </div>

          {/* Cards de Percursos */}
          <div className="space-y-6" ref={formRef}>
            <h3 className="text-xl sm:text-2xl font-slab font-bold text-brand-chocolate text-center mb-2">
              Faça sua inscrição
            </h3>
            <p className="text-center text-brand-chocolate/70 mb-8 text-sm sm:text-base">
              Um início de ciclo, um gesto de pertencimento
            </p>

            {/* Percurso Educativo */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-2 border-brand-goiaba">
              <div className="space-y-4">
                <h4 className="text-xl sm:text-2xl font-slab font-bold text-brand-chocolate">
                  Percurso Educativo
                </h4>
                <p className="text-sm text-brand-chocolate/70 italic">
                  📌 Para educadores cadastrados e autenticados na Rede Labirintar
                </p>

                <div className="space-y-3 bg-brand-creme/30 p-4 sm:p-5 rounded-lg border border-brand-creme">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="text-brand-goiaba font-bold text-lg flex-shrink-0">📅</div>
                    <div>
                      <p className="font-bold text-brand-chocolate text-sm sm:text-base">29/01 (quarta-feira) | 18h às 21h — Presencial</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="text-brand-goiaba font-bold text-lg flex-shrink-0">📅</div>
                    <div>
                      <p className="font-bold text-brand-chocolate text-sm sm:text-base">30/01 (quinta-feira) | 18h às 21h — Presencial</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-brand-creme">
                    <p className="text-sm text-brand-chocolate/85 mb-3">
                      <strong>Mediação:</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                      {/* Foto */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden">
                          <img src={fotoLourdes} alt="Lourdes Atié" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      {/* Bio */}
                      <div className="flex-1 text-center sm:text-left">
                        <p className="text-sm font-bold text-brand-chocolate mb-2">Lourdes Atié</p>
                        <div className="text-xs text-brand-chocolate/70 leading-relaxed space-y-2">
                          <p>
                            Atié é carioca, socióloga, graduada pelo UFRJ – Universidade Federal do Rio de Janeiro e com pós-graduação em Educação e Construtivismo pela FLACSO - Facultad Latinoamericana de Ciencias Sociales, Buenos Aires.
                          </p>
                          <p>
                            Tem quase quarenta anos de experiência no campo da Educação, como professora, assessora pedagógica e produtora de conteúdo, desenvolvendo projetos específicos e realizando palestras por todo Brasil. Atua com formação de professores e gestores de instituições educativas, das redes públicas e privadas de ensino.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 bg-brand-lavanda/20 p-3 sm:p-4 rounded">
                    <p className="text-xs sm:text-sm text-brand-chocolate/85">
                      📍 Local será divulgado em breve.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={scrollToForm}
                    className="px-6 py-3 bg-brand-goiaba hover:bg-brand-goiaba/90 text-white font-slab font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
                  >
                    👉 Faça sua inscrição para garantir seu lugar!
                  </button>
                </div>
              </div>
            </div>

            {/* Mentoria */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-2 border-brand-laranja">
              <div className="space-y-4">
                <h4 className="text-xl sm:text-2xl font-slab font-bold text-brand-chocolate">
                  Mentoria
                </h4>

                <div className="space-y-3 bg-brand-creme/30 p-4 sm:p-5 rounded-lg border border-brand-creme">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="text-brand-laranja font-bold text-lg flex-shrink-0">📅</div>
                    <div>
                      <p className="font-bold text-brand-chocolate text-sm sm:text-base">22/01 (quinta-feira) | 18h às 20h — Virtual</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-brand-creme">
                    <p className="text-sm text-brand-chocolate/85 mb-3">
                      <strong>Mediação:</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                      {/* Foto */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden">
                          <img src={fotoLuiz} alt="Luiz Camacho" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      {/* Bio */}
                      <div className="flex-1 text-center sm:text-left">
                        <p className="text-sm font-bold text-brand-chocolate mb-2">Luiz Camacho</p>
                        <div className="text-xs text-brand-chocolate/70 leading-relaxed space-y-2">
                          <p>
                            Psicólogo e pedagogo, com mais de três décadas dedicadas à educação. Iniciou sua trajetória no chão da escola, onde atuou como professor da Educação Infantil e do Ensino Fundamental por 17 anos.
                          </p>
                          <p>
                            Coordenou projetos educacionais no terceiro setor, com destaque para o Pró-Saber São Paulo, na comunidade de Paraisópolis. Atualmente, é Coordenador Pedagógico da escola Estilo de Aprender. Além da educação, dedica-se à poesia, às artes visuais, à marcenaria, à escultura e às viagens de motocicleta.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 bg-brand-lavanda/20 p-3 sm:p-4 rounded border border-brand-lavanda/40">
                    <p className="text-xs sm:text-sm text-brand-chocolate/85 font-semibold">
                      📌 Se a sua experiência já tiver sido escolhida por uma escola, você será direcionado(a) para um grupo de WhatsApp de Mentoria, conforme o contexto de atuação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mensagem Final */}
          <div className="text-center space-y-4 py-6 sm:py-8 px-4">
            <p className="text-lg sm:text-xl font-slab font-bold text-brand-chocolate">
              Um início de ciclo, um gesto de pertencimento
            </p>
            <p className="text-sm sm:text-base text-brand-chocolate/85">
              O ano começa, e com ele, a chance de viver um trabalho de construção coletiva.
            </p>
            <p className="text-sm sm:text-base text-brand-chocolate/85">
              Que esse percurso seja um lugar de força, de encontro e de amadurecimento mútuo.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-base sm:text-lg font-slab font-bold text-brand-chocolate">
                A escola nos espera.
              </p>
              <p className="text-base sm:text-lg font-slab font-bold text-brand-chocolate">
                E a rede caminha junto.
              </p>
            </div>
          </div>

          {/* Formulário de Inscrição */}
          <div className="w-full">
            <RegistrationForm />
          </div>

          {/* Footer */}
          <footer className="text-center mt-12 space-y-4 border-t border-brand-chocolate/10 pt-8">
            <img
              src={logo}
              alt="Labirintar"
              className="w-48 sm:w-64 h-auto mx-auto"
            />
            <p className="text-brand-chocolate/70 text-sm">
              © 2026 Labirintar. Todos os direitos reservados.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;

