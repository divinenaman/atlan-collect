# Atlan Backend Challenge

## High Level Design

The main focus of this design specification is scalability, fail-safety and efficiency.

Components:

- Gateway: A common entry point for application for all types of usecases.
- Queue: Implementing a queue allows us to fail proof the system. While a user sends a form response to the server, the request is sent to the queue. The queue calls the appropriate API's to handle the user data and allows eventual consistency while fail-proofing the system.
- Services: Using a microservice architecture allows us to decouple the system into single-responsibility modules like logging and netric services.


![](/doc/high_level_design.png)


## Low Level Design

Clean Architecture can be used to implement a plug and play system. This architecture refactors our code into smaller modules, and only dependency within each module goes from higher to lower. Any change within lower level modules, will not affect the higher level modules (assuming interfaces and responses remain same). Such that this allows flexibility and extensibility.

Components:

- database: module that handle excution of database queries and returns the result to above layer.

- repository: module that calls specified functions in the lower database layer and covert the result in a generic format, also allows caching.

- usecases: actual business logic required by an application.

- controllers: module that receives API request in REST format and parses the user data to call speficic usecases.

![](/doc/low_level_design.png)


## Design Choices

- Models


The Schamatic representation of forms can be as described below. A form is always assigned an organization, a member of the organization who creates a form is the first user with "editor" role in the "users" field below. A user with "editor" role can edit form and similarly add users etc. The "visibility" field allows to set the if the form is public or private. The questions format can be dynamic. The questions response can be of the form multiple-choice and paragraph. More explined below.

![](/doc/formsSchema.png)


Below shows the shematic representation of question responses. There can be two types of responses "multiple-choice" or "text". The "uiElement" field is used to specify the type of ui elment to use on the frontend. Note, "none" is used when the "responseType" is set to "text". Every "responseType" will have atleast one option. The "options" field is an array with a "text" field which can be empty and a flag for user Input, which will be set to true if "responseType" is "text". Other flags include "multiSelect", specifying is multiple selection is allowed and "longText" to specify is user input is short or long.  

![](/doc/questionResponseType.png)

- Google Sheets

Since we need to save the data on an organizations google account, we need to provide an API to convert the form data into a structure acceptable by the google sheets API. On the frontend, the user must be provided with an option to sign-in using oauth into there accounts. The respective API handler will send data in a specific format that will be used to create a spreadsheet using google's provided API.  

