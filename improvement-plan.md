# Plan de Mejoras – Marvel App (rama `refactor/improvements`)

Este documento registra las ideas de mejora personal propuestas para la aplicación, su estado actual y una breve descripción del objetivo de cada una.

| Prioridad | Estado | Mejora                                  | Dificultad | Descripción                                                                   |
| --------- | ------ | --------------------------------------- | ---------- | ----------------------------------------------------------------------------- |
| ⭐⭐      | 🟡     | Toggle modo claro/oscuro                | █          | Agregar un botón que permita alternar entre temas, usando Tailwind.           |
| ⭐⭐⭐    | 🔴     | Fallback entre APIs (Marvel/DragonBall) | ███        | Implementar un sistema que seleccione la API en función de su disponibilidad. |
| ⭐⭐      | 🔴     | Paginación o scroll infinito            | ██         | Optimizar la carga inicial de personajes dividiéndola en páginas o chunks.    |
| ⭐        | 🔴     | Internacionalización (i18n)             | ██         | Soporte multilenguaje usando `react-i18next` con selector de idioma.          |
| ⭐⭐      | 🔴     | Accesibilidad mejorada (a11y)           | ███        | Incluir atributos semánticos y soporte de navegación por teclado.             |
| ⭐⭐      | 🔴     | Modo oscuro persistente                 | ██         | Guardar preferencia del usuario en localStorage.                              |
| ⭐        | 🔴     | Sincronización de favoritos en la nube  | ███        | Conectar favoritos a una API real o mock persistente.                         |

> Prioridad: `⭐ Baja` · `⭐⭐ Media` · `⭐⭐⭐ Alta`

> Estados posibles: `🔴 Pendiente` · `🟡 En progreso` · `🟢 Completado`

> Dificultad: `█ Baja` · `██ Media` · `███ Alta`
