## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## What Is Nest Js

Nest Js Is a framework for building efficient and scalable Node js server side applications. It uses Progressive Javascript, is built with Typescript fully supported and enables the use of elements of OOp, functional programming and functional reactive programming.

## Internally Nest uses a Powerful HTTP server framework like Express (Default) and can optionally be configured to use Fastify.

Nest Prvides a level of abstration on top of these common Node.js framework (Express/Fastify) but exposes the API directly to developers. This gives developers the freedom to use the numerous third-party modules avaliable on the underlying platform.

The Nest Architecture is heavily inssired by Angular.

## Create a Module

nest g module name

After runnig this a module folde file is created and imported automatically to app.module.ts file.

## Controller

This is defined by decorating a class with the @Contolller decorators

Decorators take argumennts as "Paths" that are processed by the controlller.

## Handlers

Are Simple methods within contorller classes decorated with decorators eg @Get @Put @Post

## Create Board controller

nest g controller boards --no-spec

After runnig this a controller folder file is created and imported automatically to app.module.ts file.

## provider

Provider is a fundamental concept in Nest. Most of the base Nest classes can be treated as provider, such as services, repositories, factories and helper. The main idea of the provider is that it can be injected as a dependency. This means that objects can create many different relationship with each other and mostof the ability to connect instances of object can be delegated to nest runtime system.

## Service

Service this is a common concept in software development, and is not a concept used only iin Nest js and javascript.

It is wrapped with the @injectable decorator and provided to module, and this service instance can be used throughout the application.

The service handles tasks such s valudating data in the controller or creating items in the database

## How to use a Services

nest -g service boards --no-spec

To make the service avaliable to controller we use dependecy injection.

## registering a Provider

## Defining Model for the Modules..

In order to define what data is required for oour module, we are to create a model to save data.

Creatin Model.
We can use CLASS or INTERFACE..

`Interface` -- Only the type of the variable is checked

`class` -- You can check the type of a varibale and crete an instance as well.

## Create a Board

in express we use the bodyparser to access the body

But in nest we use the @Body decorator

```
//Example 1
//Have access all the body req at once
    @Post()
    createdBoard(@Body() body) {
        console.log("body, body);
    }

//Example 2
//Have access the body req at once you call them
@Post()
createdBoard(
    @Body("title") tile: string,
    @Body("description) description: string
) {
    console.log("title", title)
    console.log("description", description)
}

```

Create get and post method in the service and inject in controllers

## Data Transfer Object (DTO)

Vata transfet Object is an `object for exchanging data between layers`.

It is an object used to get data from DB and send it to service or Controller.

A DTO is an object that defines how data is transmitted over a network. It can be defined using an interface or class (However Nest recommends Using Class...)

Why use Data ransfer Objects DTO?

- efficient in checking data validity
- makes the code more stable. it is also used as a type in Typescript.

## Where DTO Comes in Handy

The properties for our module (board) are used in several places.

Since we are creating a simple app here we only need to call a few properties and call them in only a few places. But what if you have so many properties, and need to use them in many places and suddenly the property name changes in one place.

Then you have to change the same property everwhere that it used.

This can make the application hard to maintain.

This is the case where DDTO can solve the problem..

Interface vs Class for DTO.

## Creating DTO Folder

Classes are more usefyl in creating DTO when it comes to taking
advantage of features like pipes because
they work at runtime differently

## What Are Pipes

A pip is a class annotated with @Injectable decorator.
Pipe are used for data transformation and data validation.

Pipes operate on arguments processed by controller route handlers.

Nest Insers pipe just before the method is called, and the pipe receives and operates on arguments to

### Data transformation?

Convert input data to desired formate (eg from string to integer)

For Example If you want to reciev a number and it comes in a string the pipe would convert it for you `String to Integer`

### Data Validation?

Evaluate input data and pass it unchanged if the value is valid. Otherwise raise an exception when the data is invalid...

Use PIPE

### Different Method Of Applying Pipes

- Handler level pipes:
  This can be done at the handler level by using the @UsePipes() decorator. This pipe applies to all parameters. (title, description)

```
@Post()
@UsePipes(pipe)
createBoard(
  @Body("title) title,
  @Body("description") description
){}
```

- Parameter level pipes
  This is a parameter level pipe, It applies only to the parameter it is assigned to. In the case below the parameter applies only to title.

```
@Post()
createBoard(
   @Body("title", ParameterPipe) title,
  @Body("description") description
){}
```

- Global pipes
  This pipe, is an application-level pipe. It applies to all incoming requests from client. Just put it in the main.ts file function.

```
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(GlobalPipes)
  await app.listen(3000);
}
bootstrap();
```

There are also 6 built-in pipes in Nest JS

- ValidationPipe
- ParseIntPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- DefaultValuePipe

### Use Pipe

npm i class-validator class-transformer --save

### Creating Custom Pipes

### Connect Database

Using Postgres -- TypeORM.

npm install pg typeorm @nestjs/typeorm --save

Connection to Postgres

- Create a config folder --> `typeorm.config.ts` file

Connect DB to Module

- Import to `typeorm.config.ts` file in to the `app.module.ts`

Create Entity

- Create Entity Folder --> `board.entity.ts` file

Why We Need Entity

```
CREATE TABLE board(
  id INTEGER AUTO INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL
)
```

To create a Table like the above. We can do it with easy using TypeORM. In TypeORM it is a class that is converted to a database table, so instead of doing the above, creating a class and define columns and where the class is the table.

`@Entity(): ` The Entity() decorator class is used to indicate that the Board class is an entity. This part that CREATE TABLE board.

`@PrimaryGeneratedColumn(): ` This decorator class is used to indicate that the id column is the primary key column of the Board entity.

`@Column(): ` This decorator class is used to represent other columns such as title and description of the Board entity.

The Entity class Board is created And TypeORM automatically creates a Table corresponding to the Board entity in the our Database with a name board...

## Next Creating A Repository

Repository works with entity objects.
It handles finding, inserting, updating, deleting entities and more...

##### Image....

Manipulation (INSERT, FIND, DELETE) On database can be done in the Repository, Not in the Service.
This convetion is called `Repository Pattern`

- Create a repository folder --> `board.repository.ts` file

- In other to use Repository created in other files (Injectable). Import the repository into board.module.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
