# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** <!-- Aquino Josue Emanuel -->
**Fecha:** <!-- 23/04/2026 -->

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso
Este prompt fue utilizado al inicio de la etapa de mejora del código, con el objetivo de darle contexto a la IA antes de indicarle cambios más específicos.

### Lo que le pedí a la IA
Actuá como un desarrollador frontend senior especializado en accesibilidad web y buenas prácticas HTML5. Te voy a compartir un archivo HTML y necesito que lo mejores aplicando criterios modernos de semántica y accesibilidad, sin modificar el diseño visual ni la funcionalidad existente.
Mantené las clases CSS existentes, no elimines funcionalidad y devolvé el código completo corregido junto con una breve explicación de los cambios realizados.

### Análisis del resultado obtenido

```
Al tratarse de un prompt de contexto, la IA no generó una solución directa sino que tomó una orientación general enfocada en entender el objetivo de mejorar la estructura y aplicar buenas prácticas. Esto permitió establecer una base clara antes de pedir cambios más específicos
```

### Qué debí corregir manualmente y por qué

En este caso no fue necesario realizar correcciones manuales, ya que el prompt utilizado era únicamente de contexto y no solicitaba una respuesta concreta ni una solución directa

---

## Prompt 2

### Momento del proceso

Esta parte se realizó al inicio del ejercicio, en el momento de crear el archivo JavaScript. Fue la primera etapa donde se definieron las variables base del personaje

### Lo que le pedí a la IA

Actuá como un desarrollador JavaScript enfocado en buenas prácticas y código limpio. Necesito que crees la base de un archivo JS donde se definan las estadísticas de un personaje utilizando const o let según corresponda, sin usar var.
Las variables deben estar en inglés y representar atributos como name, characterClass, level, health, mana, attack y defense.

### Análisis del resultado obtenido

La IA tomó un enfoque bastante directo, generando las variables iniciales siguiendo buenas prácticas como el uso de const y nombres descriptivos en inglés. Sin embargo, el resultado no fue completamente correcto, ya que declaró level como const, cuando en realidad es un valor que puede cambiar a lo largo del programa y debería haberse definido con let.

### Qué debí corregir manualmente y por qué

El error fue que la IA declaró level como const, cuando debería ser una variable que pueda cambiar. Lo detecté al leer el código, ya que el nivel de un personaje es un valor dinámico.

Técnicamente es incorrecto porque const no permite reasignación. La corrección fue cambiar const level por let level para que pueda actualizarse correctamente.

---

## Reflexión final

Los errores de la IA no eran de sintaxis sino de cómo se modela una situación real, ya que la IA no interpretó correctamente qué valores podían cambiar. En cambio, en cuanto a semántica y estructura, respondió muy bien desde el inicio, aplicando buenas prácticas y manteniendo un código claro y ordenado. Para mejorar resultados futuros, sería más específico en los prompts, aclarando mejor las acciones a realizar.
