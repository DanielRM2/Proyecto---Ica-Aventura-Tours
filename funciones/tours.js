// script de tours y paginación moderna

document.addEventListener('DOMContentLoaded', function() {
  const tours = [
  // ICA
  { destino: 'Ica', titulo: 'Tour Huacachina y Dunas', img: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/a0/45/db.jpg', precio: '$55.00', detalles: 'Duración: 4 horas<br>Nivel: Media<br>Grupo: Mediano' },
  { destino: 'Ica', titulo: 'Tour Viñedos de Ica', img: 'https://www.mybexecutive.com/wp-content/uploads/2025/04/viendos-en-ica-mb.jpg', precio: '$60.00', detalles: 'Duración: 1 Día<br>Nivel: Baja<br>Grupo: Pequeño' },
  { destino: 'Ica', titulo: 'Tour Oasis de Huacachina', img: 'https://www.peru.travel/Contenido/General/Imagen/en/43/1.1/Huacachina.jpg', precio: '$70.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Mediano' },

  // LIMA
  { destino: 'Lima', titulo: 'Tour Lima Histórico y Cultural', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Plaza_de_Armas%2C_Lima.jpg/330px-Plaza_de_Armas%2C_Lima.jpg', precio: '$65.00', detalles: 'Duración: 5 horas<br>Nivel: Bajo<br>Grupo: Pequeño' },
  { destino: 'Lima', titulo: 'Tour Miraflores y Costa Verde', img: 'https://blog.babilonia.pe/wp-content/uploads/2024/09/image-2.png', precio: '$80.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Mediano' },
  { destino: 'Lima', titulo: 'Tour Gastronómico Lima', img: 'https://www.peru.travel/Contenido/Noticia/Imagen/es/2250/1.0/Principal/Desk_1920x1080_salsa.jpg', precio: '$90.00', detalles: 'Duración: 1 Día<br>Nivel: Baja<br>Grupo: Grande' },

  // PARACAS
  { destino: 'Paracas', titulo: 'Tour Islas Ballestas', img: 'https://trawell.pe/wp-content/uploads/2023/10/islas-ballestas3.jpg', precio: '$15.00', detalles: 'Duración: 2 Horas<br>Nivel: Bajo<br>Grupo: Grande' },
  { destino: 'Paracas', titulo: 'Tour Reserva Nacional Paracas', img: 'https://www.raptravelperu.com/wp-content/uploads/catedral-paracas-1.jpg', precio: '$40.00', detalles: 'Duración: 3 horas<br>Nivel: Bajo<br>Grupo: Grande' },
  { destino: 'Paracas', titulo: 'Tour Paracas-Pisco Full Day', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg__NtTt5sNwKE6068cU830rnLSIwgYxof2MZyjkM0IFKtOJH9Pu9NBvk0Cslehy3ulGjaKc9-F9jG-DZSCxe-bkuWzV6Q3Cik3Tj6v7CY2lesI7SwLzzLyiZxyLeREq17yDfgh5u7u2MQ/s1600/15823351_1385649594793016_3183171056333184681_n.jpg', precio: '$135.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Mediano' },

  // AREQUIPA
  { destino: 'Arequipa', titulo: 'Tour Arequipa y Cañón del Colca', img: 'https://www.peru.travel/Contenido/Atractivo/Imagen/es/8/1.2/Principal/Ca%C3%B1on%20del%20Colca.jpg', precio: '$230.00', detalles: 'Duración: 3 Días<br>Nivel: Alta<br>Grupo: Mediano' },
  { destino: 'Arequipa', titulo: 'Tour Ciudad Blanca', img: 'https://www.plataforma10.com.pe/viajes/wp-content/uploads/2023/05/foto-portada.webp', precio: '$120.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Pequeño' },
  { destino: 'Arequipa', titulo: 'Tour Ruta del Sillar', img: 'https://www.arequipa.com/wp-content/uploads/2020/08/Canteras-de-A%C3%B1ashuayco-Arequipa.jpg.jpg', precio: '$80.00', detalles: 'Duración: 1 Día<br>Nivel: Baja<br>Grupo: Grande' },

  // NAZCA
  { destino: 'Nazca', titulo: 'Tour Nazca y Líneas de Nazca', img: 'https://picchutravel.com/wp-content/uploads/las-lineas-de-nazca.jpg', precio: '$150.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Mediano' },
  { destino: 'Nazca', titulo: 'Tour Geoglifos de Nazca', img: 'https://peru.travel/Contenido/Uploads/Mono_637268895408864417.jpg', precio: '$160.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Pequeño' },
  { destino: 'Nazca', titulo: 'Tour Museo Antonini', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Museo_Antonini_002%2C_Nazca%2C_Peru.JPG/330px-Museo_Antonini_002%2C_Nazca%2C_Peru.JPG', precio: '$80.00', detalles: 'Duración: 1 Día<br>Nivel: Baja<br>Grupo: Grande' },

  // CUSCO
  { destino: 'Cusco', titulo: 'Cusco Clásico 8 Días 7 Noches', img: 'https://picchutravel.com/wp-content/uploads/que-hacer-en-la-ciudad-de-cusco.jpg', precio: '$995.00', detalles: 'Duración: 8 Días 7 Noches<br>Nivel: Alta<br>Grupo: Mediano' },
  { destino: 'Cusco', titulo: 'Tour Valle Sagrado', img: 'https://www.ollantaytambo.org/img/cusco-sacred-valley-machu-picchu-007-01.jpg', precio: '$120.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Pequeño' },
  { destino: 'Cusco', titulo: 'Tour Machu Picchu', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/640px-Machu_Picchu%2C_Peru.jpg', precio: '$350.00', detalles: 'Duración: 1 Día<br>Nivel: Alta<br>Grupo: Mediano' },

  // PUNO
  { destino: 'Puno', titulo: 'Tour Lago Titicaca', img: 'https://www.peru.travel/Contenido/Uploads/titicaca-atractivos_637649828676542514.jpg', precio: '$180.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Grande' },
  { destino: 'Puno', titulo: 'Tour Islas Flotantes Uros', img: 'https://www.perurail.com/wp-content/uploads/2022/08/Islas.jpg', precio: '$120.00', detalles: 'Duración: 1 Día<br>Nivel: Baja<br>Grupo: Pequeño' },
  { destino: 'Puno', titulo: 'Tour Sillustani', img: 'https://www.peru.travel/Contenido/Atractivo/Imagen/es/19/1.2/InformacionGeneral/Vista%20arquitectonica.jpg', precio: '$90.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Mediano' },

  // TRUJILLO
  { destino: 'Trujillo', titulo: 'Tour Chan Chan', img: 'https://bushop.com/wp-content/uploads/sites/10/Mascotte-of-Chan-Chan-Small.jpg', precio: '$110.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Pequeño' },
  { destino: 'Trujillo', titulo: 'Tour Huacas del Sol y la Luna', img: 'https://www.peru.travel/Contenido/Uploads/huaca-del-sol_637679987541923194.jpg', precio: '$130.00', detalles: 'Duración: 1 Día<br>Nivel: Alta<br>Grupo: Mediano' },
  { destino: 'Trujillo', titulo: 'Tour Marinera Norteña', img: 'https://www.peru.travel/Contenido/Uploads/marinera-interior_637662927870770970.jpg', precio: '$80.00', detalles: 'Duración: 1 Día<br>Nivel: Baja<br>Grupo: Grande' },

  // PIURA
  { destino: 'Piura', titulo: 'Tour Playa Máncora', img: 'https://www.incasperu.com/wp-content/uploads/2020/09/viaje-a-mancora-piura-1280x720.jpg', precio: '$140.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Mediano' },
  { destino: 'Piura', titulo: 'Tour Gastronomía Norteña', img: 'https://www.peru.travel/gastronomia/es/Complemento/images/cocina/interna/foto5.jpg', precio: '$90.00', detalles: 'Duración: 1 Día<br>Nivel: Baja<br>Grupo: Pequeño' },
  { destino: 'Piura', titulo: 'Tour Manglares de Tumbes', img: 'https://www.costadelsolperu.com/wp-content/uploads/2022/07/Costa-del-Sol-Wyndham-Tumbes-Manglares-Canoa-1024x642.jpg', precio: '$110.00', detalles: 'Duración: 1 Día<br>Nivel: Media<br>Grupo: Grande' },
  ];


  const toursList = document.getElementById('tours-list');
  const selectFilter = document.querySelector('select[aria-label="Filtrar tours"]');
  const paginationPrev = document.querySelector('.pagination-btn.prev');
  const paginationNext = document.querySelector('.pagination-btn.next');
  const paginationPages = document.querySelector('.pagination-pages');
  const paginationRange = document.querySelector('.pagination-range');

  let currentPage = 1;
  const toursPerPage = 9;
  let filteredTours = tours;

  const totalPages = () => Math.ceil(filteredTours.length / toursPerPage);

  function renderTours(page) {
    toursList.innerHTML = '';
    const start = (page - 1) * toursPerPage;
    const end = start + toursPerPage;
    const pageTours = filteredTours.slice(start, end);

    pageTours.forEach(tour => {
      const tourCard = document.createElement('article');
      tourCard.className = 'tour-card';
      tourCard.innerHTML = `
        <img src="${tour.img}" alt="${tour.titulo}" />
        <div class="tour-content">
          <h3>${tour.titulo}</h3>
          <div class="tour-subtitle">${tour.destino}</div>
          <div class="tour-price">Desde: <strong>${tour.precio}</strong></div>
          <div class="tour-details">${tour.detalles}</div>
          <button class="btn-reserve" type="button">Reserve ahora</button>
        </div>
      `;
      toursList.appendChild(tourCard);
    });

    renderPagination(page);
    renderRange(start, Math.min(end, filteredTours.length), filteredTours.length);
  }

  function renderPagination(page) {
    paginationPages.innerHTML = '';
    const pages = totalPages();
    let start = Math.max(1, page - 2);
    let end = Math.min(pages, start + 4);
    if (end - start < 4) start = Math.max(1, end - 4);

    for (let i = start; i <= end; i++) {
      const btn = document.createElement('button');
      btn.className = 'pagination-btn page';
      btn.textContent = i;
      btn.setAttribute('aria-label', `Página ${i}`);
      btn.setAttribute('data-page', i);
      if (i === page) {
        btn.classList.add('active');
        btn.setAttribute('aria-current', 'page');
      }
      btn.addEventListener('click', () => {
        currentPage = i;
        renderTours(currentPage);
      });
      paginationPages.appendChild(btn);
    }

    paginationPrev.disabled = page === 1;
    paginationNext.disabled = page === pages;
  }

  function renderRange(start, end, total) {
    paginationRange.textContent = `Mostrando ${start + 1}-${end} de ${total} tours`;
  }

  // Botones de paginación
  paginationPrev.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderTours(currentPage);
    }
  });

  paginationNext.addEventListener('click', () => {
    if (currentPage < totalPages()) {
      currentPage++;
      renderTours(currentPage);
    }
  });

  // Filtrar tours por destino
  selectFilter.addEventListener('change', function() {
    const value = this.value;
    filteredTours = value === 'todos' ? tours : tours.filter(t => t.destino.toLowerCase() === value.toLowerCase());
    currentPage = 1;
    renderTours(currentPage);
  });

  // Inicializar renderizado
  renderTours(currentPage);
});