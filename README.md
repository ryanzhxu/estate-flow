![estate-flow-high-resolution-logo-color-on-transparent-background](https://github.com/ryanzhxu/estate-flow/assets/77415930/a851f7a6-6647-416b-a667-c1ddba61217d)

# Estate Flow

## Developers:

- Helena Xu
- Ryan Xu
- Zichao Zhou
- Yixuan Li
- Nicholas Luong

## High-level Description

Estate Flow is a comprehensive web app designed for property managers, offering seamless management of rental properties, houses, townhouses, condos, commercial spaces, and offices. This app efficiently stores and organizes data related to properties, buildings, land, tenants, managers, maintenance workers, and more. With Estate Flow, users can effortlessly perform CRUD operations, and track various fees, leases, and expenses. Our goal is to empower property managers to maximize their efficiency and profitability while ensuring the security and privacy of sensitive data.

## Project Description

### Who is it for:

- Property managers

### What will it do? (What "human activity" will it support?)

Note: the term **manages** means all CRUD operations (add, edit delete) are supported.

- Manages rental properties
  - apartment
  - townhouse
  - duplex
  - detached
  - office
  - retail
- Manages tenants who are renting properties owned by Estate Flow
  - Manages tenants' bills, fees to be paid, payment history, lease detail, etc.
  - Tenancy agreement PDF output
- Manages workers employed by Estate Flow

### What type of data will it store?

- properties
- tenants
- workers

### What will users be able to do with this data?

- CRUD
- analysis
- output as PDF

### What is some additional functionality you can add/remove based on time constraints?

- Keep track of various fees/expenses
  - Mortgage payments to be made by Estate Flow
    - term
    - interest rate
    - monthly installment
    - positive/negative cashflow
  - Property expenses
    - taxes
    - strata
    - water/sewer
    - utilities

## Project task requirements

- ### 3-5 minimum requirements (will definitely complete)
  - users can add/edit/remove properties that they are managing ✅
  - users can add/edit/remove tenants to/from a property they are managing ✅
  - calculate profit for landlord (Estate Flow) based on rental income minus mortgage payment ✅
- ### 2-7 "standard" requirements (will most likely complete)
  - due date reminder showed on the dashboard ✅
  - manage tenant information, including lease agreements, rental payments, etc. ✅
  - filter for properties owned ✅
- ### 2-3 stretch requirements (plan to complete at least 1!)
  - have a tenant facing client and an owner facing client 
  - provide security (login/password) for each user. ✅
  - ensure the security and privacy of sensitive data (1/2 ✅)
 
## Technology

### Unit 1: HTML/CSS/JS
We introduced different UI libraries such as @atlaskit, @emotion, @headlessui, @mui, bootstrap, framer-motion, lottie-react, and along with some customized CSS to build a user-friendly web application with a considerable amount of useful functionalities.

### Unit 2: React/Redux
React was used throughout our application as it in combination with Redux for state management, forms a robust framework for developing our project, property management application. Utilizing React's reusable components, efficient rendering, and interactive UI capabilities alongside Redux's centralized state management ensures streamlined data control. This dynamic duo enables the creation of a responsive and modular app architecture, while also providing a comprehensive ecosystem of third-party libraries for added functionalities and simplified testing and debugging processes.

### Unit 3: Node/Express
The backend server was built using Node.js. This is where all of the business logic involving the actual storage and organization of the project’s data is written. We used Express.js to build a REST API, which allows the front end to communicate with the backend to retrieve and manipulate data, e.g., CRUD operations. 

### Unit 4: MongoDB 
MongoDB offers our application unparalleled advantages with its adaptable schema, document-oriented structure, and seamless scalability. Its high-performance architecture, including indexing capabilities and an in-memory storage engine, ensures efficient data handling. MongoDB's real-time capabilities, geospatial features, and developer-friendly design further enhance its suitability for various applications, allowing users to tackle evolving data challenges with ease while maintaining optimal performance. Our database has three collections: properties, tenants, workers, and we created the schemas for each of the data types using Mongoose.

### Unit 5: Builds and Deployment
Our application is deployed with **render**, a unified cloud to build and run applications and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git. We also implemented CI/CD by connecting the Render to our GitHub repo and having our webpage automatically deployed whenever a push is made to our targeted branch. We also added environment variables to our deployment on **render** such that it's able to map the correct hidden secrets like our server URL for any CRUD operations whenever they're being made.

## Above and Beyond Functionality

### Clock and Weather
We introduced a clock along with an OpenWeather API to display the weather based on the user’s current location to make our dashboard page more convenient and look intuitive.

### Reminder and Calendar
This feature enables users to conveniently and quickly look up dates with multiple fees due by our tenants. We introduced the `date` library for date formatting and manipulation and created the reminder component next to the calendar after making the `/tenants/dues/:date` call which retrieves data from our MongoDB database and dynamically reflects the changes on the calendar. Users can easily review due dates by selecting different dates like months and days on the calendar. Upon clicking a reminder, users are directed to the respective tenant home page and view more details about the fees to be dued, thereby enhancing the overall application flow experience

### Login
We featured a login system for our application with the choice of Google and Microsoft (so that one is functional in case the other one is down) by providing clientId(s) to the OAuth providers and grant access to anyone with either a Google or Microsoft account to our web application. We also introduced a video looping in the background of the login page to improve the UX experience and increase awareness of the project being a property management application.

### Lease PDF
We introduced a PDF-generating functionality for the tenancy agreement between tenants and properties using the jsPDF library to create a document where the formatted contents can be placed and let users download the file with a click on the button.

## Next Steps

The next steps for enhancing our app involve incorporating features for convenient communication with tenants and workers through manual or automated email and phone messages. Additionally, enabling the sharing of property and tenant information while also implementing import/export capabilities with mongoDB for seamless data management in excel would be crucial. Furthermore, the app should offer dynamic due date adjustments according to varying time zones and support different tenancy agreement formats tailored to specific provinces, along with more comprehensive details like keyfob counts, facility inclusions, and pet restrictions in generated tenancy agreements.

## Contributions

### Yixuan Li 
was responsible for crafting and executing the layout and design of the sidebar and dashboard pages. Moreover, she played a crucial role in conceptualizing and integrating calendar/reminder components into the dashboard and also led the design of the logo, seamlessly incorporating it into the overall page aesthetics. In addition, she made efforts to establish a connection between MongoDB and the endpoint for workers, also she successfully developed an Image Uploader component which was used throughout the app.

### Helena Xu 
was responsible for most of the backend setup and integration of external libraries together, including setting up MongoDB to connect with the Express.js endpoints, configuring an AWS instance and integrating it with the backend, as well as deploying the production-ready code. She also linked the Image Uploader functionality with the backend to upload to the AWS instance and handled much of the operations involving the property home page and tenant's home page. 

### Nicholas Luong 
handled most operations involving tenant information such as creating tenants, adding/editing information of tenants, and connecting these operations to the backend. He also contributed to spotting and fixing bugs found in the Input Form component which was used as a template for all adding/editing operations.

### Zichao Zhou 
took charge of the workers' page, overseeing both the frontend and backend aspects. His responsibilities encompassed tasks such as creating listings, displaying details, enabling additions, modifications, and deletions. He also played a role in creating the tenants' listing feature. 

### Ryan Xu
contributed in designing and implementing key elements such as the login module, homepage banner, and weather component. Spearheaded the creation of dynamic listing pages for properties and tenants, incorporating versatile filtering functionality. Worked on crafting a universal input form adaptable for data entry and edits across diverse categories. Also worked on enabling seamless integration of CRUD operations for property management, complemented by a user-friendly loading interface during API interactions. Additionally, approached and encompassed UI analysis and standardization, bug resolution, and optimization of reusable components, fostering a polished application experience while actively engaging in feature discussions and design finalizations with the team.


## Pick 2 of your minimal requirements and break each of them down into ~2-5 smaller tasks!

- ### User can add a property that they are managing
  - design the classes that will hold the property information
  - implement a way to persist the added data into the DB
  - design the user interface for adding a property
- ### User can add a tenant to a property they are managing
  - design the classes that will hold the tenant information
  - implement a way to persist the added data into the DB
  - design the user interface for adding a tenant to a property

## Prototypes sketches

##### L.H.S. are two forms that users can fill in to add properties or tenants to the database

##### R.H.S. is an overview page of a property and users can make changes to existing property

![image](https://github.com/ryanzhxu/estate-flow/assets/47293037/5a2f3225-cf4c-4f85-aa1f-f62e307747b0)
