## Z-Prefix CRUD Application

<br/>


## Overview
&emsp; This repository holds my submission for the Z-Prefix CRUB App

## Installation
- Ensure docker is installed on your machine. 
- Once in VS Code, open another terminal so you can run the following commands in each
- Run "npm start" in the root directory of one of the two folders. <br />
        -this is going to install node_modules in both the back-end and inventory folders
        -this will also create a docker container
-After all the processing is done and you're able to type in the terminal again, run "npm create_db"
        -this is going to create the database in which the knexfile.js connects to
        -this will also start the backend server
-After the back-end server is running, go into the other termainal and run "cd inventory"
        -this will bring you into the 'inventory' directory
-Once in the 'inventory' directory, run "npm start"
        -this will start the React app and you should be able to navigate your brower and see the web app
        

## Description
You will automatically be navigated to the home page of the CRUD app. Anyone who is not an inventory manager is by default a 'visitor'. A vistor can view all items created by inventory managers, but visitors cannot edit or delete anything. There is a signup option for visitors to create an account. Once an account is created, the new inventory manager can begin to add items. The added items will automatically be added to the home screen for other visitors to view. The inventory manages has options to edit their own items and delete their own items. Inventory managers can also edit their own information. 

## Usage
From the Home page you can Login, search for equipment, or sign-up if you are a new user
- **Sign Up**
  - This page will have you enter in Name, Base location, Contact information. Each profile requires the user to make a Username and Password so that they may more easily login.
 - **Login**
   - Once you type your Username and Password, you will be sent to your profile page. 
- **My Profile**
   - From here you can check your own inventory, pending transfer and edit your profile. 
   - At **My Info** You can edit your information or delete your profile from the application in the case you are no longer an ITEC.
   - At **My Transfers**, ITECs can view their current Transfers of Equipment and track progress of Transfer. The Progress will be whether or not the transfer is Accepted, Rejected, Pending or Shipped.(not currently implmented)
   - You can update your current transfer and view requests from other users. You may reject or accept them here.
   - At **My Inventory** You can view your current equipment. You can also add additional equipment and add parameters.
- **Search**
  - You are able to search for equipment by Base or by Category of equipment(laptop, router, printer etc.)
  - You are able to select Equipment and request a transfer with a click of a button. The request will(not implmented) auto-generate an email to request the owner of the equipment if they would like transfer it to your custody.

## Database ERD

<p align="center">
  <img width='600' src="img/DB_Schema.PNG">
</p>

<br/>

## Team Members
- Team Lead: Ryan Binkley
- Isaac Pringle
- Madison Yancey
- Brandon Roques
- Ty Hancock

<br/>