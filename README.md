<a name="readme-top"></a>
<div align="center">

  <h1>GA SEI - Project 2</h1>
  
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#taco-about-the-project">About The Project</a>
      <ul>
        <li><a href="#toolbox-built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#star2-getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#camera-screenshots">Screenshots</a></li>
    <li><a href="#compass-a-link-to-the-deployed-live-site">Live Site</a></li>
    <li><a href="#wave-approach-taken">Approach Taken</a></li>
    <li><a href="#space_invader-technologies-used">Technologies Used</a></li>
    <li><a href="#camera-wire-frames">Wire Frames</a></li>
    <li><a href="#camera-wire-frames">ERDs</a></li>
    <li><a href="#book-route-table">Route Table</a></li>
    <li><a href="#mirror-post-project-reflection">Post-Project Reflection</a></li>
    <li><a href="#information_source-sources-used">Sources Used</a></li>  
    
    

  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## :taco: About The Project

A simple web application dedicated to order tacos , customer can place an order , track the order on real time and refer back to the history of the orders made . Restaurant gets a list of orders , post updates to the order status and all is synced on real time notification.  

## :toolbox: Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* <a href="https://nodejs.org"><img height=34 src="https://raw.githubusercontent.com/caiogondim/javascript-server-side-logos/master/node.js/standard/454x128.png">
* <a href="https://tailwindcss.com/"><img height=34 src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"> Tailwind Css</a>
* <a href="https://socket.io/"><img height=34 src="https://socket.io/images/logo.svg"> Socket.IO</a>
* <a href="https://www.postgresql.org/"><img height=34 src="https://wiki.postgresql.org/images/3/30/PostgreSQL_logo.3colors.120x120.png"> PostgreSQL</a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

  
## :star2: Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.Clone the project

git clone https://github.com/FuadAlShuroogi/Project-2---Tacos-App.git

2.Go to the project directory

  cd Project-2---Tacos-App

3.Install dependencies

  npm install
  
4.To run this project, you will need to add the following environment variables to your .env file

