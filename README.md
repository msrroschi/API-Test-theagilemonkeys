## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- NodeJS
  ```sh
  sudo apt install nodejs
  ```
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/msrroschi/API-Test-theagilemonkeys.git
   ```
2. Install npm packages
   ```sh
   npm install
   ```
3. Config your enviroment variables in `config.js` or in a `.env` file

4. Start the API
   ```sh
   npm run start
   ```
   <br />

<!-- USAGE EXAMPLES -->

## Usage

List of the endpoints currently available in the API.

### Authentication Endpoints

| METHOD |  ENDPOINT   | TOKEN | ROLE |  BODY / PARAMS  | CONTROLLER |   RETURN    |
| :----: | :---------: | :---: | :--: | :-------------: | :--------: | :---------: |
|  POST  | /api/login  |  NO   |  NO  | email, password |   login    |    token    |
|  POST  | /api/whoami |  YES  |  NO  |      none       |   whoami   | logged user |

### Users Endpoints

| METHOD |        ENDPOINT         | TOKEN | ROLE  |   BODY / PARAMS   |   CONTROLLER   |         RETURN         |
| :----: | :---------------------: | :---: | :---: | :---------------: | :------------: | :--------------------: |
|  GET   |       /api/users        |  YES  | ADMIN |       none        |    getUsers    |   all users (array)    |
|  GET   |   /api/users/:userId    |  YES  | ADMIN | userId (ObjectId) |  getUserById   | specific user (object) |
|  POST  |       /api/users        |  YES  | ADMIN |    userSchema     |   createUser   | created user (object)  |
|  PUT   |   /api/users/:userId    |  YES  | ADMIN | userId (ObjectId) |   updateUser   | updated user (object)  |
|  PUT   | /api/users/:userId/role |  YES  | ADMIN | userId (ObjectId) | updateUserRole | updated user (object)  |
| DELETE |   /api/users/:userId    |  YES  | ADMIN | userId (ObjectId) |   deleteUser   |  confirmation message  |

### Customers Endpoints

| METHOD |            ENDPOINT            | TOKEN | ROLE |     BODY / PARAMS     |    CONTROLLER    |           RETURN           |
| :----: | :----------------------------: | :---: | :--: | :-------------------: | :--------------: | :------------------------: |
|  POST  |         /api/customers         |  YES  |  NO  |    customerSchema     |  createCustomer  | created customer (object)  |
|  GET   |         /api/customers         |  YES  |  NO  |         none          |   getCustomers   |   all customers (array)    |
|  GET   |  /api/customers /:customerId   |  YES  |  NO  | customerId (ObjectId) | getCustomerById  | specific customer (object) |
|  GET   | /api/customers /:photoFileName |  NO   |  NO  |  photoFile (String)   | getCustomerPhoto |     photo file (file)      |
|  PUT   |  /api/customers /:customerId   |  YES  |  NO  | customerId (ObjectId) |  updateCustomer  | updated customer (object)  |
| DELETE |  /api/customers /:customerId   |  YES  |  NO  | customerId (ObjectId) |  deleteCustomer  |    confirmation message    |

<br />

<!-- ROADMAP -->

## Roadmap

I'm workin right now on testing.
<br />

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.
<br />

<!-- CONTACT -->

## Contact

Martin Daniel Schilkowske Robayna - [GitHub](https://github.com/msrroschi) - [LinkedIn](https://www.linkedin.com/in/martin-daniel-schilkowske-robayna/)

Project Link: [https://github.com/msrroschi/API-Test-theagilemonkeys](https://github.com/msrroschi/API-Test-theagilemonkeys)
<br />

<!-- OTHER TECHNOLOGIES -->

## Other Technologies

- [mongoose](https://www.npmjs.com/package/mongoose)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [morgan](https://www.npmjs.com/package/morgan)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcryptjs](https://www.npmjs.com/package/bcrypt)
- [cors](https://www.npmjs.com/package/cors)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [helmet](https://www.npmjs.com/package/helmet)
- [multer](https://www.npmjs.com/package/multer)
