import { useState } from "react";

const Accordion = (props) => {
  return (
    <div className="border rounded-md mb-1 text-black bg-lightGreen-100">
      <button
        className={`w-full p-4 text-left hover:bg-lemonGreen-100 active:bg-lemonGreen-100 transition duration-300 ${props.isOpen ? 'bg-lemonGreen-100' : 'bg-lightGreen-100'}`}
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`text-black float-right transform ${
                      props.isOpen ? "rotate-180" : "rotate-0"
                    }  
                      transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && (
        <div className="p-4 text-black bg-white">{props.data}</div>
      )}
    </div>
  );
};

const Collapse = ({items}) => {
  const [...faqs] = items;
  const [accordions, setAccordion] = useState(faqs);
  // const [accordions, setAccordion] = useState([
  // 	{
  // 		key: 1,
  // 		title: '¿Qué tipos de residuos biocontaminantes manejan?',
  // 		data: `Manejamos residuos biológicos y sanitarios generados en hospitales, clínicas, laboratorios y centros de salud, incluyendo agujas, jeringas, material quirúrgico, y desechos patológicos.`,
  // 		isOpen: false
  // 	},
  // 	{
  // 		key: 2,
  // 		title: '¿Cómo aseguran la seguridad en la recolección y transporte de los residuos?',
  // 		data: `Utilizamos contenedores especializados y vehículos certificados para el transporte seguro de residuos biocontaminantes. Además, nuestro personal recibe capacitación constante en normas de seguridad y manejo de residuos peligrosos.`,
  // 		isOpen: false
  // 	},
  // 	{
  // 		key: 3,
  // 		title: '¿Cuáles son las normativas que cumplen sus servicios?',
  // 		data: `Cumplimos con todas las normativas nacionales e internacionales en materia de gestión de residuos biocontaminantes, incluyendo las directrices de la Organización Mundial de la Salud (OMS) y las regulaciones locales de salud y medio ambiente.`,
  // 		isOpen: false
  // 	},
  // 	{
  // 		key: 4,
  // 		title: '¿Ofrecen servicios de emergencia para la recolección de residuos?',
  // 		data: 'Sí, contamos con un servicio de recolección de emergencia disponible las 24 horas del día, los 7 días de la semana, para atender situaciones urgentes en centros de salud.',
  // 		isOpen: false
  // 	},
  // 	{
  // 		key: 5,
  // 		title: '¿Cómo puedo contratar sus servicios?',
  // 		data: 'Puede contactarnos a través de nuestro formulario en línea, llamando a nuestro número de atención al cliente, o enviando un correo electrónico a nuestra dirección de contacto. Nuestro equipo se pondrá en contacto con usted para ofrecerle una solución personalizada.',
  // 		isOpen: false
  // 	},
  // 	{
  // 		key: 6,
  // 		title: '¿Qué medidas toman para minimizar el impacto ambiental?',
  // 		data: 'Nos esforzamos por utilizar tecnologías y métodos de tratamiento que reduzcan el impacto ambiental. Promovemos la reducción, reutilización y reciclaje de residuos cuando es posible, y aseguramos una disposición final adecuada de los desechos biocontaminantes.',
  // 		isOpen: false
  // 	},
  // 	{
  // 		key: 8,
  // 		title: '¿Ofrecen capacitación en manejo de residuos a sus clientes?',
  // 		data: 'Sí, ofrecemos programas de capacitación para el personal de nuestros clientes, enfocados en el manejo seguro y correcto de residuos biocontaminantes, cumpliendo con las normativas y mejores prácticas del sector.',
  // 		isOpen: false
  // 	},

  // ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.id === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div>
      {accordions.map((accordion) => {
        return (
          <Accordion
            key={accordion.id}
            title={accordion.question}
            data={accordion.answer}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.id)}
          />
        );
      })}
    </div>
  );
};

export default Collapse;
