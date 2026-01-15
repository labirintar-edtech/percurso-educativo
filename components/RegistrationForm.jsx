import React, { useState } from "react";

const eventDates = [
  { date: "11 de Novembro", eventId: "1761669893231x282187932206891000" },
];

const educadores = [
  {
    Nome: "Cristiane Velasco",
    Telefone: "11 912444584",
    "E-mail": "crisdelvel@hotmail.com",
  },
  {
    Nome: "Eduardo Moreira",
    Telefone: "11 919552181",
    "E-mail": "edu@clubesa.com.br",
  },
  {
    Nome: "Rex (Lemuel Santos)",
    Telefone: "11 942861979",
    "E-mail": "andarilho.rex@gmail.com",
  },
  {
    Nome: "João Venturini",
    Telefone: "11 952766961",
    "E-mail": "jopaventurini@hotmail.com",
  },
  {
    Nome: "Iris Carano",
    Telefone: "11 952787767",
    "E-mail": "irissthefanyg.c@gmail.com",
  },
  {
    Nome: "César",
    Telefone: "11 954628658",
    "E-mail": "cesarfabianolopes@gmail.com",
  },
  {
    Nome: "Livia Raizer",
    Telefone: "11 954685618",
    "E-mail": "liviaraizerr@gmail.com",
  },
  {
    Nome: "Samir",
    Telefone: "11 958188884",
    "E-mail": NaN,
  },
  {
    Nome: "André Montilha",
    Telefone: "11 960573414",
    "E-mail": "demontilha@gmail.com",
  },
  {
    Nome: "May",
    Telefone: "11 961694143",
    "E-mail": "artederuanaminhaescola@gmail.com",
  },
  {
    Nome: "Adriana Bragotto",
    Telefone: "11 961774774",
    "E-mail": NaN,
  },
  {
    Nome: "Marcos de Moraes",
    Telefone: "11 964292117",
    "E-mail": "contato.marcosmoraes2@gmail.com",
  },
  {
    Nome: "Leonardo Galvão",
    Telefone: "11 970156120",
    "E-mail": "leonardogalvao98@gmail.com",
  },
  {
    Nome: "Guilherme Federighi",
    Telefone: "11 972605333",
    "E-mail": "guifederighi@gmail.com",
  },
  {
    Nome: "Beca Chang",
    Telefone: "11 981097924",
    "E-mail": "becachang.ceramica@gmail.com",
  },
  {
    Nome: "Carlos",
    Telefone: "11 981286814",
    "E-mail": "carlos@dronelab.com.br",
  },
  {
    Nome: "Maria Lívia",
    Telefone: "11 982153004",
    "E-mail": "marialivia@labirintar.com.br",
  },
  {
    Nome: "Danilo Alves",
    Telefone: "11 982315312",
    "E-mail": NaN,
  },
  {
    Nome: "Babi Rubira",
    Telefone: "11 984084640",
    "E-mail": NaN,
  },
  {
    Nome: "Túlio",
    Telefone: "11 984566007",
    "E-mail": NaN,
  },
  {
    Nome: "Alex Uzueli",
    Telefone: "11 985824928",
    "E-mail": NaN,
  },
  {
    Nome: "Chico Maciel",
    Telefone: "11 986316238",
    "E-mail": "design.chico@gmail.com",
  },
  {
    Nome: "Michelle Galindo",
    Telefone: "11 989410215",
    "E-mail": NaN,
  },
  {
    Nome: "José Carlos",
    Telefone: "47 999879495",
    "E-mail": "josecjunior95@gmail.com",
  },
  {
    Nome: "Marco Novais",
    Telefone: "11 989980480",
    "E-mail": "studio.mobma@gmail.com",
  },
  {
    Nome: "Cláudia Bavagnoli",
    Telefone: "11 991292097",
    "E-mail": "claubavagnoli@hotmail.com",
  },
  {
    Nome: "Michelle Zeitel",
    Telefone: "11 992001042",
    "E-mail": "michellezeitel@usp.br",
  },
  {
    Nome: "Felipe Almeida",
    Telefone: "11 992140690",
    "E-mail": "contato@seufilao.com.br",
  },
  {
    Nome: "Leo Oshiro",
    Telefone: "11 992762000",
    "E-mail": "oeducadorfisico@gmail.com",
  },
  {
    Nome: "Theo Grahl",
    Telefone: "11 992875879",
    "E-mail": NaN,
  },
  {
    Nome: "Andrea Peres",
    Telefone: "11 995577458",
    "E-mail": "andreadperes@gmail.com",
  },
  {
    Nome: "Lucas Lorena",
    Telefone: "11 997479378",
    "E-mail": "lucklorena90@gmail.com",
  },
  {
    Nome: "Ana Medeiros",
    Telefone: "11 998188598",
    "E-mail": "anamedeiros93@gmail.com",
  },
  {
    Nome: "Luiz Camacho",
    Telefone: "11 999965228",
    "E-mail": "camacholuiz@gmail.com",
  },
  {
    Nome: "Gustavo Santos",
    Telefone: "21 985581292",
    "E-mail": NaN,
  },
  {
    Nome: "Kristina Gonçalves",
    Telefone: "27 999696687",
    "E-mail": "kristinakcg@gmail.com",
  },
  {
    Nome: "Keli Rodrigues",
    Telefone: "41 991333511",
    "E-mail": "keli.leal.cruz@gmail.com",
  },
  {
    Nome: "Everton França",
    Telefone: "81 987930690",
    "E-mail": "evertonluiz5470@gmail.com",
  },
  {
    Nome: "Ariela",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Carol Zanet",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Elisa Lunardi",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Felipe Corsini",
    Telefone: "11 972499176",
    "E-mail": "felipe.corsini@gmail.com",
  },
  {
    Nome: "Flora Barcellos",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Fran Busico",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Giulliana",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Mateus",
    Telefone: "11 994582196",
    "E-mail": "mateusmdm10@gmail.com",
  },
  {
    Nome: "Silvinha Lopes",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Tati Garrido",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Laura",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Thiago Freitas",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Thiago Sgambato",
    Telefone: "11 984983640",
    "E-mail": NaN,
  },
  {
    Nome: "Beátriz Kovacsik",
    Telefone: "11 976921828",
    "E-mail": "mensagem@beatrizkovacsik.com",
  },
  {
    Nome: "Dani Storto",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Ricardo Sylos",
    Telefone: "11 994540774",
    "E-mail": "ricardosylosa@gmail.com",
  },
  {
    Nome: "Fernando Del Santo",
    Telefone: "11 945110594",
    "E-mail": NaN,
  },
  {
    Nome: "Ricardo Sylos",
    Telefone: "11 994540774",
    "E-mail": NaN,
  },
  {
    Nome: "Rafael Darrouy",
    Telefone: "27 992845455",
    "E-mail": NaN,
  },
  {
    Nome: "Yuri",
    Telefone: "13 991376639",
    "E-mail": NaN,
  },
  {
    Nome: "Ricardo Dadu",
    Telefone: "11 968606297",
    "E-mail": NaN,
  },
  {
    Nome: "Nanda Sales",
    Telefone: "11 994672182",
    "E-mail": "fsbsales@gmail.com",
  },
  {
    Nome: "Claudia Rossi",
    Telefone: "11 987530991",
    "E-mail": "claudia.rossi@conectareducadores.com.br",
  },
  {
    Nome: "Júlia Keunecke",
    Telefone: "11 972782277",
    "E-mail": "liatrabalhosfacul@gmail.com",
  },
  {
    Nome: "Alex Pena",
    Telefone: "11 959826207",
    "E-mail": NaN,
  },
  {
    Nome: "Sandra Baroni",
    Telefone: "11 981565533",
    "E-mail": "sandra@didatech.com.br",
  },
  {
    Nome: "Lourdes Atié",
    Telefone: "11 983888909",
    "E-mail": "lourdesatie@terra.com.br",
  },
  {
    Nome: "Marco Stiepcich",
    Telefone: "11 985859149",
    "E-mail": "marco.stiepcich@gmail.com",
  },
  {
    Nome: "Luiz Paulo",
    Telefone: "11 972817557",
    "E-mail": "luiz.paulo.m.souza@gmail.com",
  },
  {
    Nome: "Ricardo Yamamoto",
    Telefone: "11 973744608",
    "E-mail": "yamadrone.drone@gmail.com",
  },
  {
    Nome: "Beatriz Kovacsik",
    Telefone: "11 976921828",
    "E-mail": "biamirandak@gmail.com",
  },
  {
    Nome: "YURI CORREA PIRATELLO",
    Telefone: "11 44265108",
    "E-mail": "yuridesenhista@hotmail.com",
  },
  {
    Nome: "Lucimara",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Renato",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Deise",
    Telefone: NaN,
    "E-mail": NaN,
  },
  {
    Nome: "Matheus Chima",
    Telefone: "11 991995005",
    "E-mail": "chima.tinta@gmail.com",
  },
  {
    Nome: "Regiane",
    Telefone: "11 933173361",
    "E-mail": NaN,
  },
  {
    Nome: "Kelly",
    Telefone: "11 968893767",
    "E-mail": NaN,
  },
];

