import './App.css';
import { FaGithub, FaLinkedin, FaUserAlt, FaEnvelope } from 'react-icons/fa';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Axios from 'axios';
import swal from 'sweetalert';
import { useState } from 'react';

function App() {

  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  const url = "https://api-python-portifolio.herokuapp.com/contato";

  const [data, setData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  });

  function submitSendEmail(e) {
    e.preventDefault();
    swal({
      title: "E-mail enviado!",
      text: "Em breve entrarei em contato :D",
      icon: "success",
      button: "Fechar",
    });
    Axios.post(url, data, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(res => {
        console.log(res.data);
      })
    setData({
      nome: "",
      email: "",
      assunto: "",
      mensagem: ""
    });
  };

  function handleGetValue(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo"><a href="#"> Meu <span>Portifólio</span></a></div>
          <ul className="menu">
            <li><a href="#about" className="menu-btn">Sobre</a></li>
            <li><a href="#services" className="menu-btn">Experiências Profissionais / Especializações</a></li>
            <li><a href="#skills" className="menu-btn">Habilidades</a></li>
            <li><a href="#contact" className="menu-btn">Contato</a></li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars" />
          </div>
        </div>
      </nav>
      {/* principal */}
      <section className="home" style={{ justifyContent: 'center' }} id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Olá, sou</div>
            <div className="text-2">Victor Hugo</div>
            <div className="text-3">Desenvolvedor FullStack</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Github */}
            <div style={{ padding: '20px' }}>
              <a style={{ fontSize: '50px', color: 'white' }} href="https://github.com/vhmvictor" target="_blank"><FaGithub /></a>
            </div>
            {/* LinkedIn */}
            <div style={{ padding: '20px' }}>
              <a style={{ fontSize: '50px', color: 'white' }} href="https://www.linkedin.com/in/vhmvictor/" target="_blank"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="fullstack-img">
          <img width={500} src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/05/20-sites-para-aprender-como-programar-de-gra%C3%A7a-1280x720.png" alt="" />
        </div>
      </section>
      {/* sobre */}
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">Sobre</h2>
          <div className="about-content">
            <div className="column left">
              <img src="https://avatars0.githubusercontent.com/u/51443108?s=460&u=d15d6338a528381285ff58cc27ad360e415c98b1&v=4" alt="" />
            </div>
            <div className="column right">
              <div className="text">Desenvolvedor/Estudante/Atleta nas horas vagas</div>
              <p>Estudante de Engenharia de Computação, me especializando em todo ecossistema da linguagem de programação JavaScript, buscando mais conhecimento na área e trabalhando para me tornar referência como Full Stack Developer. Fascinado por tecnologias e tudo que envolve o meio. Atualmente aprimorando meus conhecimentos nas tecnologias: Node.js / Python, React.js e React Native </p>
              <a href="https://drive.google.com/file/d/1qZ2BLL_QtLqWVy68YWvlELKsPw-Ffeam/view?usp=sharing" target="_blank">Download CV</a>
            </div>
          </div>
        </div>
      </section>
      {/* timeline */}
      <section className="services" id="services">
        <div className="vertical-timeline-component">
          <h2 className="title">Timeline</h2>
          <div>
            <VerticalTimeline>
              {timelineElements.map((element) => {
                let isWorkIcon = element.icon === "work";
                let showButton =
                  element.buttonText !== undefined &&
                  element.buttonText !== null &&
                  element.buttonText !== "";

                return (
                  <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                  >
                    <h3 style={{ color: 'black' }} className="vertical-timeline-element-title">
                      {element.title}
                    </h3>
                    <h5 style={{ color: 'black' }} className="vertical-timeline-element-subtitle">
                      {element.location}
                    </h5>
                    <p style={{ color: 'black' }} id="description">{element.description}</p>
                    {showButton && (
                      <a
                        className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                          }`}
                        href="/"
                      >
                        {element.buttonText}
                      </a>
                    )}
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </section>
      {/* habilidades */}
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">Minhas habilidades</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">Minhas habilidades &amp; experiências criativas.</div>
              <p>Eu procuro sempre estar me atualizando com as novas tecnologias que são desenvolvidas e que estão em alta no mundo do desenvolvimento, afim de sempre estar atualizado para o mercado de trabalho e me tornar um profissional mais completo possível. Ao lado, apresento uma classificação das minhas habilidades com diferentes tecnologias que foram desenvolvidas ao longo da minha carreira profissional e com participações em WorkShops e cursos de especialização.</p>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div className="line html" />
              </div>
              <div className="bars">
                <div className="info">
                  <span>CSS</span>
                  <span>70%</span>
                </div>
                <div className="line css" />
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>90%</span>
                </div>
                <div className="line js" />
              </div>
              <div className="bars">
                <div className="info">
                  <span>ReactJs</span>
                  <span>70%</span>
                </div>
                <div className="line reactjs" />
              </div>
              <div className="bars">
                <div className="info">
                  <span>NodeJs</span>
                  <span>90%</span>
                </div>
                <div className="line nodejs" />
              </div>
              <div className="bars">
                <div className="info">
                  <span>Python</span>
                  <span>70%</span>
                </div>
                <div className="line python" />
              </div>
              <div className="bars">
                <div className="info">
                  <span>PHP</span>
                  <span>50%</span>
                </div>
                <div className="line php" />
              </div>
              <div className="bars">
                <div className="info">
                  <span>MySQL</span>
                  <span>80%</span>
                </div>
                <div className="line mysql" />
              </div>
              <div className="bars">
                <div className="info">
                  <span>PostgreSQL</span>
                  <span>60%</span>
                </div>
                <div className="line postgress" />
              </div>
              <div className="bars">
                <div className="info">
                  <span>PowerBI</span>
                  <span>80%</span>
                </div>
                <div className="line powerbi" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contato */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contato</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Projetos / Sugestões / Oportunidades</div>
              <p>Você tem alguma ideia que gostaria de colocar em prática ? Entre em contato por e-mail e vamos discutir melhor!</p>
              <div className="icons">
                <div className="row">
                  <i style={{ fontSize: '30px', color: 'crimson' }}> <FaUserAlt /></i>
                  <div className="info">
                    <div className="head">Victor Hugo Marques</div>
                  </div>
                </div>
                <div className="row">
                  <i style={{ fontSize: '30px', color: 'crimson' }}> <FaEnvelope /></i>
                  <div className="info" style={{ justifyItems: 'center' }}>
                    <div className="head">victor.hugomarques@hotmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Me envie um e-mail!</div>
              <form action="#" onSubmit={(e) => submitSendEmail(e)}>
                <div className="fields">
                  <div className="field name">
                    <input input onChange={(e) => handleGetValue(e)} value={data.nome} type="text" id="nome" placeholder="Nome" required />
                  </div>
                  <div className="field email">
                    <input onChange={(e) => handleGetValue(e)} value={data.email} type="email" id="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input onChange={(e) => handleGetValue(e)} value={data.assunto} type="text" id="assunto" placeholder="Assunto" required />
                </div>
                <div className="field textarea">
                  <textarea onChange={(e) => handleGetValue(e)} value={data.mensagem} cols={30} rows={10} id="mensagem" placeholder="Mensagem..." required defaultValue={""} />
                </div>
                <div className="button">
                  <button type="submit" id="btn-submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* fim */}
      <footer>
        <span>Created By <span style={{ color: 'crimson' }}> Victor Hugo Marques </span> | 2020 All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
