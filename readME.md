# Vehicle Management System 🚗

Este proyecto es un sistema de gestión de vehículos que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre vehículos. Está construido utilizando **Node.js**, **Express**, y **TypeScript**, ofreciendo una arquitectura robusta y escalable.

## 🗂 Estructura del Proyecto

- **controllers**: Maneja las solicitudes HTTP y la interacción entre el cliente y el servicio.
- **services**: Contiene la lógica de negocio que procesa los datos antes de almacenarlos o devolverlos.
- **repositories**: Gestiona la persistencia de datos y las consultas a la base de datos.
- **models**: Define las interfaces y modelos de los datos utilizados en el sistema.

## 🚀 Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    ```
   
2. Navega al directorio del proyecto:
    ```bash
    cd tu_repositorio
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

## 💻 Uso

1. Inicia el servidor:
    ```bash
    npm run start
    ```

2. El servidor estará disponible en `http://localhost:3000`.

## 📑 Endpoints

- **POST** `/vehicles`: Crea un nuevo vehículo.
- **GET** `/vehicles/:id`: Obtiene un vehículo por su ID.
- **PUT** `/vehicles/:id`: Actualiza un vehículo por su ID.
- **DELETE** `/vehicles/:id`: Elimina un vehículo por su ID.
- **GET** `/vehicles`: Obtiene la lista completa de vehículos.

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js.
- **TypeScript**: Superset de JavaScript que añade tipado estático.

