function main (nombre){
    console.log(`Bienvenido a mi programa $ {nombre} ` );
}


function saludarEstudiante(nombre){
    console.log (`hola estudiante $ {nombre} `);
}

function saludarProfesores(nombre){
console.log (`hola profesor $ {nombre} `);
}

main("VankVersity")
saludarEstudiante("VankVersity")
saludarProfesores ("German")


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