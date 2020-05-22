# Cliente

Este proyecto se genero [Angular CLI] version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` para pruebas.

## Code scaffolding

## Build

Run `ng build` para construir el proyecto en dist. Use la bandera `--prod` para construir en producion.


## Further help

Para conseguir mas ayuda de angular CLI use `ng help`  y para ir ver otra bibliografia [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Resumen
para crear una carpeta de producion 
#entre a la carpeta servidor

npm install

#cambiar en el archivo 
   /src/app/services/*-services.ts
la linea donde se encuentra la conexion a los microservicios
    ejemplo
    API_URI = 'http://192.168.1.241:3000/techno';
cambiar el ip y el puerto del respectivo sistema  de servicios

#para compilar use comando 

ng build --prod

#Para poner en produccion
una ves que se tiene la carpeta dist\ 
copiar todo su contenido en un  en la raiz de su  apache2 o nginx
ejemplo /var/www/html base de apache2

cp -R dist/cliente/* /var/www/html

Ejecute el servidor de Apache2 o NGINX

