Diferencias entre Arrow Functions y Regular Functions

Arrow Functions:
- Se definen usando la sintaxis `() => {}`.
- No tienen su propio `this`, sino que lo heredan del contexto donde fueron creadas (lexical `this`).
- No se pueden usar antes de declararlas (no hay hoisting igual que en funciones normales declaradas con `const` o `let`).
- No tienen `arguments`, se debe usar el operador rest (`...args`) si quieres obtenerlos.

Regular Functions:
- Se definen usando la palabra clave `function`.
- Tienen su propio valor de `this`, que cambia dependiendo de cómo se llame la función.
- Se pueden usar antes de declararlas gracias al "hoisting".
- Permiten usar `arguments` para acceder a todos los argumentos pasados.
