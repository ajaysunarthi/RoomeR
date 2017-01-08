## *RoomeR* 

![](screenshots/room.png?raw=true)

> RoomeR is a fictious workplace, where you design rooms.
> In each room you can create your own to-do lists.

- *External libraries used : Angular 1.x for building application and Angular UI Router for routing of app.*
- *Best viewed in Chrome. Although it works in Firefox but you will not be able to see awesome check box transitions in roomCtrl. Because of no pseudo elements on input elements in firefox.*

### Get it working locally
Clone or download this repo. Open git bash or node console. Type following commands.
```sh
$ npm install
$ node index.js
```
Go to the stated address in browser.

### Other
There are few shortcomings as well

- *Rooms with same name get referenced as same. I have used room names as ids so the Angular UI router will reference to the same url*

- *Saves the data to localstorage. As localstorage is string type (key : value) pair storage and our app will be using Array of objects to save data. 
	Because of continous object to string conversion and vice versa and the limit of localstorage on client machine (phone/desktop), it is given that the app will not scale well*.

![](screenshots/1.png?raw=true)
![](screenshots/2.png?raw=true)
![](screenshots/3.png?raw=true)
![](screenshots/4.jpg?raw=true)
![](screenshots/5.png?raw=true)
![](screenshots/6.png?raw=true)
![](screenshots/7.png?raw=true)

