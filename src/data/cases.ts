export type CaseCard = {
  id: number;
  name: string;
  image: string;
};

const names = [
  "Vip Motors",
  "Top Rações",
  "Tabacaria MJ",
  "Renova Veículos",
  "Pule Brinque Animações",
  "Powercell Assistência Técnica",
  "Peralta Cia das Máquinas",
  "Padaria Fabiano",
  "Ótica Rafa Chicre",
  "NG Modas",
  "Mavi Atacadista",
  "FERMAQ Máquinas de Costura",
  "Gama Pet",
  "Espaço Ralyk",
  "Dra. Laíse Carvalho",
  "Mini Caçambas LFA",
  "CM Gourmet Delivery",
  "Almek Nova Friburgo",
  "Almek Boa Sorte",
  "AS Locações",
  "Adoleta Locações",
  "Bocão Despachantes",
  "Barbearia do Maikinho",
  "Barber Shop Machado",
  "Auto Center Quatro Tempos",
  "Fenix - Material de Construção",
  "Vitaris Fit",
  "Sag Contábil",
  "Ralyk Gourmet",
  "Prado Pneus",
  "Pet Store",
  "Panobianco Academia",
  "Novo Veículo",
  "JF Limpeza e Reparo de Exaustores",
];

export const cases: CaseCard[] = names.map((name, index) => {
  const id = index + 1;
  return {
    id,
    name,
    image: `/cards/case-${String(id).padStart(2, "0")}.jpg`,
  };
});

export const rows: [CaseCard[], CaseCard[], CaseCard[]] = [
  cases.slice(0, 12),
  cases.slice(12, 23),
  cases.slice(23, 34),
];
