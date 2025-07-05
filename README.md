# 📰 React News App

Una aplicación web moderna construida con **React** que permite:

- Ver noticias actuales desde la API del New York Times.
- Añadir tus propias noticias con un formulario.
- Guardarlas en `localStorage`.
- Navegar entre secciones con React Router.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React**
- 🔀 **React Router DOM**
- 🎯 **Context API** para estado global
- 💅 **SCSS** modular para estilos
- 📦 **Axios** para peticiones HTTP
- 🗞️ **New York Times Top Stories API**

---

## 🧱 Estructura del proyecto

```bash
/src
│
├── App.jsx              # Enrutamiento principal
├── /views               # Vistas principales (Home, Form, List)
│   ├── Header.jsx       # Navegación
│   ├── Footer.jsx       # Pie de página
│   ├── Home.jsx         # Página de inicio
│   ├── Form.jsx         # Formulario para añadir noticia
│   └── List.jsx         # Lista de noticias desde la API
│
├── /components
│   └── New.jsx          # Componente para renderizar una noticia individual
│
├── /context
│   ├── GlobalState.jsx  # Estado global y llamada a la API
│   └── AppReducer.jsx   # Reducer para actualizar estado
│
├── /styles              # Archivos SCSS
│   ├── Header.scss
│   ├── Form.scss
│   ├── Home.scss
│   ├── List.scss
│   └── New.scss

---

📌 Funcionalidades
🏠 Home
Muestra bienvenida y descripción de la app.

📝 Form
Formulario controlado con validación simple.

Guarda la noticia en localStorage.

Redirige automáticamente a la sección de List.

📋 List
Muestra noticias en tarjetas limpias y modernas.

Se conecta a la NYT Top Stories API.

---

🧪 Cómo ejecutar el proyecto

# 1. Clona este repositorio
git clone https://github.com/tu-usuario/news-app.git

# 2. Instala dependencias
npm install

# 3. Ejecuta en modo desarrollo
npm run dev

---

🔑 API Key del NYT
Debes crear una cuenta gratuita en developer.nytimes.com, crear una aplicación y obtener una API Key.

Cambia la key directamente en GlobalState.jsx:

js
Copiar
Editar
const res = await axios.get(
  'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=TU_API_KEY'
)

---

📦 Dependencias importantes
bash
Copiar
Editar
npm install react-router-dom axios sass

---

📄 Licencia
Este proyecto es solo para fines educativos o personales.

---

✨ Autor
Desarrollado por [GuilleG02]