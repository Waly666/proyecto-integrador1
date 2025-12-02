// Proyecto Integrador — index.js
// Funcionalidad de tema dark/light

const toggleButton = document.getElementById('toggle-tema');

// Cargar tema guardado o usar preferencia del sistema
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // Detectar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
}

// Cambiar tema
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Event listeners
if (toggleButton) {
  toggleButton.addEventListener('click', toggleTheme);
}

// Cargar tema al iniciar
loadTheme();

// ==========================================
// FETCH API - Información General de Colombia
// ==========================================

async function fetchInfoGeneral() {
  const endpoint = 'https://api-colombia.com/api/v1/Country/Colombia';
  
  try {
    // Mostrar indicadores de carga
    const resumenEl = document.getElementById('resumen-pais');
    if (resumenEl) resumenEl.textContent = 'Cargando descripción...';
    
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Poblar el resumen/descripción
    if (resumenEl && data.description) {
      resumenEl.textContent = data.description;
    }
    
    // Poblar todos los datos usando IDs
    const poblacion = document.getElementById('poblacion');
    if (poblacion) {
      poblacion.textContent = data.population 
        ? data.population.toLocaleString('es-CO') + ' habitantes'
        : 'No disponible';
    }
    
    const capital = document.getElementById('capital');
    if (capital) {
      capital.textContent = data.stateCapital || 'No disponible';
    }
    
    const superficie = document.getElementById('superficie');
    if (superficie) {
      superficie.textContent = data.surface 
        ? data.surface.toLocaleString('es-CO') + ' km²'
        : 'No disponible';
    }
    
    const moneda = document.getElementById('moneda');
    if (moneda) {
      moneda.textContent = data.currency && data.currencySymbol
        ? `${data.currency} (${data.currencySymbol})`
        : data.currency || 'No disponible';
    }
    
    const idiomas = document.getElementById('idiomas');
    if (idiomas) {
      idiomas.textContent = data.languages && data.languages.length > 0
        ? data.languages.join(', ')
        : 'No disponible';
    }
    
    const zonaHoraria = document.getElementById('zona-horaria');
    if (zonaHoraria) {
      zonaHoraria.textContent = data.timeZone || 'No disponible';
    }
    
    const prefijo = document.getElementById('prefijo-telefonico');
    if (prefijo) {
      prefijo.textContent = data.phonePrefix || 'No disponible';
    }
    
    const dominio = document.getElementById('dominio-internet');
    if (dominio) {
      dominio.textContent = data.internetDomain || 'No disponible';
    }
    
    const region = document.getElementById('region');
    if (region) {
      region.textContent = data.region && data.subRegion
        ? `${data.region} - ${data.subRegion}`
        : data.region || 'No disponible';
    }
    
    const fronteras = document.getElementById('fronteras');
    if (fronteras) {
      fronteras.textContent = data.borders && data.borders.length > 0
        ? data.borders.join(', ')
        : 'No disponible';
    }
    
    console.log('✅ Información general cargada:', data);
    
  } catch (error) {
    console.error('❌ Error al cargar información general:', error);
    
    // Mostrar mensaje de error
    const resumenEl = document.getElementById('resumen-pais');
    if (resumenEl) {
      resumenEl.textContent = 'Error al cargar la información. Por favor, intenta recargar la página.';
    }
  }
}

// Cargar datos al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
  fetchInfoGeneral();
  fetchRegiones();
});

// ==========================================
// FETCH API - Regiones de Colombia
// ==========================================

async function fetchRegiones() {
  const endpoint = 'https://api-colombia.com/api/v1/Region';
  const container = document.getElementById('regiones-grid');
  
  if (!container) return;
  
  try {
    container.innerHTML = '<p>Cargando regiones...</p>';
    
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    const regiones = data;
    
    if (!regiones || regiones.length === 0) {
      container.innerHTML = '<p>No se encontraron regiones.</p>';
      return;
    }
    
    // Mapeo de nombres a archivos de imagen
    const imageMap = {
      'Caribe': 'region-caribe.jpg',
      'Pacífico': 'region-pacifico.jpg',
      'Orinoquía': 'region-orinoquia.jpg',
      'Amazonía': 'region-amazonia.jpg',
      'Andina': 'region-andina.jpg',
      'Insular': 'region-insular.jpg'
    };
    
    // Crear HTML para cada región con imagen
    const regionesHTML = regiones.map(region => {
      const imageName = imageMap[region.name] || 'placeholder.jpg';
      return `
        <article class="region-card">
          <img src="assets/${imageName}" alt="Imagen de la región ${region.name}" class="region-img" loading="lazy" />
          <div class="region-content">
            <h3>${region.name}</h3>
            <p>${region.description || 'Sin descripción disponible.'}</p>
          </div>
        </article>
      `;
    }).join('');
    
    container.innerHTML = regionesHTML;
    
    console.log('✅ Regiones cargadas:', regiones.length);
    
  } catch (error) {
    console.error('❌ Error al cargar regiones:', error);
    container.innerHTML = '<p>Error al cargar las regiones. Por favor, intenta recargar la página.</p>';
  }
}
