
## **1. Arquitectura del Proyecto**

### **Frontend:**
- **Framework**: React con Next.js
- **Estilos**: Tailwind CSS para el diseño responsivo y modular.
- **UI Components**: Uso de componentes personalizados y de la biblioteca de UI `shadcn/ui` para mejorar la experiencia de usuario.
- **Estado**: Se utiliza `useState` y `useEffect` para manejar el estado y hacer llamadas a las APIs.

### **CI/CD:**
- **Despliegue**: El proyecto se despliega en **Vercel**, que soporta despliegue automático para proyectos basados en Next.js.
- **Integración Continua**: Cada vez que se realiza un `push` a la rama principal o de desarrollo, se ejecutan pipelines de CI para probar y construir la aplicación automáticamente.

## **2. Instrucciones de Despliegue y Ejecución Local**

### **Requisitos Previos:**
1. Node.js (versión 14 o superior).
2. NPM o Yarn para gestionar dependencias.
3. Cuenta en Vercel (para el despliegue en producción).

### **Instalación Local:**
1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

   o

   ```bash
   yarn install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con las variables necesarias (ejemplo):

   ```
   NEXT_PUBLIC_API_KEY=tu_api_key
   NEXT_PUBLIC_API_URL=https://api.example.com
   ```

4. Ejecuta el servidor localmente:

   ```bash
   npm run dev
   ```

   o

   ```bash
   yarn dev
   ```

5. Abre el navegador y navega a `http://localhost:3000` para ver la aplicación.

---

## **3. Instrucciones de Despliegue en Vercel**

### **Configuración de Vercel:**
1. **Autenticación**:
   - Inicia sesión en [Vercel](https://vercel.com/) o crea una cuenta si no tienes una.
   
2. **Conectar con el repositorio**:
   - En el tablero de Vercel, selecciona "Nuevo Proyecto" y conecta tu repositorio de GitHub, GitLab o Bitbucket.

3. **Configurar Variables de Entorno**:
   - En la configuración del proyecto en Vercel, agrega las variables de entorno que definiste en el archivo `.env` bajo la sección "Environment Variables".

4. **Despliegue Automático**:
   - Vercel hará un despliegue automático cada vez que realices un `push` a la rama principal o a cualquier rama configurada en los ajustes del proyecto. El dominio de la aplicación será generado automáticamente.

### **CI/CD con Vercel**:
- **Branch Preview**: Vercel genera un preview deployment en cada `pull request` para que puedas ver cómo se verá la aplicación antes de fusionar cambios a la rama principal.
- **Producción**: Cada vez que un `push` es hecho a la rama principal, Vercel construye y despliega la versión más reciente de la aplicación en tu dominio de producción.

---

## **4. Ejemplo de archivo de configuración `vercel.json`:**

```json
{
  "version": 2,
  "builds": [
    { "src": "next.config.js", "use": "@vercel/next" }
  ],
  "env": {
    "NEXT_PUBLIC_API_KEY": "@api_key",
    "NEXT_PUBLIC_API_URL": "@api_url"
  },
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://api.example.com/$1"
    }
  ]
}
```

Este archivo puede personalizarse para configurar los rewrites, rutas y variables de entorno necesarias para el despliegue.