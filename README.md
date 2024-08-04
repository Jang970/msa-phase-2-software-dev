# MSA Phase 2 Submission

## Stylospotter

Welcome to Stylospotter, your one stop shop for clothes!

Create an account and view our selection of clothes ranging from shirts, pants, hats and jackets.
Found one you fancy? Add it to your cart! Fancy it alot? You can buy multiple!
Don't want to scroll? No worries, you can search it up instead! Want to change your name? Head over to the account page!

## How to Run Locally:

### Prerequisites:
- Node.js (v14 or above)
- .NET 8 SDK
- SQL Server
- Git

**Note:** Please make sure your SQL Server instance is running on your computer.

**Step 0:** Clone the repository

### Backend

#### Step 1: Navigate to backend directory in Command Prompt
`cd clothing-store-backend`

#### Step 2: Setup Environment Variables
Create a `.env` file in the backend directory with the following content: `DefaultConnection=Server=.\SQLExpress;Database=StoreDb;Trusted_Connection=true;TrustServerCertificate=true;`

#### Step 3: Connect to SQL Server
Please proceed with connecting to your local SQL Server using SQL Server Management Studio.

#### Step 4: Install Packages
With the terminal in the backend directory, run `dotnet restore`

#### Step 5: Build Project
`dotnet build`

#### Step 6: Apply Migrations
`dotnet ef database update`

#### Step 7: Run Server (Please use the exact command below)
`dotnet run --launch-profile "https"`
This will start the backend server at https://localhost:7276 and the corresponding swagger at https://localhost:7276/swagger/index.html.
### Frontend

#### Step 1: Navigate to frontend directory in Terminal
`cd frontend`

#### Step 2: Install Dependencies
`npm install`

#### Step 3: Setup Environment Variables
Create a `.env.development` in the frontend directory with the following content: `VITE_API_BASE_URL=https:///localhost:7276`

### Step 4: Run Development Server
`npm run dev`

### Application Basic Features:
- React Project with TypeScript
- MUI for styling
- Mobile Responsiveness
- React Router for routing
- Built backend with C# using .NET8
- EFCore usage
- Persists data with an SQL Server
- CRUD Operations:
     - User Creation, Retrieval, Editing and Deletion
     - Cart Creation, Retrieval, Editing and Deletion
     - Products Retrieval

 ### Application Advanced Features:
 - Light / Dark Mode theme switching
 - State management using Zustand
 - Deployment on Azure see here: https://stylospotter-e2cff2a2epc7fxcn.australiaeast-01.azurewebsites.net/

### What I am proud of:
I am proud of researching and finding about Zustand for state management. It will be something I will use for future projects when I need a good state management solution. Zustand really made it simple to manage my user, product and cart states and saved me from the tediousness that comes with working with React Contexts. I am also proud of being able to deploy my project on Azure, I spent a good amount of time and effort on this project and to be able to access the project anywhere on the web is a reward to me.

## Credits
All product photos were retrieved from pinterest. Other Product details were generated via ChatGPT.

#### Pants:
- https://i.pinimg.com/564x/eb/47/a3/eb47a30f2a600865adfbd6e76cf08ee8.jpg
- https://i.pinimg.com/564x/42/d5/37/42d537d1145177b4527b935ec3145290.jpg
- https://i.pinimg.com/564x/ec/51/45/ec5145e7abb41708a679de77ce7820ec.jpg

#### Shorts:
- https://i.pinimg.com/564x/8f/28/86/8f28868ae05652204b5231bf57aa9857.jpg
- https://i.pinimg.com/564x/f8/5c/68/f85c68b754a9de157cba6773efc5edc3.jpg

####  Shirts:
- https://i.pinimg.com/564x/46/22/bd/4622bd6800b6a2163ef38db22511dbd2.jpg
- https://i.pinimg.com/564x/d7/5a/4c/d75a4ce37c72b52fedbb3db89244c220.jpg
- https://i.pinimg.com/564x/d9/00/ef/d900ef00e39327341236079b82fc3123.jpg
- https://i.pinimg.com/564x/17/0c/d9/170cd9dd2b22489470dae4ed26a01585.jpg
- https://i.pinimg.com/564x/7d/7c/3c/7d7c3cb90cdaeaa8f8f0c63e8fb8299c.jpg

#### Jackets:
- https://i.pinimg.com/564x/bb/be/30/bbbe301a85bf2313f923be985b534ad5.jpg
- https://i.pinimg.com/564x/81/cc/a2/81cca2660ea5cf2d140012f63c201cf9.jpg
- https://i.pinimg.com/564x/e8/14/71/e8147125c3fd38997fbd76f93aff0b2e.jpg
- https://i.pinimg.com/564x/a6/3c/da/a63cdab3d268f7ae7adf6e7131f884a0.jpg
- https://i.pinimg.com/564x/a1/4e/79/a14e795a60d6716642082c16a40a58c9.jpg

#### Hats:
- https://i.pinimg.com/564x/a5/ce/7d/a5ce7de4900c61274cc7d076e49cf49e.jpg
- https://i.pinimg.com/564x/b2/0a/35/b20a35654ac81f50af62e5247a5857f0.jpg
- https://i.pinimg.com/564x/95/b5/a1/95b5a1fa456f0d76bbb9c5c49530cca4.jpg
- https://i.pinimg.com/564x/bc/25/b2/bc25b21c4d6b6e48b4d762d9a432cc63.jpg
- https://i.pinimg.com/564x/24/cd/20/24cd204be9757864c3002356c690d968.jpg
