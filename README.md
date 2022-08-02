# Turborepo starter


## command/code

1. create next turborepo
 ```text
 npx create-turbo@latest .
 ```
 
2. skip cache while build
 ```text
 yarn build --force
 ```

 3. build a specific project
 ```text
yarn build --scope=<workspace_name>
 ```

  4. remove directory
 ```text
rm -rf node_modules/ apps/doc apps/web
 ``` 

   5. create next-tailwind project
 ```text
yarn create next-app --example with-tailwindcss with-tailwindcss-app 
 ``` 
  
  6. rename above created project
 ```text
yarn create next-app --example with-tailwindcss with-tailwindcss-app 
 ``` 

7. rename above created project
 ```text
mv with-tailwindcss-app next-app-1
 ``` 

8. remove node_module of 7
 ```text
rm -rf next-app-1/node_modules
 ``` 

9. copy next-app-1 to create another project
 ```text
cp -r next-app-1 next-app-2
 ``` 

 10. cmove apps in workspace
 ```text
mv next-app-1 turborepo/apps
 ``` 

11. add Typescript
 ```text
yarn workspace next-app-1 add -D typescript @types/react @types/node
 ``` 

 12. create server, add Typescript config and nodemon
 ```text
yarn workspace server add -D typescript @types/node nodemon
 ``` 

 13. add to tsconfig/server.json

 ```text
 {
    "$schema": "https://json.schemastore.org/tsconfig",
    "display": "Server",
    "extends": "./base.json",
    "compilerOptions": {
      "module": "commonjs",
      "target": "es6",
      "noEmit": false,
      "sourceMap":true
    }
    
  } 
 ```