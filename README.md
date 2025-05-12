# 📌 Manager Tasks

Manager Tasks es una aplicación para gestionar tareas, desarrollada con **React + Vite + TypeScript + Zustand** en el frontend y **NestJS + MongoDB + Mongoose** en el backend.

🌐 **Demo en producción:**

- **Frontend:** [Manager Tasks en Vercel](https://manager-tasks-chi.vercel.app/#/home)
- **Backend:** [Manager Tasks en Railway](https://manager-tasks-production.up.railway.app)

---

## 🚀 Instalación en local

### ⚙️ 1. Clonar el repositorio

```bash
# Clonar el proyecto
git clone https://github.com/rickbroken/manager-tasks.git
cd manager-tasks
```

### 🖥️ 2. Configurar el Backend

```bash
cd backend-manager-tasks
```

1. Instalar dependencias:
   ```bash
   npm install
   ``` 
2. Crear un archivo `.env` en la raíz con la siguiente estructura:
   ```ini
   MONGODB='URL DE PRODUCCION SECRETA'
   MONGO_USERNAME=username
   PORT=8080
   DEFAULT_LIMIT=5
   DEV=true
   ```
3. Levantar el backend:
   ```bash
   npm run start:dev
   ```

🔹 **Backend disponible en:** `http://localhost:8080/api`

### 🌐 3. Configurar el Frontend

```bash
cd ../frontend-manager-tasks
```

1. Instalar dependencias:
   ```bash
   npm install
   ```
3. Levantar el frontend:
   ```bash
   npm run dev
   ```

🔹 **Frontend disponible en:** `http://localhost:5173`

---

## 🔥 Consideraciones

- Asegúrate de tener **Node.js** y **MongoDB** instalados en tu sistema.
- El backend debe estar corriendo antes de iniciar el frontend para evitar errores de conexión.


Muchas Gracias
