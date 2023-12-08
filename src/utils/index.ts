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

export const getEstablishmentBackground = (type: any) => {
  const filtred = type.map((item: any) => item.name);

  if (filtred.includes("destaque")) {
    return "#F7D159";
  } else if (filtred.includes("bar")) {
    return "#FD3C48";
  } else if (filtred.includes("restaurante")) {
    return "#1CCAAF";
  } else if (filtred.includes("cultura")) {
    return "#5CB564";
  } else if (filtred.includes("historico")) {
    return "#F9E4D4";
  }
};

export const getFontTheme = (type: any) => {
  const filtred = type.map((item: any) => item.name);

  if (filtred.includes("destaque")) {
    return "dark";
  } else if (filtred.includes("bar")) {
    return "light";
  } else if (filtred.includes("restaurante")) {
    return "light";
  } else if (filtred.includes("cultura")) {
    return "light";
  } else if (filtred.includes("historico")) {
    return "dark";
  }
};
