import React, { useState, useEffect } from "react";

export const RegistrationForm = () => {
  const [educadores, setEducadores] = useState([]);
  const [loadingEducadores, setLoadingEducadores] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isManualEntry, setIsManualEntry] = useState(false);

  // Buscar educadores da API
  useEffect(() => {
    const fetchEducadores = async () => {
      try {
        setLoadingEducadores(true);
        const response = await fetch('https://n8n.injunior.com.br/webhook/educadores');
        const data = await response.json();
        setEducadores(data);
      } catch (err) {
        console.error('Erro ao buscar educadores:', err);
        setError('Erro ao carregar lista de educadores. Por favor, tente novamente.');
      } finally {
        setLoadingEducadores(false);
      }
    };

    fetchEducadores();
  }, []);

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

    const educador = educadores.find((edu) => edu.name === selectedNome);

    if (educador) {
      setName(educador.name);

      // Preenche e-mail se existir
      if (educador.email && educador.email.trim() !== "") {
        setEmail(educador.email);
      } else {
        setEmail("");
      }

      // Preenche telefone se existir
      if (educador.phone_number && educador.phone_number.trim() !== "") {
        const formatted = formatPhone(educador.phone_number);
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
        percurso: 'percurso-educativo',
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
          Estamos muito felizes em ter você neste percurso educativo.
        </p>
        <p className="text-brand-chocolate text-lg mb-4">
          Em breve, você receberá um e-mail com todas as informações necessárias
          para participar.
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
        Inscrição - Percurso Educativo
      </h3>
      <p className="text-center text-brand-chocolate/70 mb-6 text-sm">
        Preencha os dados abaixo para garantir sua vaga
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="educador"
            className="block text-sm font-bold text-brand-chocolate text-left mb-2"
          >
            Nome
          </label>
          {loadingEducadores ? (
            <div className="w-full px-4 py-3 bg-brand-creme/30 border border-brand-creme rounded-lg text-center text-brand-chocolate/70">
              Carregando educadores...
            </div>
          ) : (
            <select
              id="educador"
              onChange={handleEducadorChange}
              className="w-full px-4 py-3 bg-white border border-brand-creme rounded-lg focus:ring-2 focus:ring-brand-laranja focus:outline-none transition duration-200"
              disabled={isLoading}
            >
              <option value="">-- Selecione seu nome --</option>
              {/* <option value="manual">✏️ Digitar manualmente</option> */}
              {[...educadores]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((educador, index) => (
                  <option key={index} value={educador.name}>
                    {educador.name}
                  </option>
                ))}
            </select>
          )}
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
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-brand-goiaba text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-goiaba transform hover:scale-105 transition-all duration-300 shadow-md disabled:bg-brand-goiaba/60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? "Enviando..." : "Confirmar Inscrição"}
          </button>
        </div>
      </form>
    </div>
  );
};
