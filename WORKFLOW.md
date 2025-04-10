# Guía de trabajo – Marvel App (GitFlow + Conventional Commits)

Este documento define la estrategia de ramificación y convenciones de commits para mantener un flujo de trabajo estructurado, escalable y profesional.

---

## 🌿 Ramas principales

- `main`: Versión estable del proyecto. Se mantiene limpia y lista para revisión por terceros (reclutadores, colegas, etc.).
- `refactor/improvements`: Rama base para desarrollo de mejoras personales, no visibles en `main`.

---

## 🔀 Tipos de ramas de trabajo

| Prefijo de rama | Descripción                                             | Ejemplo                         |
| --------------- | ------------------------------------------------------- | ------------------------------- |
| `feature/`      | Nuevas funcionalidades o mejoras técnicas.              | `feature/dark-mode-toggle`      |
| `fix/`          | Corrección de errores.                                  | `fix/favorites-counter-bug`     |
| `refactor/`     | Reestructuración del código sin alterar comportamiento. | `refactor/split-character-card` |
| `docs/`         | Cambios en archivos de documentación.                   | `docs/add-dark-mode-to-readme`  |
| `test/`         | Adición o mejora de pruebas automatizadas.              | `test/hook-useCharactersList`   |
| `chore/`        | Tareas de mantenimiento: scripts, config, dependencias. | `chore/update-eslint-config`    |

---

## 🧾 Convención de Commits (Conventional Commits)

Cada commit debe seguir este formato:

```tsx
<tipo>: <descripción breve y en presente>
```

### Tipos aceptados:

- `feat:` → nueva funcionalidad
- `fix:` → corrección de error
- `docs:` → solo documentación
- `style:` → formato (espacios, comas, etc.), sin lógica
- `refactor:` → reestructuración de código, sin nuevas funcionalidades
- `test:` → pruebas automatizadas
- `chore:` → tareas de mantenimiento
- `perf:` → mejoras de rendimiento

#### Ejemplos:

- `feat: agrega toggle para modo oscuro`
- `fix: corrige duplicado en favoritos`
- `refactor: separa lógica de búsqueda en hook personalizado`
- `docs: actualiza sección de estructura de carpetas`

---

## 🧠 Reglas del flujo de trabajo

1. Nunca desarrolles directamente en `main` ni en `refactor/improvements`.
2. Cada cambio debe vivir en su propia rama con nombre semántico y prefijo.
3. Cada rama de trabajo debe hacer PR o merge limpio hacia `refactor/improvements` (no hacia `main`).
4. Commits claros, concisos y atómicos.
5. Mantener la consola limpia (`npm run precommit`) antes de cada push.

---

## 🧩 Archivos de apoyo

- `improvement-plan.md`: lista de mejoras propuestas y su estado.
- `CHANGELOG.personal.md`: registro cronológico de merges y cambios clave.
- `README.personal.md`: guía técnica de esta versión extendida.

---

Este flujo garantiza consistencia, claridad y escalabilidad en el desarrollo del proyecto.
