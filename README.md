# TypeScript Boilerplate for Backend Service

That project try to group all best practices I know related to create a full typescript project for backend. The idea of this project is use it like a boilerplate and avoid to repeat all the time the same boring activities.

### Features
- Controller Decorator aproach
    - OpenAPI
- Other layers
    - TypeORM
    - Validation
- Testing ( Jest )
    - Unit/Integration
    - Mocking
- CI
    - DockerFile
    - docker-compose.yml
- DEV tools
    - ESLint
    - Logger ( pino )
    - Configuration by ENV


## How Launch?

- Using NPM:

- Using docker:


## Folder Structure

```
+-- tsoa
|   +-- ioc.ts                       // Tysringe and TSOA configuration
|   +-- routes
|   |   +-- routes.ts                // Routes defined by TSOA
|   |   +-- swagger.json             // OpenAPI definition of service
+-- src
|   +-- index.ts                     // Entrypoint
|   +-- controllers                  // HTTP Controllers
|       +-- OpenApiController 
|   +-- servers                      // Infraestructure servers Http, Mqtt...
|       +-- HttpServer             
+-- test
|   +-- unit                         // Unitary Testing
|   +-- integration                  // Integration Testing 
+-- config
|   +-- default.json                 // Default configuration file
|   +-- custom-environment-variables // Enviroment varible configuration file
+-- package.json
+-- tsoa.json                        // TSOA General Configuration
```