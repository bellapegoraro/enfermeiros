import banner from "../../images/banner.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <p className="bannerText">
        EnfermoWork é um inovador marketplace dedicado a conectar enfermeiros
        qualificados com oportunidades de turnos em unidades de saúde. Nosso
        objetivo é facilitar o encontro entre profissionais da enfermagem e
        hospitais, clínicas e unidades básicas de saúde que precisam de suporte
        imediato.
      </p>
    </div>
  );
}

export default Banner;
