/* 
Ejercicio 1: Fast Forward Merge
Objetivo: Realizar un merge sin conflictos cuando la rama principal no tiene cambios nuevos.
Instrucciones:
1. Crea un nuevo repositorio en Git.
2. Agrega un archivo Javascript con un mensaje en main().
3. Crea y cambia a una nueva rama (feature-ff).
4. Modifica el archivo Javascript en la nueva rama agregando un método adicional.
5. Realiza un commit en esta rama.
6. Vuelve a main y fusiona la rama con git merge feature-ff.
7. Observa cómo Git hace un Fast Forward sin generar un commit de merge.
*/

function main(nombre) {
  console.log(`Bienvenido a mi programa $ {nombre} `);
}

function saludarEstudiante(nombre) {
  console.log(`hola estudiante $ {nombre} `);
}

function saludarProfesores(nombre) {
  console.log(`hola profesor $ {nombre} `);
}

main("VankVersity");
saludarEstudiante("VankVersity");
saludarProfesores("German");

/* Ejercicio 2: Merge con cambios divergentes (sin conflictos)
Objetivo: Realizar un merge cuando ambas ramas han cambiado diferentes líneas del archivo sin generar conflictos.
Instrucciones:
1. Asegúrate de estar en main y crea una nueva rama (feature-no-conflict).
2. Modifica el archivo Javascript agregando una nueva línea de código.
3. Realiza un commit en la rama.
4. Cambia a main y modifica el mismo archivo, pero en una línea distinta.
5. Realiza un commit en main.
6. Intenta fusionar ambas ramas y verifica que Git lo hace automáticamente sin conflictos. */

console.log(`cambios2`);

function cambios(cambios) {
  console.log(`cambios`);
}

/*Ejercicio 3: Merge con conflicto en el mismo archivo
Objetivo: Manejar un conflicto de fusión cuando ambas ramas han cambiado la misma línea.
Instrucciones:
1. Asegúrate de estar en main y crea una nueva rama (feature-conflict).
2. Modifica una línea de código en el archivo Javascript y realiza un commit en la rama.
3. Cambia de vuelta a main y edita la misma línea del archivo.
4. Realiza un commit en main.
5. Intenta hacer un merge y observa que Git muestra un conflicto.
6. Edita manualmente el archivo para resolver el conflicto.
7. Usa git add para marcar el archivo como resuelto y confirma el merge con un commit. */
 
function conflicto(conflicto){
    console.log(`conflicto`);
}
