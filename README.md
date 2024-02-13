![Fondo Tutorial_Estirpe](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/22964624-e3ce-48a3-98f6-33da179b74d4)

# Fichas para Estirpe de Dunwich en Custom System Builder

## Tabla de Contenido
- [Introducción](#introducción)
- [Instalación](#instalación)
- [Configurar fórmula de Iniciativa](#configurar-fórmula-de-iniciativa)
- [Crear un PJ](#crear-un-pj)
  - [Pestaña de Habilidades](#pestaña-de-habilidades)
  - [Pestaña de Manifestación](#pestaña-de-manifestación)
  - [Pestaña de Trasfondo y Notas](#pestaña-de-trasfondo-y-notas)
- [Crear un PNJ](#crear-un-pnj)
- [Crear Objetos](#crear-objetos)
- [Hacer tiradas](#hacer-tiradas)
- [Iniciativa y Combate](#iniciativa-y-combate)

## Introducción
Modulo de Foundry VTT con las templates de las fichas para el juego Estirpe de Dunwich para el sistema Custom System Builder ( https://foundryvtt.com/packages/custom-system-builder ).

Para aprender como instalarlo y usarlo podeis ver el tutorial en el siguiente video: 

[![Video del tutorial](http://img.youtube.com/vi/xB_77tavA2w/0.jpg)](http://www.youtube.com/watch?v=xB_77tavA2w "Tutorial Foundry-Estirpe de Dunwich")


## Instalación
Para instalar este módulo en Foundry tienes que usar el siguiente Manifest en el menú de módulos como se muestra en la imagen: https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/releases/latest/download/module.json

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/b2025a6c-8129-479f-9e15-796e429dd632)

Cuando hayas creado un mundo con el sistema Custom System Builder debes activar este módulo. En la pestaña de compendios tendrás dos: "Templates_Actores" y "Templates_Objetos".
Es importante que importes primero los Objetos y después los Actores, pero sobretodo que se mantenga el ID del documento como se ve en la imagen:

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/6fa9c0c2-1936-4db6-99b2-7e80f54e7172)

## Configurar fórmula de Iniciativa
Para configurar la fórmula de Iniciativa debemos ir a Configurar Ajustes --> Custom System Builder y allí cambiar la Initiative formula a **"iniciativa"** (sin las comillas y en minuscula) y en Roll Icons ponemos **"dice"** (tambien sin comillas).

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/ee648fbb-139a-4de2-b68c-5d82108691e8)

Para que tenga efecto debemos refrescar la página.

## Crear un PJ
Una vez estan importadas las templates ya podemos crear los Actores.
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/1286067f-37f3-48fb-8e5b-d860ce6dea84)

Aqui tenemos que seleccionar en Template la que se llama **"PJ_Template"**.

~~Aqui tenemos que seleccionar en Template una de las dos templates llamadas PJ_Template segun el siguiente criterio:~~
* ~~Si vamos a **usar el módulo Dice so Nice** (https://foundryvtt.com/packages/dice-so-nice) para ver las tiradas con dados 3D, debemos seleccionar la template **"PJ_Template_DSN"**. Sin el módulo no funcionarán las tiradas con esta template.~~
* ~~Si **no vamos a usar ese módulo**, debemos seleccionar la template **"PJ_Template"**.~~

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/f8546427-eee0-4c13-bfea-bff13fbea094)

En la parte de arriba se pueden poner la descripción y los puntos de experiencia y los costes de avances.

### Pestaña de Habilidades
En la pestaña de habilidades se pueden modificar los valores de las habilidades, escribir las especialidades, añadir las armas cuerpo a cuerpo y a distancia arrastrandolas desde objetos (se pueden modificar haciendo click en el nombre) y marcar las casillas de vitalidad e incapacitación.

Tambien está el apartado de iniciativa que comentaremos más adelante.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/287bab24-9daa-4f5f-80e5-9937a717f62d)

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
