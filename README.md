# 🛍️ Product App - Angular Assessment

This is an **Angular-based product listing application** that allows users to **view a list of products**, navigate to **product details**, and experience smooth **routing and navigation**. The project follows **Angular best practices** and includes **Bootstrap for styling**.

This application can be run **locally** or inside a **Docker container** for easy deployment.

---

## **🚀 Getting Started - Running Locally**
Follow these **step-by-step instructions** to set up and run the project on your local machine.

### **🔹 1️⃣ Prerequisites**
Before running the project, ensure you have the following installed:

✅ **Node.js (LTS Version)** → [Download Here](https://nodejs.org/)  
✅ **Angular CLI** → Install it globally using:  
   ```bash
   npm install -g @angular/cli
   ```
✅ **Git** → [Download Here](https://git-scm.com/)  

---

### **🔹 2️⃣ Clone the Repository**
Open a terminal and run the following command to **clone the project** from GitHub:
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/product-app.git
cd product-app
```

---

### **🔹 3️⃣ Install Dependencies**
Run the following command inside the project folder to install required **Node modules**:
```bash
npm install
```
This will install all necessary dependencies for the project.

---

### **🔹 4️⃣ Start the Angular Development Server**
Run the following command to **start the Angular application**:
```bash
ng serve
```
Once the server starts successfully, you should see an output like:
```
✔ Compiled successfully.
✔ Angular Live Development Server is listening on localhost:4200
```

---

### **🔹 5️⃣ Open the Application in a Browser**
Once the Angular server is running, open your browser and visit:
```
http://localhost:4200
```
You should now see the **Product List Page** with all products displayed. 🎉

---

### **🛠️ 6️⃣ Stopping the Angular Server**
To stop the running Angular server, go to the terminal where it's running and press:
```
CTRL + C
```
Then confirm with **`Y`** if prompted.

---

## **🐳 Running with Docker**
If you want to **run the project inside Docker**, follow these steps:

### **🔹 1️⃣ Build & Start the Docker Container**
Run the following command inside the project folder:
```bash
docker-compose up --build
```
This command will:
✔ **Build the Angular app** inside a Docker container  
✔ **Start the development server**  

---

### **🔹 2️⃣ Open the Application in Browser**
Once the container is running, visit:
```
http://localhost:4200
```
You should now see the application running inside a **Docker container**.

---

### **🔹 3️⃣ Stop the Running Docker Container**
To stop the running Docker container, use:
```bash
docker-compose down
```
This will **stop and remove** the container.

---

## **📂 Project Structure**
```
product-app/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── product-list/  → Displays all products
│   │   │   ├── product-card/  → Individual product card
│   │   │   ├── product-detail/ → Product detail page
│   │   ├── services/
│   │   │   ├── product.service.ts → Handles data fetching with RxJS
│   │   ├── app.routes.ts → Angular routing configuration
│   ├── assets/ → Static files (e.g., images, icons)
│── angular.json → Angular project settings
│── package.json → Project dependencies
│── docker-compose.yml → Docker configuration
│── README.md → Project documentation
```

---

## **📎 Technologies Used**
✔ **Angular 16+**  
✔ **RxJS Observables**  
✔ **Bootstrap 5**  
✔ **TypeScript**  
✔ **SCSS/CSS for styling**  
✔ **Docker**  

---

