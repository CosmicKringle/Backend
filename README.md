# Backend con autenticación JWT

API REST desarrollada con Node.js, Express y MongoDB para registrar usuarios, iniciar sesión y administrar tareas personales mediante autenticación JWT.

Cada usuario puede consultar, crear, modificar y eliminar sus propias tareas.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone URL_DEL_REPOSITORIO
   ```

2. Entrar en la carpeta que contiene el archivo `package.json`.

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Crear un archivo `.env` en esa misma carpeta, tomando como referencia `.env.example`:

   ```env
   PORT=5000
   MONGO_DB=TU_CADENA_DE_CONEXION_MONGODB
   JWT_SECRET=TU_CLAVE_SECRETA
   ```

   Reemplazar los valores de ejemplo con la configuración local.

## Ejecución

Iniciar el servidor en modo desarrollo:

```bash
npm run server
```

Con `PORT=5000`, la URL base es:

```text
http://localhost:5000
```

Se necesita una conexión disponible a MongoDB para utilizar la API.

## Endpoints

| Método | Ruta | Descripción | Requiere token |
|--------|------|-------------|----------------|
| POST | /api/users/register | Registrar un usuario | No |
| POST | /api/users/login | Iniciar sesión y obtener un JWT | No |
| GET | /api/users/datos | Consultar los datos del usuario autenticado | Sí |
| GET | /api/tareas | Consultar las tareas del usuario autenticado | Sí |
| POST | /api/tareas | Crear una tarea | Sí |
| PUT | /api/tareas/:id | Modificar una tarea propia | Sí |
| DELETE | /api/tareas/:id | Eliminar una tarea propia | Sí |

## Autor

Erwin Torres  
Universidad Anáhuac Mayab  
Ingeniería de Software
