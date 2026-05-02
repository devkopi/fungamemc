# FunGame MC - Portal para el Servidor

Este proyecto fue desarrollado como una experiencia completa de gestión y visualización para el servidor de FunGame MC. El objetivo principal fue modernizar la presencia web del servidor, ofreciendo una plataforma robusta y segura tanto para los usuarios como para la administración.

## Propósito del Proyecto
La arquitectura fue diseñada para transformar una solicitud tradicional basada en PHP en una solución moderna. Aunque el motor del backend utiliza PHP (a petición del administrador del servidor), se implementó bajo un modelo de API REST. Esto permite que el backend entregue datos estructurados en formato JSON, los cuales son consumidos de manera eficiente por un frontend dinámico construido en React.

## Stack Tecnológico

### Frontend
- React: Para una interfaz de usuario reactiva y componentes modulares.
- Tailwind CSS: Para un diseño personalizado y responsive.
- React Router: Para una navegación fluida entre páginas (SPA).
- Vite: Como entorno de desarrollo y bundler de alto rendimiento.

### Backend y Base de Datos
- PHP: Motor del lado del servidor configurado para actuar como API.
- XAMPP (Apache): Servidor local para el despliegue del backend.
- MySQL: Gestor de base de datos relacional.
- Axios: Para facilitar las peticiones a la API REST.

## Estructura de Datos
El sistema gestiona la información de la comunidad de manera organizada. Un ejemplo clave es la tabla de Usuarios, diseñada para la seguridad y el control:
- id: Identificador único.
- nombre: Nombre de usuario registrado.
- correo: Dirección de correo electrónico.
- password: Contraseña almacenada mediante hashing para garantizar la privacidad y seguridad de los datos.

## Autenticación y Seguridad
El proyecto pone un fuerte énfasis en la validación de acceso:
- Validaciones en Login: El componente de inicio de sesión realiza validaciones exhaustivas antes de procesar cualquier solicitud.
- Control de Acceso al Dashboard: El acceso al panel está protegido. Se realizan verificaciones constantes para confirmar si el usuario está autenticado antes de permitir la visualización de la sección.

## Funcionalidades Principales
- Dashboard Informativo: Un panel centralizado que actualmente muestra datos estadísticos y de actividad (datos estáticos dentro del componente).
- Sistema de Novedades (Updates): Visualización dinámica de las últimas actualizaciones del servidor.
- Autenticación Segura: Sistema de registro e inicio de sesión con manejo de sesiones y validaciones de identidad.
- Página de Staff: Sección dedicada a presentar al equipo del servidor.
- Copiado Rápido de IP: Acceso directo a la dirección del servidor con un solo clic.



---
Proyecto desarrollado para potenciar el servidor de FunGame MC.