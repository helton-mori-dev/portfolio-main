import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        aboutMe: `Hi, my name is Helton, Front-End Developer with 8 years of experience and skilled in HTML, CSS, JavaScript, and Vue.js. Experienced in e-commerce platforms, learning management systems and web applications for legal professionals.I value continuous learning and enjoy sharing knowledge with others and building responsible and accessible user interfaces with pixel-perfect layouts detailments and programming with clean code practices.`,
        myWork: "Get to know me",
        myFunction: "About me",
        aboutMeExt: `Front-End Developer with a strong foundation in HTML, CSS, JavaScript, Vue.js and a focus on clean, maintainable code. I’ve created pixel-perfect layouts using CSS3 and also with preprocessors like Sass and UI frameworks like Quasar, Bootstrap and Vuetify. I'm comfortable with vanilla JavaScript and have worked with libs such as Vue, AngularJS, and jQuery. With 8 years of experience, I’ve contributed to front-end architecture decisions, selected libraries and tools, and supported the onboarding and mentoring of new team members. I enjoy helping junior developers grow and sharing what I’ve learned. I’ve also worked with CMS platforms like Magento and private Content Management Systems, collaborating closely with UX/UI and back-end teams to deliver great user interfaces. I’m always looking for ways to use clean code pratices and improve performance. I'm curious by nature and love learning through hands-on experience, always aiming to build better user experiences and grow as a developer. I’ve also worked with PHP and embedded systems, gaining experience beyond front-end development. In my free time, I enjoy funning, reading biographies and listening to podcasts`,
        recentWorksTitle: "Some projects",
        workOngName: "NGO Amaar",
        workOng:
          "The project aimed to improve donation access and facilitate communication between the public and the organization. I collaborated with a designer who led the UX/UI design, and I was responsible for implementing the front-end using Vue.js, Vuetify, Vue Router, and CSS. The website is currently live and in use.",
        goTo: "Go to",
        ecommerceProjects: `Worked on over 100 e-commerce projects, focusing on pixel-perfect implementation of layouts provided by designers. Used technologies such as Magento, PHP, HTML, CSS, Sass, jQuery, and JavaScript to build and maintain high-quality and responsible interfaces. My role involved translating design files into responsive, accessible, and production-ready code, ensuring visual accuracy and performance across browsers and devices.`,
        workMentor: "Test project carried out with Vue.js 3 and Vuex 4",
        letsWork: "Let's work together?",
        contact: "Get in touch",
        developedBy: "Developed by",
        linkHome: "Home",
        linkAbout: "About me",
        linkWork: "Work",
        linkBlog: "Blog",
        companiesWorked: "Companies I created projects for",
      },
    },
    pt: {
      translation: {
        aboutMe:
          "Olá, meu nome é Helton, desenvolvedor Front-End com 8 anos de experiência e conhecimentos principalmente em HTML, CSS, JavaScript e Vue.js. Tenho experiência em de e-commerce, plataformas de aprendizagem e aplicações web voltadas para o setor jurídico. Prezo pelo aprendizado contínuo e compartilhamento de informações. Gosto de construir de interfaces acessíveis e responsáveis, com atenção aos detalhes no layout e práticas de clean code.",
        myWork: "Conheça meu trabalho",
        myFunction: "Sobre mim",
        aboutMeExt: `Desenvolvedor Front-End com sólida base em HTML, CSS, JavaScript e Vue.js, com foco em código limpo e de fácil manutenção. Já criei layouts pixel-perfect usando CSS3, pré-processadores como Sass e frameworks de interface como Quasar, Bootstrap e Vuetify. Tenho familiaridade com JS puro (vanilla) e já trabalhei com bibliotecas como Vue, AngularJS e jQuery. Com 8 anos de experiência, contribuí em decisões de arquitetura front-end, escolha de libs e frameworks, além de apoiar o onboarding e a mentoria de novos integrantes da equipe. Gosto de ajudar desenvolvedores juniores a evoluírem e de compartilhar o que aprendi. Também trabalhei com plataformas CMS como Magento e outros sistemas de gerenciamento de conteúdo, colaborando de perto com times de UX/UI e back-end para entregar interfaces bonitas e responsivas. Estou sempre buscando aplicar boas práticas de clean code e melhorar a performance. Sou naturalmente curioso e gosto de aprender na prática, sempre com o objetivo de criar melhores experiências para o usuário e evoluir como desenvolvedor. Também tenho experiência com PHP e sistemas embarcados, o que ampliou minha atuação além do front-end. No meu tempo livre, gosto de praticar corrida, ler biografias e ouvir podcasts`,
        recentWorksTitle: "Alguns projetos",
        workOngName: "ONG Amaar",
        workOng:
          "O projeto teve como objetivo facilitar doações e facilitar a comunicação entre o público e a ONG. Colaborei com uma designer que liderou a parte de UX/UI, e fui responsável pela implementação do front-end usando Vue.js, Vuetify, Vue Router e CSS.",
        goTo: "Ir para",
        ecommerceProjects: `Trabalhei em mais de 100 projetos de e-commerce, com foco na implementação fiel dos layouts fornecidos pelos designers. Utilizei tecnologias como Magento, PHP, HTML, CSS, Sass, jQuery e JavaScript para desenvolver código front end de alta qualidade. Meu trabalho era transformar os arquivos de design em código responsivo, acessível e pronto para produção, garantindo bom desempenho em diferentes navegadores e dispositivos.`,
        workMentor: "Projeto teste realizado com Vue.js 3 e Vuex 4",
        letsWork: "E aí, vamos trabalhar juntos?",
        contact: "Entre em contato",
        developedBy: "Desenvolvido por",
        linkHome: "Início",
        linkAbout: "Sobre mim",
        linkWork: "Trabalhos",
        linkBlog: "Blog",
        companiesWorked: "Empresas para quem já prestei serviços",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
