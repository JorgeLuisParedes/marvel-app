# Changelog Personal – Marvel App (`refactor/improvements`)

Este changelog registra los cambios técnicos introducidos en la rama de mejoras personales, con detalles sobre las ramas fusionadas y su propósito.

---

## [10-04-2025] – Creación de estructura de mejora personal

**Rama fusionada:** N/A (inicio)

- Se creó la rama `refactor/improvements` como base para experimentación y mejoras personales no incluidas en `main`.
- Se definió la estructura de archivos: `improvement-plan.md`, `CHANGELOG.personal.md` y `README.personal.md`.

---

## [PENDIENTE] – Implementación del toggle modo claro/oscuro

**Rama fusionada:** `feature/dark-mode-toggle`

- Se agregó soporte para `darkMode: 'class'` en Tailwind.
- Se implementó un botón para alternar el modo de tema.
- Se aplicaron clases `dark:` a componentes clave.

---

## [11-04-2025] – Estructura de gestión establecida

**Archivos modificados:** `improvement-plan.md`, `WORKFLOW.md`

- Se definió y documentó un flujo de trabajo basado en GitFlow adaptado al proyecto.
- Se aplicó Convención de Commits (`Conventional Commits`) como estándar de mensajes.
- Se reestructuró el plan de mejoras:
    - Tabla con columnas de prioridad y dificultad.
    - Simbología visual clara (estrellas, bloques, íconos).
    - Leyenda final para facilitar lectura.

---

## [11-04-2025] – Primera versión funcional del modo oscuro

**Rama:** `feature/dark-mode-toggle`

- Se creó el componente `ThemeToggle` y se integró al `Header`.
- Se implementó la lógica para alternar entre modo claro y oscuro a nivel global mediante `document.documentElement.classList.toggle('dark')`.
- Aún no se aplican clases `dark:*` de Tailwind al layout general; eso se añadirá progresivamente en los próximos commits.
- Actualmente utiliza íconos provisionales (emojis). Los íconos SVG personalizados serán añadidos posteriormente.

> Estado del `improvement-plan.md`: **🟡 En progreso**

---

## [14-04-2025] – Ajustes visuales del botón de cambio de tema

**Rama:** `feature/dark-mode-toggle`

- Se reemplazaron los íconos provisionales del toggle por un botón textual `"Oscuro / Claro"`.
- Se definió un ancho fijo (`w-24`) para evitar cambios de tamaño entre estados.
- Se aplicaron clases tipográficas (`text-sm`, `uppercase`, `text-center`) para coherencia visual con el diseño general.
- Se añadió `px-4` y `py-2` para asegurar una proporción visual adecuada y espacio interior.
- Se aplicaron colores de marca (`border-marvel`, `text-marvel`, `hover:bg-marvel`) alineados con la estética del proyecto.

> Estado del `improvement-plan.md`: **🟡 En progreso**

---

## [16-04-2025] – Ajustes visuales generales para soporte de modo oscuro

**Rama:** `feature/dark-mode-toggle`

- Se aplicaron clases `dark:*` en el componente `Main` para establecer fondo y color de texto global en modo oscuro.
- Se estilizó el campo de búsqueda (`FilterCharacter`) para adaptarse visualmente al tema oscuro, incluyendo placeholder, ícono y borde inferior.
- Se ajustaron las tarjetas de personaje (`Character`) aplicando fondo `dark:bg-zinc-800` y manteniendo texto en blanco (`text-white`) para asegurar contraste en ambos temas.
- Se verificó visualmente la coherencia y legibilidad de todos los elementos afectados en ambos modos.

> Estado del `improvement-plan.md`: **🟡 En progreso**

---

## [16-04-2025] – Soporte de modo oscuro para la sección de transformaciones

**Rama:** `feature/dark-mode-toggle`

- Se aplicaron clases `dark:*` en la sección `CharacterTransformations` para adaptar fondo, texto y tarjetas individuales al modo oscuro.
- Se mantuvo `bg-white` como valor base para preservar el diseño original en modo claro.
- Se ajustaron los textos secundarios con `dark:text-zinc-300` para mejorar el contraste y legibilidad.
- Se verificó visualmente la integración con el layout general en ambas versiones del tema.

> Estado del `improvement-plan.md`: **🟡 En progreso**

---

## [16-04-2025] – Adaptación de vista de personaje y mensajes al modo oscuro

**Rama:** `feature/dark-mode-toggle`

