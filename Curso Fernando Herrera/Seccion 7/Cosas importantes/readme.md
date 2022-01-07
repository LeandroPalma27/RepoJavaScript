# Seccion webpack

1. Webpack es financiado por empresas gigantescas.

2. Webpack es un empaquetador de modulos que nos permite gestionar dependencias, manejar JS moderno sin problemas por navegadores antiguos, minimizar codigo, cargar y manejar modulos en JS, etc. Webpack es

3. El 'package.json' es algo fundamental en el webpack y node, ya que nos permite gestionar la aplicacion a traves de cosas que determinamos en ese archivo (como las dependencias a usar en desarrollo y/o en produccion, versiones, que dependencias no usar en produccion, etc).

6. npm significa: node-package-manager (se relaciona con el webpack y node).

Npm es un gestor de paquetes de node.

webpack es un paquete para la gestion de modulos en javascript (entre otras cosas mas).

4. Siempre un proyecto que quiera usar node y webpack, debe iniciarse con npm init.

5. Luego va: npm install webpack webpack-cli --save-dev

Despues de configura el webpack.config para que se pueda reconocer la carpeta dist y el index.js (previamente creados).

Se puede instalar el lodash que sirve de mucho pero es opcional.

npm install --save-dev html-webpack-plugin me permite instalar un paquete que me crea automaticamente mi index.html en el dist, junto a la importancion de mi 'main.js'.

npm install --save-dev html-loader para instalar el html-loader (aunque es opcional por el momento).

Es necesario instalar el npm i -D webpack-dev-server y configurar el package.json para poder decirle con que comando ejecutar el proyecto y en que puerto tambien.

Es importante manejar el css desde js y tambien de forma dinamica a traves de un styles.css global en la aplicacion (se requieren 3 paquetes instalados: 'npm install --save-dev css-loader style-loader', 'npm install --save-dev mini-css-extract-plugin').

npm init

Creacion de /src, index.html, index.js, styles.css, /css, /js, /assets

npm install --save-dev html-loader html-webpack-plugin style-loader css-loader mini-css-extract-plugin file-loader copy-webpack-plugin raw-loader

npm i -D webpack-dev-server

npm install webpack webpack-cli --save-dev

Creacion del webpack.config.js (revisar cambio de rutas, nombre de archivos, etc.)

importar archivos importantes en el index.js o entry point

crear /img  y /fonst en /assets, tambien incluir una imagen y un archivo .woff

incluir el siguiente script en el package.json: "start": "webpack serve --config webpack.config.js --open --port=9090"

npm i -D css-minimizer-webpack-plugin terser-webpack-plugin (instalar las nuevas dependencias solo para el build de prod).

Instalamos babel: npm install --save-dev babel-loader @babel/core

npm install @babel/preset-env --save-dev

copiar webpack de produccion y añadir nuevo comando para el build de produccion

Generar el build de produccion

Creamos un archivo babel.config.json, para poder escribir cosas en especifico en babel, copiamos la cascarca existente.

Generamos build de produccion.





