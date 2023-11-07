type path = string;

export const getBackground = (path?: path) => {
  switch (path) {
    case "/":
      return "#2CA7EB";
    case "/bares":
      return "#E0006D";
    case "/restaurantes":
      return "#FF7525";
    case "/gratuitos":
      return "#1A7F43";
    case "/destaques":
      return "#FCCE0B";
    case "/historico":
      return "#2CA7EB";

    default:
      return "#2CA7EB";
  }
};
