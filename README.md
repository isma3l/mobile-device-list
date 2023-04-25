Aplicación web para un ecommerce de venta de dispositivos móviles

La aplicación tiene dos vistas:

Vista principal: muestra el listado de dispositivos
Detalles de un dispositivo: muestra la descripción del dispositivo y un formulario para añadir el dispositivo al carrito de compra

Los datos devueltos por BE se almacenan en el localStorage y tienen una validez de 1 hora

- Pasos iniciales

Para probar la aplicación primero hay que clonar el repositorio del proyecto e instalar las dependencias.

- Clonar el repositorio Ejecutar el siguiente comando:

git clone 

###Instalar las dependencias En la raíz del proyecto clonado ejecutar el siguiente comando:

yarn install

- Prueba de la aplicación

En la raíz del proyecto ejecutar:
yarn start

Después de ejecutar el comando se ejecutará un servidor local en http://localhost:3000 y se abrirá el navegador con la aplicacion web.

Prueba en modo production
La aplicación se desplego en 

- Empaquetar la aplicación
Ejecutar el siguiente comando:

yarn build