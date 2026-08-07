export const TMX_SITES = {
  TMNF: "https://tmnf.exchange",
  TMUF: "https://tmuf.exchange",
  TMN: "https://nations.tm-exchange.com",
  TMO: "https://original.tm-exchange.com",
  TMS: "https://sunrise.tm-exchange.com",
} as const;

export type TMXGame = keyof typeof TMX_SITES;