# 🇨🇴 Proyecto Colombia - Información Interactiva

![Colombia](assets/img_header_1.jpg)

## 📋 Descripción del Proyecto

Aplicación web interactiva que consume la API pública de [api-colombia.com](https://api-colombia.com) para mostrar información completa y actualizada sobre Colombia, incluyendo datos geográficos, administrativos, turísticos y gastronómicos.

**Proyecto Integrador 1** - DevSeniorCode  
**Módulo 1**: Web Foundations & Coding Skills  
**Autor**: WALTER AGUILAR

---

## 🎯 Características Principales

### 1. **Información General de Colombia**
- Datos demográficos (población, capital, superficie)
- Información administrativa (moneda, idiomas, zona horaria)
- Datos geográficos (región, países fronterizos)
- Presentación en tarjetas informativas con diseño moderno

### 2. **Regiones Naturales**
- Visualización de las 6 regiones naturales de Colombia
- Diseño responsive con grid layout adaptativo
- Información detallada de cada región

### 3. **Departamentos (33)**
- Listado completo de los departamentos colombianos
- **Buscador en tiempo real** para filtrar departamentos
- Información detallada de cada departamento:
  - Descripción completa
  - Capital departamental
  - Población total
  - Número de municipios
  - Superficie en km²
- Diseño en tarjetas con gradientes azules vibrantes

### 4. **Sitios Turísticos**
- Catálogo de los principales atractivos turísticos
- **Buscador dinámico** por nombre o ciudad
- Información por cada sitio:
  - Nombre del atractivo
  - Ciudad donde se encuentra
  - Descripción detallada
  - Imágenes ilustrativas (cuando están disponibles)
- Grid de 3 columnas en vista desktop

### 5. **Gastronomía Típica**
- Platos tradicionales de Colombia
- **Búsqueda** por nombre o departamento de origen
- Detalles de cada plato:
  - Nombre del plato
  - Departamento de origen
  - Categoría gastronómica
  - Descripción e ingredientes
  - Imagen del plato

---

## 🎨 Diseño y Experiencia de Usuario

### Paleta de Colores (Azure Vibrante)
- **Color primario**: `#2563eb` (Azul vibrante)
- **Gradientes**: De `#bfdbfe` a `#eff6ff`
- **Modo oscuro**: Soporte completo con tonos `#0f172a` - `#334155`

### Características de Diseño
- ✨ **Tema dual**: Modo claro y oscuro con persistencia
- 📱 **Diseño responsive**: Adaptable a móvil, tablet y desktop
- 🎯 **Navegación doble**: Header principal + Sidebar lateral sticky
- 🌈 **Gradientes modernos**: En header, footer y tarjetas de datos
- 💫 **Animaciones suaves**: Efectos hover inspirados en Shadcn/ui
- 🖼️ **Logo personalizado**: Branding con logo de 90x90px
- 📐 **Layouts optimizados**:
  - 1 columna para tarjetas principales
  - 2 columnas para estadísticas generales
  - 3 columnas para datos de departamentos y sitios

### Tipografía
- **Fuente**: Exo (Google Fonts)
- Pesos: 400, 500, 600, 700

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Variables CSS (Custom Properties)
  - Flexbox y CSS Grid
  - Gradientes lineales
  - Transiciones y transformaciones
  - Media queries para responsive
- **JavaScript (Vanilla)**:
  - Fetch API para consumo de endpoints
  - Manipulación del DOM
  - LocalStorage para tema
  - Búsqueda y filtrado en tiempo real
  - Event listeners

---

## 📡 API Utilizada

**Base URL**: `https://api-colombia.com/api/v1`

### Endpoints consumidos:
1. `/Country/Colombia` - Información general del país
2. `/Region` - Regiones naturales
3. `/Department` - Departamentos
4. `/TouristicAttraction` - Sitios turísticos
5. `/TypicalDish` - Platos típicos

-----

## 📦 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Servidor local (Live Server, http-server, etc.)

### Pasos
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Waly666/proyecto-integrador1.git
   ```

2. Abre el proyecto:
   ```bash
   cd proyecto-integrador1
   ```

3. Inicia un servidor local:
   - **Con Live Server en VS Code**: Click derecho en `index.html` → "Open with Live Server"
   - **Con Python**:
     ```bash
     python -m http.server 8000
     ```
   - **Con Node.js**:
     ```bash
     npx http-server
     ```

4. Abre en el navegador:
   ```
   http://localhost:5500 (Live Server)
   http://localhost:8000 (Python)
   ```

---

## 📁 Estructura del Proyecto

```
proyecto-integrador1/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS con variables y responsive
├── index.js            # Lógica JavaScript y consumo API
├── README.md           # Documentación del proyecto
│
└── assets/             # Recursos multimedia
    ├── logopagina.png
    ├── img_header_1.jpg
    └── turismo.jpg
```

---

## 🎓 Aprendizajes Clave

1. **Consumo de APIs REST** con Fetch API
2. **Diseño responsive** con CSS Grid y Flexbox
3. **Manejo de estados** con LocalStorage
4. **Búsqueda y filtrado** en tiempo real
5. **Diseño moderno** con gradientes y animaciones
6. **Accesibilidad web** con ARIA labels y semántica HTML
7. **Gestión de versiones** con Git y GitHub

---

## 🔮 Mejoras Futuras

- [ ] Implementar paginación para grandes conjuntos de datos
- [ ] Agregar mapas interactivos con ubicaciones
- [ ] Incluir gráficos estadísticos
- [ ] Modo de comparación entre departamentos
- [ ] Exportar datos a PDF o JSON
- [ ] PWA (Progressive Web App) para uso offline
- [ ] Integración con más APIs de datos colombianos

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 👤 Autor

**Walter Aguilar**  
Proyecto Integrador - DevSeniorCode  
Módulo 1: Web Foundations & Coding Skills  
Año 2025

---

## 🙏 Agradecimientos

- [api-colombia.com](https://api-colombia.com) por proporcionar la API pública
- [Shadcn/ui](https://ui.shadcn.com) por la inspiración en patrones de diseño
- DevSeniorCode por la formación y guía

---

## 🌐 Enlaces

- **Repositorio**: [github.com/Waly666/proyecto-integrador1](https://github.com/Waly666/proyecto-integrador1)
- **API Documentación**: [api-colombia.com/swagger](https://api-colombia.com/swagger/index.html)

---

**⭐ Si te gustó este proyecto, dale una estrella en GitHub!**
