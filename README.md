# Yaro Task One

The API is made using Node.js, Express.js, Mongoose, MongoDb, Bcrypt.js, JsonWebToken.js.

### List Of API:
1. Registration or Login: - (sign)
    > when api is called with mobile and password in json format then only api works otherwise api gives error as invalid access.

    > If a user mobile number is not registered then user is registered and if the user was previously registered then the user is logged in.

    > If user is not registered then user data is saved in database and before insertion of data in database the password is hashed.

    > The api sends cookie to store authentication token for maintaining session for a user.

    > Example json data : { "mobile" : "9119924860", "password" : "srijan440" }
    > The api sample response is:

    >a. when user is not registered: 
    { "success": true, "message": "registration successful" }
![unregistered user](https://raw.githubusercontent.com/srijan450/images/main/yaro-registration-sucessful-taskOne.png)

    >b. when user is registered : 
    { "success": true, "message": "login successful" }
![login successful](https://raw.githubusercontent.com/srijan450/images/main/yaro-login-successful-taskOne.png)

    >c. when user is registered but enters incorrect password: 
    { "success": false, "message": "incorrect password" }
![incorrect password](https://raw.githubusercontent.com/srijan450/images/main/yaro-login-incorrect-password-taskOne.png)

    > The method is POST and link to API is: https://yaro-task.onrender.com/sign

 

2. The Test-page:-  (test-page)
    > when user is logged in then this api give { "message": "hello form srijan shankar dubey" } as response.
      ![](https://raw.githubusercontent.com/srijan450/images/main/test-page-authenticated-taskOne.png)

    > when user is not logged in then this api give { "message": "please sign in to access this page" } as response.
      ![](https://raw.githubusercontent.com/srijan450/images/main/test-page-unauthenticated-taskOne.png)
    
    >The method is GET and link to API is: https://yaro-task.onrender.com/test-page

3. Sign out: (sign-out)
    > This API is for sign-out purpose.
    > when user is logged in then this api give { "success": true, "message": "sign-out successful" } as response.
       ![](https://raw.githubusercontent.com/srijan450/images/main/sign-out-authenticated-taskOne.png)
    > when user is not logged in then this api give { "message": "please sign in to access this page" } as response.
       ![](https://raw.githubusercontent.com/srijan450/images/main/sign-out-unauthenticated-taskOne.png)
    > The method is POST and link to API is: https://yaro-task.onrender.com/sign-out
