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