export const RegistrationForm = ({ selectedPath }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isManualEntry, setIsManualEntry] = useState(false);

  const getPathTitle = () => {
    switch(selectedPath) {
      case 'base':
        return 'Percurso Educativo — Formação Base da Rede';
      case 'beacon':
        return 'Mentoria e Percurso Pedagógico — Beacon School';
      case 'viva':
        return 'Mentoria e Percurso Pedagógico — Escola Viva';
      default:
        return 'Percurso Educativo';
    }
  };

  const handleEducadorChange = (e) => {
    const selectedNome = e.target.value;

    if (selectedNome === "manual") {
      setIsManualEntry(true);
      setName("");
      setEmail("");
      setPhone("");
      return;
    }

    setIsManualEntry(false);

    if (selectedNome === "") {
      setName("");
      setEmail("");
      setPhone("");
      return;
    }

    const educador = educadores.find((edu) => edu.Nome === selectedNome);

    if (educador) {
      setName(educador.Nome);

      // Preenche e-mail se existir e não for NaN
      const emailValue = educador["E-mail"];
      if (
        emailValue &&
        typeof emailValue === "string" &&
        emailValue.trim() !== ""
      ) {
        setEmail(emailValue);
      } else {
        setEmail("");
      }

      // Preenche telefone se existir e não for NaN
      const telefoneValue = educador.Telefone;
      if (
        telefoneValue &&
        typeof telefoneValue === "string" &&
        telefoneValue.trim() !== ""
      ) {
        const formatted = formatPhone(telefoneValue);
        setPhone(formatted);
      } else {
        setPhone("");
      }
    }
  };


  const formatPhone = (value) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");

    // Aplica a máscara
    if (numbers.length <= 10) {
      // Formato: (XX) XXXX-XXXX
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      // Formato: (XX) XXXXX-XXXX
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 15); // Limita ao tamanho máximo
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const payload = {
        name: name,
        email: email,
        phoneNumber: phone,
        percurso: selectedPath,
      };

      console.log("Enviando requisição:", payload);

      const response = await fetch(
        "https://n8n.labirintar.com.br/webhook/percurso-educativo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      console.log("Resposta recebida:", response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erro na resposta:", errorText);
        throw new Error(`Erro ${response.status}: ${errorText}`);
      }

      console.log("Inscrição enviada com sucesso!");
      setIsSubmitted(true);
    } catch (err) {
      console.error("Falha na inscrição:", err);
      setError(
        `Ocorreu um erro ao enviar sua inscrição: ${err.message}. Por favor, tente novamente.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 text-center">
        <h3 className="font-slab text-2xl sm:text-3xl font-bold text-brand-goiaba mb-4">
          Inscrição confirmada!
        </h3>
        <p className="text-brand-chocolate text-lg mb-4">
          Estamos muito felizes em ter você neste percurso formativo.
        </p>
        <p className="text-brand-chocolate text-lg mb-4">
          Em breve, você receberá um e-mail com todas as informações necessárias para participar.
        </p>
        <p className="text-brand-chocolate text-lg">
          Bem-vindo(a) ao sistema educativo da Labirintar!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
      <h3 className="font-slab text-2xl sm:text-3xl font-bold text-brand-chocolate text-center mb-2">
        Inscrição
      </h3>
      <p className="text-center text-brand-chocolate/70 mb-6 text-sm">
        {getPathTitle()}
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="educador"
            className="block text-sm font-bold text-brand-chocolate text-left mb-2"
          >
            Nome
          </label>
          <select
            id="educador"
            onChange={handleEducadorChange}
            className="w-full px-4 py-3 bg-white border border-brand-creme rounded-lg focus:ring-2 focus:ring-brand-laranja focus:outline-none transition duration-200"
            disabled={isLoading}
          >
            <option value="">-- Selecione seu nome --</option>
            <option value="manual">✏️ Digitar manualmente</option>
            {[...educadores]
              .sort((a, b) => a.Nome.localeCompare(b.Nome))
              .map((educador, index) => (
                <option key={index} value={educador.Nome}>
                  {educador.Nome}
                </option>
              ))}
          </select>
        </div>

        {isManualEntry && (
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-brand-chocolate text-left mb-2"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-brand-creme rounded-lg focus:ring-2 focus:ring-brand-laranja focus:outline-none transition duration-200"
              placeholder="Seu nome completo"
              required
              disabled={isLoading}
            />
          </div>
        )}

        {!isManualEntry && name && (
          <div className="p-3 bg-brand-creme/30 rounded-lg border border-brand-creme flex items-center justify-between">
            <p className="text-sm text-brand-chocolate">
              <strong>Educador selecionado:</strong> {name}
            </p>
            <button
              type="button"
              onClick={() => {
                setIsManualEntry(true);
                const selectElement = document.getElementById("educador");
                if (selectElement) {
                  selectElement.value = "manual";
                }
              }}
              className="text-sm text-brand-laranja hover:text-brand-laranja/80 font-semibold underline ml-4"
            >
              Editar
            </button>
          </div>
        )}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-brand-chocolate text-left mb-2"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-brand-creme rounded-lg focus:ring-2 focus:ring-brand-laranja focus:outline-none transition duration-200"
            placeholder="seu@email.com"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-bold text-brand-chocolate text-left mb-2"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            className="w-full px-4 py-3 bg-white border border-brand-creme rounded-lg focus:ring-2 focus:ring-brand-laranja focus:outline-none transition duration-200"
            placeholder="(XX) XXXXX-XXXX"
            required
            disabled={isLoading}
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-brand-goiaba text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-goiaba transform hover:scale-105 transition-all duration-300 shadow-md disabled:bg-brand-goiaba/60 disabled:cursor-not-allowed disabled:transform-none mx-auto block w-full"
        >
          {isLoading ? "Enviando..." : "Confirmar Inscrição"}
        </button>
      </form>
    </div>
  );
};