- Se aplicó un fondo global adaptativo (`bg-white dark:bg-zinc-900`) y `min-h-screen` en `CharacterPage` para asegurar consistencia visual en toda la vista.
- Se ajustó la sección `CharacterTransformations` para eliminar fondo blanco y heredar correctamente el color desde el contenedor superior.
- Se mejoraron los estilos del componente `Message` para soportar modo oscuro con texto principal (`dark:text-white`) y secundario (`dark:text-zinc-300`).
- Se centralizó el control visual del fondo y el contraste desde la vista superior, reduciendo clases redundantes en subcomponentes.

> Estado del `improvement-plan.md`: **🟡 En progreso**

---

## [16-04-2025] – Mejora del modo oscuro completada y validada

**Rama:** `feature/dark-mode-toggle`

- Se completó la implementación del botón de alternancia entre modo claro y oscuro.
- Se aplicaron clases `dark:*` en vistas clave: Home, Detalle, Favoritos y mensajes de error.
- Se integró `ThemeToggle` en el `Header`, afectando el tema global mediante la clase `dark` en `<html>`.
- Se realizaron pruebas unitarias con Jest y React Testing Library para validar el comportamiento:
    - Render según el estado inicial del tema
    - Alternancia de tema con clic
    - Verificación del texto del botón
- Se confirmó visualmente que todos los componentes se adaptan correctamente en ambos modos.

> Estado del `improvement-plan.md`: **🟢 Completado**

---

## [16-04-2025] – Corrección documental en README extendido

**Rama:** `refactor/improvements`

- Se actualizó el enlace del archivo `PLAN_DE_MEJORAS.md` a `improvement-plan.md` en `README.personal.md` para mantener la coherencia con la estructura actual del proyecto.

---

## [17-04-2025] – Persistencia del modo claro/oscuro con Redux

**Rama:** `feature/dark-mode-persistence`

- Se creó el slice `themeSlice` para manejar el estado del tema (`light` o `dark`) de forma global.
- Se integró este slice al `store` principal y se añadió a la `whitelist` de `redux-persist`.
- Se actualizó `MarvelApp` para aplicar automáticamente la clase `dark` al `<html>` al montar la app según el estado de Redux.
- Se refactorizó `ThemeToggle` para:
    - Eliminar estados locales (`useState`, `useEffect`).
    - Leer directamente desde Redux.
    - Despachar la acción `toggleTheme` al hacer clic.
- Se confirmó persistencia entre sesiones vía `localStorage`.
- Se validó visualmente en escritorio y dispositivos móviles.

🔬 **Pendiente**: agregar pruebas unitarias para el slice `themeSlice` y el componente `ThemeToggle`.

> Estado del `improvement-plan.md`: **🟡 En progreso (falta cobertura de tests)**

---

## [17-04-2025] – Pruebas unitarias para `themeSlice`

**Rama:** `feature/dark-mode-persistence`

- Se agregaron pruebas unitarias para el slice `themeSlice` que validan:
    - Estado inicial por defecto.
    - Alternancia entre modos con `toggleTheme`.
    - Establecimiento explícito con `setTheme`.
- Se utilizó el tipo `ThemeState` desde `types/ThemeTypes.ts` para mantener consistencia y seguridad de tipos.
- Cobertura completa lograda para la lógica del reducer.

> Estado del `improvement-plan.md`: **🟡 En progreso (falta test de UI para `ThemeToggle`)**

---

## [17-04-2025] – Persistencia del modo claro/oscuro con Redux

**Rama:** `feature/dark-mode-persistence`

- Se creó el slice `themeSlice` para manejar el estado del tema (`light` o `dark`) de forma global.
- Se integró este slice al `store` principal y se añadió a la `whitelist` de `redux-persist`.
- Se actualizó `MarvelApp` para aplicar automáticamente la clase `dark` al `<html>` al montar la app según el estado de Redux.
- Se refactorizó `ThemeToggle` para:
    - Eliminar estados locales (`useState`, `useEffect`).
    - Leer directamente desde Redux.
    - Despachar la acción `toggleTheme` al hacer clic.
- Se confirmó persistencia entre sesiones vía `localStorage`.
- Se agregaron pruebas unitarias al `themeSlice`.
- Se adaptaron y corrigieron los tests de integración para `ThemeToggle`, verificando:
    - Visualización correcta según el estado.
    - Dispatch correcto de acciones.
- Se ajustaron `createTestStore`, `MockRootState` y `renderWithStore` para reflejar el nuevo estado global.

> Estado del `improvement-plan.md`: **🟢 Completado**
