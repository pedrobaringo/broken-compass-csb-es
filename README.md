![Fondo Tutorial_Estirpe](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/22964624-e3ce-48a3-98f6-33da179b74d4)

# Fichas para Broken Compass en Custom System Builder

## Tabla de Contenido
- [Introducción](#introducción)
- [Instalación](#instalación)
- [Crear un PJ](#crear-un-pj)
  - [Pestaña de Características](#pestaña-de-características)
  - [Pestaña de Manifestación](#pestaña-de-manifestación)
  - [Pestaña de Trasfondo y Notas](#pestaña-de-trasfondo-y-notas)
- [Crear un PNJ](#crear-un-pnj)
- [Crear Objetos](#crear-objetos)
- [Hacer tiradas](#hacer-tiradas)
- [Iniciativa y Combate](#iniciativa-y-combate)

## Introducción
Modulo de Foundry VTT con las templates de las fichas para el juego Broken Compass para el sistema Custom System Builder ( https://foundryvtt.com/packages/custom-system-builder ).

Para aprender como instalarlo y usarlo podeis ver el tutorial en el siguiente video: 

[![Video del tutorial](http://img.youtube.com/vi/xB_77tavA2w/0.jpg)](http://www.youtube.com/watch?v=xB_77tavA2w "Tutorial Foundry-Estirpe de Dunwich")


## Instalación
Para instalar este módulo en Foundry tienes que usar el siguiente Manifest en el menú de módulos como se muestra en la imagen: https://github.com/pedrobaringo/broken-compass-csb-es/releases/latest/download/module.json

![image](https://github.com/pedrobaringo/broken-compass-csb-es/assets/148097688/c5f37ecc-7549-478f-853e-05bab04df9e9)

Cuando hayas creado un mundo con el sistema Custom System Builder debes activar este módulo. En la pestaña de compendios tendrás tres: "Actor_templates", Macros_BC y "Object Templates".
Es importante que importes primero los Macros, después Objetos y después los Actores, pero sobretodo que se mantenga el ID del documento como se ve en la imagen:

![image](https://github.com/pedrobaringo/broken-compass-csb-es/assets/148097688/b9bc6c3d-e6b5-4c5f-84cc-f90ea5ac93f0)

## Crear un PJ
Una vez estan importadas las templates ya podemos crear los Actores.
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/broken-compass-csb-es/assets/148097688/717e5da1-e715-4976-9f69-cdb3f08313dc)

Aqui tenemos que seleccionar en Template la que se llama **"PJ_Template"**.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/broken-compass-csb-es/assets/148097688/64d3b636-d162-4c4e-b4b6-c9d38db6cfaf)


En la parte de arriba se pueden poner las Etiquetas de nuestro héroe, los lugares a los que llama hogar y las palabras por las que vivir.

### Pestaña de Características
Esta pestaña tiene diversas partes:

#### Campos y Habilidades
A la izquierda tenemos todos los campos y habilidades, clickando en los checkbox marcamos los puntos que tenemos y podremos hacer tiradas haciendo click en las habilidades (como describiremos mas abajo).

![image](https://github.com/pedrobaringo/broken-compass-csb-es/assets/148097688/1b23f59f-ce5f-4c6a-91ae-b2ed05f92c0b) ![image](https://github.com/pedrobaringo/broken-compass-csb-es/assets/148097688/39a8518c-af73-4f30-a909-03323af93c67)

### Pestaña de Manifestación
En esta pestaña podemos describir la Manifestación de Yog-Sothoth de nuestro personaje, modificar los factores humano y primigenio y marcar los pasos hacia el umbral con sus hitos y deformidades pertinentes. Tambien tenemos la tabla de "Magnitudes de las Manifestaciones".

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/9b21308a-b413-41cd-a3c2-a0d7f94c7943)

### Pestaña de Trasfondo y Notas
En esta última pestaña podemos rellenar el trasfondo del PJ y tomar notas.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/271f5368-3dd2-4899-b524-e2a2efb093fe)

## Crear un PNJ
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/1286067f-37f3-48fb-8e5b-d860ce6dea84)

Aqui tenemos que seleccionar en Template la que se llama **"PNJ_Template"**.

~~Aqui tenemos que seleccionar en Template una de las dos templates llamadas PNJ_Template segun el siguiente criterio:~~
* ~~Si vamos a **usar el módulo Dice so Nice** (https://foundryvtt.com/packages/dice-so-nice) para ver las tiradas con dados 3D, debemos seleccionar la template **"PNJ_Template_DSN"**. Sin el módulo no funcionarán las tiradas con esta template.~~
* ~~Si **no vamos a usar ese módulo**, debemos seleccionar la template **"PNJ_Template"**.~~

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/a52c5129-8ef4-4dc5-ba7e-81525099e025)

En la parte de arriba se puede escribir la descripción, escribir que nivel de Masivo tiene y que Protección lleva o tiene.

A continuación, en la parte izquierda encontramos las habilidades de Físico, Lucha y Armas de Fuego, asi como las tablas donde arrastrar las Armas desde la pestaña de objetos de Foundry y el selector de Iniciativa.

A la derecha encontramos los medidores de Vitalidad e Incapacitación. Si modificamos el Multiplicador de Vitalidad estos medidores cambiarán.

## Crear Objetos
Si hacemos click en crear objeto y elegimos el tipo "equippableItem" podremos crear objetos de todos los tipos usando las templates.
Los tipos son:
* **Arma_Template**: Para armas Cuerpo a Cuerpo.

Se puede definir el Daño (cuantos dados se tirarán), el Penalizador de Iniciativa (-1 si es arma improvisada o desarmado), el alcance y las notas con las peculiaridades del arma.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/7e588ede-00cd-4af8-8d81-d461bf35c48b)

* **ArmaFuego_template**: Para armas a Distancia.

Se puede definir el Daño (cuantos dados se tirarán), el alcance y las notas con las peculiaridades del arma (como el Trauma).

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/ae1825a8-5303-4c6d-86f3-b000bce7e03b)
  
## Hacer tiradas
Para hacer tiradas simplemente se tiene que hacer click en la habilidad con el icono de dados y aparecerá el mensaje de chat con el resultado.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/8ee3c0d6-3d8e-4bef-ac90-e533daba0323)
![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/949f7c9a-4b9c-4598-8bd2-284faae7e2ad)

Para aplicar un modificador a la tirada, se deberá pulsar la tecla "Mayus" mientras se hace click. Aparecerá un dialogo donde podemos asignar el modificador positivo o negativo, añadiendo o quitando dados a la tirada.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/9c4f6dfb-d659-405a-a81a-71ab2d90970b)

## Iniciativa y Combate
Antes de empezar un combate, todos los PJs y los PNJs deberan elegir "¿Que tipo de arma vas a usar?", lo que determinará la Iniciativa.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/95005b3b-db94-47a8-bb8e-7deb55d04317)

Solo cuando lo hayan hecho todos se podrá "tirar" la iniciativa en el menú de "Encuentros de Combate". Se ordenarán los actores de mayor iniciativa a menor.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/42a40ac2-6261-4aca-9301-dbf040b76c46)
