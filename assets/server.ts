import uuid from "react-native-uuid";
import { Usuario } from "../src/types/usuario";
import { TipoViagem, Viagem } from "../src/types/viagem";

const server: { usuarios: Usuario[]; viagens: Viagem[] } = {
  usuarios: [
    {
      id: uuid.v4(),
      nome: "Luiz Fernando",
      dataNascimento: "01/01/2020",
      cpf: "111.222.333-44",
      genero: 'Masculino',
      telefone: "010203040",
      cidade: "Belo Horizonte",
      estado: "Minas Gerais",
      email: "luiz@gmail.com",
      senha: "123",
    },
  ],
  viagens: [
    {
      titulo: "Atravesse o Deserto no Chile",
      valor: 3769,
      foto: "viagens/atacama.png",
      dataIda: "23/09/2025",
      dataVolta: "30/09/2025",
      origem: "Rio Branco",
      estadoOrigem: 'Acre',
      destino: "Atacama",
      tipo: TipoViagem.ida,
    },
    {
      titulo: "Navegue pelos canais de Veneza",
      valor: 4638.90,
      foto: "viagens/veneza.png",
      dataIda: "13/07/2025",
      dataVolta: "23/07/2025",
      origem: "Maceió",
      estadoOrigem: 'Alagoas',
      destino: "Veneza",
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: "Conheça a Terra do Fogo",
      valor: 5769.50,
      foto: "viagens/patagonia.png",
      dataIda: "03/04/2025",
      dataVolta: "13/04/2025",
      origem: "Fortaleza",
      estadoOrigem: 'Ceará',
      destino: "Patagonia",
      tipo: TipoViagem.ida,
    },
    {
      titulo: "Aprecie milhões de anos de história geológica",
      valor: 5837.53,
      foto: "viagens/grandCanyon.png",
      dataIda: "06/08/2025",
      dataVolta: "26/08/2025",
      origem: "Cuiabá",
      estadoOrigem: 'Mato Grosso',
      destino: "Grand Canyon",
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: "Conheça a Turquia",
      valor: 1000,
      foto: "viagens/turquia.png",
      dataIda: "09/09/2024",
      dataVolta: "12/09/2024",
      origem: "Belo Horizonte",
      estadoOrigem: 'Minas Gerais',
      destino: "Turquia",
      tipo: TipoViagem.ida,
    },
    {
      titulo: "Visite a impressionante Cordilheira dos Andes",
      valor: 2946,
      foto: "viagens/cordilheiraDosAndes.png",
      dataIda: "19/11/2025",
      dataVolta: "04/12/2025",
      origem: "Palmas",
      estadoOrigem: 'Tocantins',
      destino: "La paz",
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: "1 semana em Nova York",
      valor: 1550,
      foto: "viagens/novaYork.png",
      dataIda: '12/06/2023',
      dataVolta: '19/06/2023',
      origem: 'Rio de Janeiro',
      estadoOrigem: 'Rio de Janeiro',
      destino: 'Nova York',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'Conheça bonito',
      valor: 580,
      foto: "viagens/bonito.png",
      dataIda: '14/12/2023',
      dataVolta: '17/12/2023',
      origem: 'São Paulo',
      estadoOrigem: 'São Paulo',
      destino: 'Bonito',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'Vá para Toronto',
      valor: 900,
      foto: "viagens/toronto.png",
      dataIda: '01/02/2024',
      origem: 'São Paulo',
      estadoOrigem: 'São Paulo',
      destino: 'Toronto',
      tipo: TipoViagem.ida,
    },
    {
      titulo: 'Uma viagem inesquecível',
      valor: 5590,
      foto: "viagens/viena.png",
      dataIda: '05/03/2024',
      dataVolta: '10/03/2024',
      origem: 'Recife',
      estadoOrigem: 'Pernambuco',
      destino: 'Viena',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'Um encontro com o Brasil',
      valor: 850,
      foto: "viagens/salvador.png",
      dataIda: '07/09/2024',
      dataVolta: '17/09/2024',
      origem: 'Florianópolis',
      estadoOrigem: 'Santa Catarina',
      destino: 'Salvador',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'Maldivas brasileiras',
      valor: 999,
      foto: "viagens/arraialDoCabo.png",
      dataIda: '23/08/2024',
      dataVolta: '23/09/2024',
      origem: 'Manaus',
      estadoOrigem: 'Amazonas',
      destino: 'Arraial do Cabo',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: '3 noites em Tokyo',
      valor: 1207,
      foto: "viagens/tokyo.png",
      dataIda: '23/08/2024',
      dataVolta: '26/08/2024',
      origem: 'Vitória',
      estadoOrigem: 'Espírito Santo',
      destino: 'Tokyo',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'Aproveite seu verão em grande estilo',
      valor: 2890,
      foto: "viagens/recife.png",
      dataIda: '25/11/2024',
      dataVolta: '10/12/2024',
      origem: 'Florianópolis',
      estadoOrigem: 'Santa Catarina',
      destino: 'Recife',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'Conheça Cusco',
      valor: 3940,
      foto: "viagens/cusco.png",
      dataIda: '10/01/2025',
      dataVolta: '20/01/2025',
      origem: 'Belo Horizonte',
      estadoOrigem: 'Minas Gerais',
      destino: 'Cusco',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'Estude na Austrália',
      valor: 6020,
      foto: "viagens/sidney.png",
      dataIda: '25/02/2025',
      origem: 'Goiânia',
      estadoOrigem: 'Goiás',
      destino: 'Sidney',
      tipo: TipoViagem.ida,
    },
    {
      titulo: 'Uma semana incrível',
      valor: 9370,
      foto: "viagens/bangkok.png",
      dataIda: '18/03/2025',
      dataVolta: '25/03/2025',
      origem: 'São Luis',
      estadoOrigem: 'Maranhão',
      destino: 'Bangkok',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'Visite a cidade luz',
      valor: 12356,
      foto: "viagens/paris.png",
      dataIda: '05/04/2025',
      dataVolta: '30/04/2025',
      origem: 'Brasília',
      estadoOrigem: 'Distrito Federal',
      destino: 'Paris',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: '5 dias em Amsterdã',
      valor: 5700,
      foto: "viagens/amsterda.png",
      dataIda: '02/05/2025',
      dataVolta: '07/05/2025',
      origem: 'Maceió',
      estadoOrigem: 'Alagoas',
      destino: 'Amsterdã',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'México como você nunca viu',
      valor: 2460,
      foto: "viagens/cidadeDoMexico.png",
      dataIda: '14/05/2025',
      dataVolta: '24/05/2025',
      origem: 'Belém',
      estadoOrigem: 'Pará',
      destino: 'Cidade do México',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'Viva a noite de Madrid',
      valor: 1900,
      foto: "viagens/madrid.png",
      dataIda: '10/06/2025',
      dataVolta: '20/06/2025',
      origem: 'Porto Alegre',
      estadoOrigem: 'Rio Grande do Sul',
      destino: 'Madrid',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'O melhor de Los Angeles',
      valor: 10850,
      foto: "viagens/losAngeles.png",
      dataIda: '25/07/2025',
      dataVolta: '30/07/2025',
      origem: 'Palmas',
      estadoOrigem: 'Tocantins',
      destino: 'Los Angeles',
      tipo: TipoViagem.idaEVolta,
    },
    {
      titulo: 'Passeie pela capital portuguesa',
      valor: 2397,
      foto: "viagens/lisboa.png",
      dataIda: '14/08/2025',
      dataVolta: '24/08/2025',
      origem: 'Teresina',
      estadoOrigem: 'Piauí',
      destino: 'Lisboa',
      tipo: TipoViagem.idaEVolta,
    },
  ],
};

export default server;
