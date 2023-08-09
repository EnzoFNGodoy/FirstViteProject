import Header from "./components/Header/Header";
import PostItem from "./components/PostItem/PostItem";
import Sidebar from "./components/Sidebar/Sidebar";

import "./global.css";

import styles from './App.module.css';
import Post from "./models/Post";
import "./models/Author";
import { DAYS_UNIT, HOURS_UNIT, MINUTES_UNIT, MONTHS_UNIT, SECONDS_UNIT, YEARS_UNIT, removeTime } from "./helpers/DateHandler";
import Author from "./models/Author";

const enzo: Author = {
  id: 1,
  name: "Enzo Godoy",
  avatarUrl: "https://github.com/EnzoFNGodoy.png",
  role: "Software Engineer"
};
const alisson: Author = {
  id: 2,
  name: "Alisson Lourenço",
  avatarUrl: "https://github.com/alissoneear.png",
  role: "Frontend Developer"
};
const guilherme: Author = {
  id: 3,
  name: "Guilherme Martins",
  avatarUrl: "https://github.com/GuilhermeCMartins.png",
  role: "Frontend Developer"
}

const posts: Post[] = [
  {
    id: 1,
    author: enzo,
    publishedAt: removeTime(new Date(), 1, SECONDS_UNIT),
    content: "Navegando pelas linhas de código enquanto construo minha carreira no desenvolvimento de software. 🚀 #EquilíbrioProfissionalPessoal"
  },
  {
    id: 2,
    author: alisson,
    publishedAt: removeTime(new Date(), 18, SECONDS_UNIT),
    content: "Do código ao projeto completo: trilhando minha jornada de realização profissional na arquitetura de software. 💻🌟 #ArquitetoDeSucesso"
  },
  {
    id: 3,
    author: guilherme,
    publishedAt: removeTime(new Date(), 1, MINUTES_UNIT),
    content: "Cada bug superado e cada projeto concluído são passos na direção do meu crescimento profissional e pessoal como desenvolvedor de software. 💻🌱 #RealizaçãoConstante"
  },
  {
    id: 4,
    author: alisson,
    publishedAt: removeTime(new Date(), 27, MINUTES_UNIT),
    content: "Escrevendo linhas de código e moldando minha carreira, um commit de cada vez. 🚀🔧 #RealizaçãoNoCódigo"
  },
  {
    id: 5,
    author: enzo,
    publishedAt: removeTime(new Date(), 1, HOURS_UNIT),
    content: "Conquistando marcos profissionais enquanto construo estruturas robustas de código. 🏆🏗️ #CrescendoComSoftware"
  },
  {
    id: 6,
    author: guilherme,
    publishedAt: removeTime(new Date(), 7, HOURS_UNIT),
    content: "Codificando sonhos em realidade e construindo uma base sólida para minha carreira em desenvolvimento de software. 💡👩‍💻 #RealizaçãoTecnológica"
  },
  {
    id: 7,
    author: alisson,
    publishedAt: removeTime(new Date(), 1, DAYS_UNIT),
    content: "Transformando linhas de código em realizações profissionais e satisfação pessoal. 🖥️💡 #DesenvolvimentoComPropósito"
  },
  {
    id: 8,
    author: enzo,
    publishedAt: removeTime(new Date(), 3, DAYS_UNIT),
    content: "Dos algoritmos à estruturação avançada, encontrando satisfação pessoal ao conquistar desafios no mundo do software. 🧩🏁 #CaminhoDoSucesso"
  },
  {
    id: 9,
    author: alisson,
    publishedAt: removeTime(new Date(), 1, MONTHS_UNIT),
    content: "Digitando meu caminho para o sucesso profissional e pessoal no universo da programação. 🌟👩‍💻 #CodificandoConquistas"
  },
  {
    id: 10,
    author: enzo,
    publishedAt: removeTime(new Date(), 6, MONTHS_UNIT),
    content: "Moldando meu futuro através do desenvolvimento de software. 💼👩‍💻 Encontrando equilíbrio entre o crescimento profissional e a satisfação pessoal na busca por soluções inovadoras. #RealizaçãoEmCódigo"
  },
  {
    id: 11,
    author: alisson,
    publishedAt: removeTime(new Date(), 1, YEARS_UNIT),
    content: "Explorando as fronteiras da arquitetura de software, enquanto meu crescimento profissional alcança novos horizontes. 🌆🔍 #ConstruindoFuturos"
  },
  {
    id: 12,
    author: guilherme,
    publishedAt: removeTime(new Date(), 3, YEARS_UNIT),
    content: "Cada linha de código é uma oportunidade para avançar em minha busca por realizações profissionais e pessoais. 💻🎯 #CódigosDoSucesso"
  }
];

const App = () => {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts?.map(
              post => <PostItem key={post.id} post={post}></PostItem>
            )
          }
        </main>
      </div>
    </div>
  )
}

export default App;
