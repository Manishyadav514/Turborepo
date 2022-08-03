# Turborepo starter
Turborepo is a build system for monorepos that allows you to have faster builds, content-aware hashing, and remote caching. This repository contains two Next apps that share a common Tailwind configuration. Clone this repository and run "yarn run dev" in the root directory. These applications are accessible on ports 3001 and 3002. Additionally, I built a server workspace that can be accessed on port 4000.

## command

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

7. rename above created project to next-app-1
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

 13. add other eslint dependecies  (eslint-config-custom os name of config in packages)
 ```text
 yarn workspace eslint-config-custom add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jest eslint-plugin-testing-library
 ```

  14. add tailwind config to apps workspace
 ```text
yarn workspace next-app-1 add -D next-transpile-modules
 ```

  15. add config tailwind for shared component tailwind
 ```text
yarn workspace ui add -D tailwind postcss autoprefixer
 ```


