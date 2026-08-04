(() => {
  const supported = ['ca', 'es', 'en'];
  const requested = new URLSearchParams(location.search).get('lang');
  const locale = supported.includes(requested) ? requested : 'ca';

  const ca = {
    'Saltar al contenido':'Saltar al contingut','Abrir menú':'Obrir el menú','Navegación principal':'Navegació principal','Calfer Workspace, inicio':'Calfer Workspace, inici','Idioma':'Idioma',
    'Espacios':'Espais','Tarifas':'Tarifes','Ventajas':'Avantatges','Preguntas':'Preguntes','Reservar visita':'Reservar visita',
    'Próxima apertura · Esplugues de Llobregat':'Pròxima obertura · Esplugues de Llobregat','Tu espacio para':'El teu espai per','hacer que pase.':'fer que passi.',
    'Coworking flexible con el respaldo de Calfergrup. Un lugar profesional, cercano y listo para trabajar desde el primer minuto.':'Coworking flexible amb el suport de Calfergrup. Un lloc professional, proper i preparat per treballar des del primer minut.',
    'Explorar tarifas':'Explorar tarifes','Probar un día gratis':'Provar un dia gratis','Desde':'Des de','Acceso':'Accés','Permanencia':'Permanència','0 meses':'0 mesos','Descubre':'Descobreix',
    'Fibra 1 Gb':'Fibra 1 Gb','Café ilimitado':'Cafè il·limitat','Salas equipadas':'Sales equipades','Limpieza diaria':'Neteja diària','Comunidad local':'Comunitat local',
    'Más que una mesa':'Més que una taula','Todo lo que necesitas.':'Tot el que necessites.','Nada que te ate.':'Res que et lligui.',
    'Concentración cuando la necesitas. Conversaciones cuando te apetecen. Hemos diseñado cada rincón para que tu día fluya.':'Concentració quan la necessites. Converses quan et venen de gust. Hem dissenyat cada racó perquè el teu dia flueixi.',
    'Conoce los espacios':'Coneix els espais','Flexibilidad real':'Flexibilitat real','Cambia de plan o cancela con 15 días de aviso. Tu espacio se adapta a ti.':'Canvia de pla o cancel·la amb 15 dies d’avís. El teu espai s’adapta a tu.',
    'Todo incluido':'Tot inclòs','Una sola cuota. Internet, suministros, café, limpieza y salas sin sorpresas.':'Una sola quota. Internet, subministraments, cafè, neteja i sales sense sorpreses.',
    'Respaldo local':'Suport local','Más de 25 años de experiencia inmobiliaria de Calfergrup en Esplugues.':'Més de 25 anys d’experiència immobiliària de Calfergrup a Esplugues.',
    'Encuentra tu sitio':'Troba el teu lloc','Un espacio para':'Un espai per a','cada forma de trabajar.':'cada manera de treballar.','Desde una mesa por un día hasta la oficina estable de tu equipo.':'Des d’una taula per un dia fins a l’oficina estable del teu equip.',
    'Puesto flex':'Lloc flexible','Ven, conecta, crea.':'Vine, connecta, crea.','Desde 12 €/día':'Des de 12 €/dia','Oficina privada':'Oficina privada','Tu equipo, a su aire.':'El teu equip, al seu aire.','Desde 249 €/mes':'Des de 249 €/mes','Salas':'Sales','Reúnete mejor.':'Reuneix-te millor.','Desde 9 €/hora':'Des de 9 €/hora',
    'Precios transparentes':'Preus transparents','Elige solo lo':'Tria només el','que vas a usar.':'que faràs servir.','Todos los planes incluyen fibra, climatización, café y limpieza.':'Tots els plans inclouen fibra, climatització, cafè i neteja.',
    'Te ayudamos a elegir':'T’ajudem a triar','¿Cuántos días vienes al mes?':'Quants dies vens al mes?','Días de uso al mes':'Dies d’ús al mes','8 días':'8 dies','Te recomendamos Flex':'Et recomanem Flex',
    'Para probar o venir de vez en cuando.':'Per provar o venir de tant en tant.','Puesto libre':'Lloc lliure','Acceso L–V':'Accés de dl. a dv.','1 h de sala':'1 h de sala','Elegir Day Pass':'Triar Day Pass',
    'Tu rutina flexible, 8 días al mes.':'La teva rutina flexible, 8 dies al mes.','4 h de sala':'4 h de sala','Domiciliación +19 €':'Domiciliació +19 €','Elegir Flex':'Triar Flex',
    'Más elegido':'Més triat','Tu propio puesto, siempre disponible.':'El teu propi lloc, sempre disponible.','Mesa fija y cajonera':'Taula fixa i calaixera','Acceso 24/7':'Accés 24/7','8 h de sala':'8 h de sala','Domiciliación incluida':'Domiciliació inclosa','Elegir Fijo':'Triar Fix','Fijo':'Fix',
    'Privacidad y foco para equipos desde 2 personas.':'Privacitat i concentració per a equips a partir de 2 persones.','Despacho amueblado':'Despatx moblat','12 h de sala':'12 h de sala','Pedir propuesta':'Demanar proposta',
    'Precios orientativos sujetos a disponibilidad. IVA no incluido salvo indicación expresa.':'Preus orientatius subjectes a disponibilitat. IVA no inclòs llevat d’indicació expressa.',
    'Promoción de apertura':'Promoció d’obertura','Tu primer mes,':'El teu primer mes,','a mitad de precio.':'a meitat de preu.','Para los primeros 50 miembros. Sin matrícula ni fianza.':'Per als primers 50 membres. Sense matrícula ni fiança.','Primer mes':'Primer mes','Quiero aprovecharlo':'Ho vull aprofitar',
    'Sin letra pequeña':'Sense lletra petita','Preguntas':'Preguntes','frecuentes.':'freqüents.','¿Te queda alguna? Escríbenos y te respondemos en menos de 24 horas laborables.':'Te’n queda alguna? Escriu-nos i et respondrem en menys de 24 hores laborables.',
    '¿Hay permanencia?':'Hi ha permanència?','No. Puedes cambiar o cancelar tu plan con 15 días de antelación.':'No. Pots canviar o cancel·lar el pla amb 15 dies d’antelació.',
    '¿Qué incluye la cuota?':'Què inclou la quota?','Internet de alta velocidad, suministros, climatización, limpieza, café y las horas de sala indicadas en cada plan.':'Internet d’alta velocitat, subministraments, climatització, neteja, cafè i les hores de sala indicades a cada pla.',
    '¿Puedo probar antes de contratar?':'Puc provar abans de contractar?','Sí. Reserva una visita y te invitamos a trabajar un día para conocer el espacio.':'Sí. Reserva una visita i et convidem a treballar un dia per conèixer l’espai.',
    '¿Tenéis acceso 24/7?':'Teniu accés 24/7?','Los planes Fijo y Oficina Privada incluyen acceso todos los días con llave digital.':'Els plans Fix i Oficina privada inclouen accés cada dia amb clau digital.',
    'Ven a conocernos':'Vine a conèixer-nos','Tu próximo gran día':'El teu proper gran dia','empieza aquí.':'comença aquí.','Cuéntanos qué necesitas. Te enseñamos el espacio y te preparamos una propuesta a medida.':'Explica’ns què necessites. T’ensenyem l’espai i et preparem una proposta a mida.',
    'Nombre':'Nom','Teléfono':'Telèfon','Me interesa':'M’interessa','Domiciliación fiscal':'Domiciliació fiscal','Cuéntanos un poco más':'Explica’ns una mica més','Número de personas, fecha aproximada…':'Nombre de persones, data aproximada…',
    'He leído y acepto la política de privacidad.':'He llegit i accepto la política de privacitat.','Solicitar visita':'Sol·licitar visita','Al enviar se abrirá tu aplicación de correo con la solicitud preparada.':'En enviar s’obrirà la teva aplicació de correu amb la sol·licitud preparada.','Privacidad':'Privacitat','Hecho cerca, para llegar lejos.':'Fet a prop, per arribar lluny.',
    'Zona luminosa de trabajo compartido de Calfer Workspace':'Zona lluminosa de treball compartit de Calfer Workspace','Puestos flex en un espacio de coworking abierto':'Llocs flexibles en un espai de coworking obert','Oficina privada preparada para un equipo':'Oficina privada preparada per a un equip','Sala de reuniones con pantalla y pizarra':'Sala de reunions amb pantalla i pissarra'
  };

  const en = {
    'Saltar al contenido':'Skip to content','Abrir menú':'Open menu','Navegación principal':'Main navigation','Calfer Workspace, inicio':'Calfer Workspace, home','Idioma':'Language',
    'Espacios':'Spaces','Tarifas':'Plans','Ventajas':'Benefits','Preguntas':'Questions','Reservar visita':'Book a tour','/mes':'/month','/día':'/day','/hora':'/hour',
    'Próxima apertura · Esplugues de Llobregat':'Opening soon · Esplugues de Llobregat','Tu espacio para':'Your space to','hacer que pase.':'make it happen.',
    'Coworking flexible con el respaldo de Calfergrup. Un lugar profesional, cercano y listo para trabajar desde el primer minuto.':'Flexible coworking backed by Calfergrup. A professional, welcoming place that is ready from the moment you arrive.',
    'Explorar tarifas':'Explore plans','Probar un día gratis':'Try a free day','Desde':'From','Acceso':'Access','Permanencia':'Commitment','0 meses':'0 months','Descubre':'Discover',
    'Fibra 1 Gb':'1 Gb fibre','Café ilimitado':'Unlimited coffee','Salas equipadas':'Equipped rooms','Limpieza diaria':'Daily cleaning','Comunidad local':'Local community',
    'Más que una mesa':'More than a desk','Todo lo que necesitas.':'Everything you need.','Nada que te ate.':'Nothing tying you down.','Concentración cuando la necesitas. Conversaciones cuando te apetecen. Hemos diseñado cada rincón para que tu día fluya.':'Focus when you need it. Conversation when you want it. Every corner is designed to make your day flow.','Conoce los espacios':'Explore the spaces',
    'Flexibilidad real':'True flexibility','Cambia de plan o cancela con 15 días de aviso. Tu espacio se adapta a ti.':'Change or cancel your plan with 15 days’ notice. Your workspace adapts to you.','Todo incluido':'All inclusive','Una sola cuota. Internet, suministros, café, limpieza y salas sin sorpresas.':'One fee. Internet, utilities, coffee, cleaning and meeting rooms, with no surprises.','Respaldo local':'Local expertise','Más de 25 años de experiencia inmobiliaria de Calfergrup en Esplugues.':'Over 25 years of Calfergrup property experience in Esplugues.',
    'Encuentra tu sitio':'Find your place','Un espacio para':'A space for','cada forma de trabajar.':'every way of working.','Desde una mesa por un día hasta la oficina estable de tu equipo.':'From a desk for a day to a permanent office for your team.','Puesto flex':'Flex desk','Ven, conecta, crea.':'Come, connect, create.','Desde 12 €/día':'From €12/day','Oficina privada':'Private office','Tu equipo, a su aire.':'Your team, your space.','Desde 249 €/mes':'From €249/month','Salas':'Meeting rooms','Reúnete mejor.':'Meet better.','Desde 9 €/hora':'From €9/hour',
    'Precios transparentes':'Transparent pricing','Elige solo lo':'Choose only','que vas a usar.':'what you will use.','Todos los planes incluyen fibra, climatización, café y limpieza.':'All plans include fibre internet, climate control, coffee and cleaning.','Te ayudamos a elegir':'We help you choose','¿Cuántos días vienes al mes?':'How many days will you come each month?','Días de uso al mes':'Days used per month','8 días':'8 days','Te recomendamos Flex':'We recommend Flex',
    'Para probar o venir de vez en cuando.':'For a trial or an occasional workday.','Puesto libre':'Hot desk','Acceso L–V':'Weekday access','1 h de sala':'1 meeting-room hour','Elegir Day Pass':'Choose Day Pass','Tu rutina flexible, 8 días al mes.':'Your flexible routine, 8 days a month.','4 h de sala':'4 meeting-room hours','Domiciliación +19 €':'Business address +€19','Elegir Flex':'Choose Flex','Más elegido':'Most popular','Tu propio puesto, siempre disponible.':'Your own desk, always available.','Mesa fija y cajonera':'Fixed desk and drawer unit','Acceso 24/7':'24/7 access','8 h de sala':'8 meeting-room hours','Domiciliación incluida':'Business address included','Elegir Fijo':'Choose Fixed','Fijo':'Fixed','Privacidad y foco para equipos desde 2 personas.':'Privacy and focus for teams of 2 or more.','Despacho amueblado':'Furnished office','12 h de sala':'12 meeting-room hours','Pedir propuesta':'Request a quote',
    'Precios orientativos sujetos a disponibilidad. IVA no incluido salvo indicación expresa.':'Indicative prices subject to availability. VAT excluded unless expressly stated.','Promoción de apertura':'Opening offer','Tu primer mes,':'Your first month,','a mitad de precio.':'half price.','Para los primeros 50 miembros. Sin matrícula ni fianza.':'For the first 50 members. No joining fee or deposit.','Primer mes':'First month','Quiero aprovecharlo':'Claim this offer',
    'Sin letra pequeña':'No fine print','frecuentes.':'answered.','¿Te queda alguna? Escríbenos y te respondemos en menos de 24 horas laborables.':'Still have a question? Write to us and we will reply within one business day.','¿Hay permanencia?':'Is there a minimum term?','No. Puedes cambiar o cancelar tu plan con 15 días de antelación.':'No. You can change or cancel your plan with 15 days’ notice.','¿Qué incluye la cuota?':'What does the fee include?','Internet de alta velocidad, suministros, climatización, limpieza, café y las horas de sala indicadas en cada plan.':'High-speed internet, utilities, climate control, cleaning, coffee and the meeting-room hours listed in each plan.','¿Puedo probar antes de contratar?':'Can I try it before joining?','Sí. Reserva una visita y te invitamos a trabajar un día para conocer el espacio.':'Yes. Book a tour and spend a complimentary workday getting to know the space.','¿Tenéis acceso 24/7?':'Do you offer 24/7 access?','Los planes Fijo y Oficina Privada incluyen acceso todos los días con llave digital.':'Fixed and Private Office plans include daily access with a digital key.',
    'Ven a conocernos':'Come and meet us','Tu próximo gran día':'Your next great day','empieza aquí.':'starts here.','Cuéntanos qué necesitas. Te enseñamos el espacio y te preparamos una propuesta a medida.':'Tell us what you need. We will show you around and prepare a tailored proposal.','Nombre':'Name','Teléfono':'Phone','Me interesa':'I am interested in','Domiciliación fiscal':'Business address','Cuéntanos un poco más':'Tell us a little more','Número de personas, fecha aproximada…':'Number of people, approximate date…','He leído y acepto la política de privacidad.':'I have read and accept the privacy policy.','Solicitar visita':'Request a tour','Al enviar se abrirá tu aplicación de correo con la solicitud preparada.':'Submitting will open your email app with the request ready to send.','Privacidad':'Privacy','Hecho cerca, para llegar lejos.':'Made locally, built to go further.',
    'Zona luminosa de trabajo compartido de Calfer Workspace':'Bright shared workspace at Calfer Workspace','Puestos flex en un espacio de coworking abierto':'Flex desks in an open coworking space','Oficina privada preparada para un equipo':'Private office ready for a team','Sala de reuniones con pantalla y pizarra':'Meeting room with screen and whiteboard'
  };

  const dictionaries = { ca, es: {}, en };
  const dictionary = dictionaries[locale];
  const translate = (value) => dictionary[value] || value;
  window.calferLocale = locale;
  window.calferT = translate;
  document.documentElement.lang = locale;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const value = node.nodeValue.trim();
    if (!value || !dictionary[value]) return;
    node.nodeValue = node.nodeValue.replace(value, dictionary[value]);
  });

  document.querySelectorAll('[alt], [aria-label], [placeholder]').forEach((element) => {
    ['alt', 'aria-label', 'placeholder'].forEach((attribute) => {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, translate(element.getAttribute(attribute)));
    });
  });

  document.querySelectorAll('[data-lang]').forEach((link) => {
    const active = link.dataset.lang === locale;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
  });

  const metadata = {
    ca: ['Calfer Workspace · Coworking a Esplugues', "Calfer Workspace: coworking, llocs flexibles i oficines privades a Esplugues de Llobregat. Reserva una visita i prova l'espai gratis."],
    es: ['Calfer Workspace · Coworking en Esplugues', 'Calfer Workspace: coworking, puestos flex y oficinas privadas en Esplugues de Llobregat. Reserva una visita y prueba el espacio gratis.'],
    en: ['Calfer Workspace · Coworking in Esplugues', 'Calfer Workspace: coworking, flex desks and private offices in Esplugues de Llobregat. Book a tour and try the space for free.']
  };
  document.title = metadata[locale][0];
  document.querySelector('meta[name="description"]').content = metadata[locale][1];
  document.querySelector('meta[property="og:title"]').content = metadata[locale][0];
  document.querySelector('meta[property="og:description"]').content = metadata[locale][1];
  const canonical = document.querySelector('link[rel="canonical"]');
  canonical.href = locale === 'ca' ? canonical.href.split('?')[0] : `${canonical.href.split('?')[0]}?lang=${locale}`;
})();
