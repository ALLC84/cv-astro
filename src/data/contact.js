import imageAvatar from '@assets/images/imgabout.jpg';
import CallIcon from '@assets/images/call_white.svg';
import EmailIcon from '@assets/images/email_white.svg';
import LinkIcon from '@assets/images/link_white.svg';

export default {
  name: 'Alejandro Llorente',
  profession: 'Desarrollador Frontend',
  about:
    'Desarrollador web con experiencia utilizando Vue y React. Actualmente ocupo un puesto de desarrollador fontend en Conisel15,  Madrid, trabajando en proyectos para Ald Automotive.',
  image: imageAvatar,
  call: {
    phone: 618377176,
    title: 'Lláme',
    icon: CallIcon
  },
  mail: {
    email: 'alejandro22cuba@hotmail.com',
    title: 'Envía un correo',
    icon: EmailIcon
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/alejandro-llorente-cardenache-b7ba40197/',
    title: 'Linkedin',
    icon: LinkIcon
  },
};
