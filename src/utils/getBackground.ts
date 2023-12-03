type path = string;

export const getMenuTitle = (path?: path) => {
  switch (path) {
    case "/":
      return "Início";
    case "/bares":
      return "Bares";
    case "/restaurantes":
      return "Restaurantes";
    case "/cultura":
      return "Cultura";
    case "/destaques":
      return "Destaques";
    case "/historico":
      return "Histórico";
    case "/fale-conosco":
      return "Fale Conosco";
    default:
      return "início";
  }
};
