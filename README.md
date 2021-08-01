# UofT Bootcamp Group 5 Project 2: WasteAway:
## A fast and accurate waste management system for all your business needs

## Description: 
A product waste managing web application which allows business owners to manage their kitchen waste in order to lower their overhead costs and also decrease their carbon footprint 

## Table of Contents
* [Installation](#installation)
* [License](#license)
* [Usage](#usage)
* [Guidelines](#guidelines)
* [Links](#links)
* [Tools](#tools)
* [Credits](#credits)


## Installation
First, the user must clone the repository from GitHub. Once cloned, the user will open their terminal and `npm install` the dependencies as found in the package.json file (dotenv, express, mysql2, and sequelize). The user will also be required to create an .env file to hide their password.

To connect to the database, the user will run `mysql -u root -p`, then they must ensure the schema.sql file is sourced by running `source db/schema.sql`. Next, the user will quit mysql and open the terminal again. Then seed the file by running `npm run seed` and to connect to the server run `npm start`. From there, the user can test routes with Insomnia Core if they desire to do so.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License](https://choosealicense.com/licenses/mit/)    


## Usage
The application allows the user to store, access, and save quantitative data regarding their product expenses. Business owners can track their restaurant’s inventory with business-specific accounting which ultimately improves the order accuracy and streamline of their budget.  
![screenshotHere]


## Guidelines 
### User Story:
```
AS a Restaurant Owner
I WANT to effectively and efficiently manage my waste
SO THAT I can minimize my overhead cost and maximize profits
```
### Acceptance Test for User Story: 
```
GIVEN a waste management tool
WHEN I sign up/login
THEN I can view the dashboard that will display current waste, inventory cost, etc. 
WHEN I select Inventory on 2nd navigation
THEN I and prompted with a button to create a new inventory
WHEN I select the button “Create Inventory”
THEN I can input all my ingredients, COG, and Quantity
WHEN I select “Finalize Inventory”
THEN the product(s) will be added to the inventory
WHEN I input the EOW inventory and COGS
THEN I will see the waste cost percentage
```


## Links
•	[Heroku Deployment]( https://waste-management-project2.herokuapp.com/)


## Tools
* Node.js
* Express.js
* Handlebars.js
* MySQL and Sequelize ORM
* jQuery
* dotenv


## Credits
Created By:
 * [Lisa Le]( https://github.com/lisahuele)
 * [Kirti Patel]( https://github.com/kirti18patel)
 * [Scott Percy](https://github.com/sdpercy)
 * [Amna Syeda](https://github.com/amnasyeda)



