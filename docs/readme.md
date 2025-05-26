Autenticación con Firebase en Angular 19
Este proyecto implementa múltiples métodos de autenticación utilizando Firebase Authentication en una aplicación desarrollada con Angular 19. Los métodos implementados incluyen:

Inicio de sesión con Google

Inicio de sesión con GitHub

Inicio de sesión con Facebook

Restablecimiento de contraseña mediante correo electrónico (Gmail)

🔧 Requisitos previos
Node.js y Angular CLI instalados

Cuenta de Firebase configurada

Aplicación Angular 19 creada

Navegador compatible (Chrome recomendado)

🔥 Configuración en Firebase
Crear un proyecto en Firebase:

Ir a https://console.firebase.google.com/

Crear un nuevo proyecto

Agregar Firebase a la aplicación web:

En el panel del proyecto, ir a Project Overview > Web App (icono </>)

Registrar la app y copiar el SDK de configuración

Habilitar métodos de autenticación:

Ir a Authentication > Sign-in method

Activar los siguientes proveedores:

Google (configuración básica)

GitHub (necesita client ID y secret desde GitHub Developer Settings)

Facebook (necesita app ID y secret desde Facebook Developers)

Correo electrónico/contraseña (para el login tradicional y restablecimiento)

Configurar dominios autorizados:

Asegúrate de agregar localhost y el dominio de despliegue en Authentication > Settings > Authorized domains
