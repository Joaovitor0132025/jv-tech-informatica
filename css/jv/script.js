function solicitarServico(servico) {
  const numero = "5599985289220";
  const mensagem = `Olá, meu nome é ${servico}. Gostaria de solicitar um serviço da JV Tech Informática.`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}