`SECRET="TEST"
  
5.Migrate the DB by running following command :- 
  
 sequelize db:migrate

6.Start the server

  npm start
  
7. You can register yourself as a customer . 
  
8. For restaurant you can use the following credientials:-
  
  email address - restaurant@gmail.com
  
  password - test1234
  
And then try ordering some tacos 🌮 

<p align="right">(<a href="#readme-top">back to top</a>)</p>
  
## :camera: Screenshots

<div align="center"> 
  
**Home Pages**

<img width="1440" alt="Screen Shot 2022-11-07 at 9 43 44 AM" src="https://user-images.githubusercontent.com/31391274/200254352-933b383f-5878-4614-b70e-662ef49004eb.png">

<img width="1440" alt="Screen Shot 2022-11-07 at 9 48 30 AM" src="https://user-images.githubusercontent.com/31391274/200254617-4bbda3e7-b12f-4e61-b896-3294e21b35bd.png">

**Sign Up**
<img width="1440" alt="Screen Shot 2022-11-07 at 9 44 16 AM" src="https://user-images.githubusercontent.com/31391274/200254653-55a6c4b6-cf18-4969-8d5f-15bfd5f620b0.png">

**Login**
<img width="1440" alt="Screen Shot 2022-11-07 at 9 44 26 AM" src="https://user-images.githubusercontent.com/31391274/200254734-d432a64e-45ab-4881-9934-3635816004fe.png">

<img width="1440" alt="Screen Shot 2022-11-07 at 9 44 42 AM" src="https://user-images.githubusercontent.com/31391274/200254786-742c41dd-394c-4b90-9e23-980720dbdc90.png">

**Menu List**
<img width="1440" alt="Screen Shot 2022-11-07 at 9 44 54 AM" src="https://user-images.githubusercontent.com/31391274/200254863-fb97b0ab-7d38-4bfd-ac50-5dca4074ec53.png">

**Customer Order List**
<img width="1440" alt="Screen Shot 2022-11-07 at 9 47 11 AM" src="https://user-images.githubusercontent.com/31391274/200254920-f591d861-5f75-48bb-b3c0-1036d2f2d836.png">

**Cart Order Summary List**
<img width="1439" alt="Screen Shot 2022-11-07 at 9 47 47 AM" src="https://user-images.githubusercontent.com/31391274/200255041-f63273ab-f81e-4c56-a65f-8d834cfe2545.png">

**Empty Cart List**
<img width="1440" alt="Screen Shot 2022-11-07 at 9 47 28 AM" src="https://user-images.githubusercontent.com/31391274/200255017-f1576bef-cbdd-46db-b1ca-8afd973406b5.png">

**Restaurant Screens**
<img width="1440" alt="Screen Shot 2022-11-07 at 10 00 54 AM" src="https://user-images.githubusercontent.com/31391274/200255210-ecc650a1-3627-4e95-b4a0-770876f8b7f0.png">

<img width="1438" alt="Screen Shot 2022-11-07 at 10 02 37 AM" src="https://user-images.githubusercontent.com/31391274/200255240-79ffa4cb-1316-4197-989b-7620858d8f38.png">
  
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## :compass: A link to the deployed live site

* [X] Coming soon!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## :wave: Approach taken
  
1.Pseudocode .

2.ERDS.

3.Wireframes.

4.User stories .


<p align="right">(<a href="#readme-top">back to top</a>)</p>




### :space_invader: Technologies Used

<details>
  <summary>Client</summary>
  <ul>
    <li> HTML/EJS/Express-ejs-layouts </li>
    <li> CSS /TailwindCSS </li>
    <li> JS </li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://socket.io/">SocketIO</a></li>
    <li>Sequelize</li>    
    <li>Express-Session /Cookie Parser</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### :camera: Wire Frames

<div align="center"> 

![Wireframes](https://user-images.githubusercontent.com/31391274/200259676-e9158e70-fbb8-419f-97be-8cabd38674d3.jpg)
  
![Wireframes 1](https://user-images.githubusercontent.com/31391274/200259993-416e77e7-9f87-480e-b72a-fb2ed14b10a4.jpg)

 <p align="right">(<a href="#readme-top">back to top</a>)</p>

 </div>

---
<!-- Screenshots -->
### :camera: ERDs

<div align="center"> 
    
![IMG_8119](https://user-images.githubusercontent.com/31391274/200260983-00ab909b-dadf-4135-b9db-48fa202cfb6c.jpg)
  
 <p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

---
## :book: Route Table
Routing Chart :-

Note: All routes are authenticated and restricted with roles and results for a particular user.

Route | Method | Response
------|---------|-----
`/` | get | renders the home page
`/register` | get |  renders the register sigup page
`/login` | get | renders the login page
`/users/login` | post | responds with login page
`/logout` | post | deletes the session , setting the logged in to false , clearing user id cookies and redirecting to main home page .
`/customer/orders` | post | creates an order and renders the order list page of the logged in user .
`/customer/orders` | get | gets the order list .
`/customer/orders/:id` | get | displays the track order page which contains the statuses of the orders .
`/cart/delete-cart` | post | deletes the cart from session ، updates the total amount and total quantity along with the cart item indicator . 
`/cart/update-cart` | post | creates cart session , maintaining qty and total amount .
`/menu` | get | fetches menu items from database .
`/restaurant/orders` | get | fetches all uncompleted order list .
`/restaurant/orders/status` | post | updates the order status .
`/restaurant/orders/:orderId` | delete | delets the order from DB and render the updated order list .

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## :mirror: Post-Project Reflection
Prior the day presenting the project everything was working fine , i did a small change which dragged to more changes and i've ended with breaking some functionality , this was a lesson i learned that to always take a back up and commiting frequently .

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
## :information_source: Sources Used
  1.Google-fu

  2.Stack overflow 

  3.W3 schools & developer mozilla

<p align="right">(<a href="#readme-top">back to top</a>)</p>
