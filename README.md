## Z-Prefix CRUD Application

<br/>


## Overview
&emsp; This repository holds my submission for the Z-Prefix CRUD App

## Installation
- Ensure docker is installed on your machine. 
- Once in VS Code, open two terminals so you can run the following commands in each
- Run "npm start" in the root directory of one of the two folders. 
        - this is going to install node_modules in both the back-end and inventory folders
        - this will also create a docker container
-After all the processing is done and you're able to type in the terminal again, run "npm create_db"
        - this is going to create the database in which the knexfile.js connects to
        - this will also start the backend server
-After the back-end server is running, go into the other termainal and run "cd inventory"
        - this will bring you into the 'inventory' directory
-Once in the 'inventory' directory, run "npm start"
        - this will start the React app and you should be able to navigate to your brower and see the web app
        

## Description
You will automatically be navigated to the home page of the CRUD app. Anyone who is not an inventory manager is by default a 'visitor'. A vistor can view all items created by inventory managers, but visitors cannot edit or delete anything. There is a signup option for visitors to create an account. Once an account is created, the new inventory manager can begin to add items. The added items will automatically be added to the home screen for other visitors to view. The inventory manages has options to edit their own items and delete their own items. Inventory managers can also edit their own information. 


## PS
- There is a default user with the login credentials:
        - Username: Admin
        - Password: 1

## Developers
- Brandon Roques
        

<br/>