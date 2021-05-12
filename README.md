## This is about node js core basic revision again

### step one 

we had seen how to import like this. If we want to use `import` any file then we msut need to use 

```
type: "module"
```
in the package.json file 

### step two

we have install some of file like:

```
npm install fastify fastify-static // fastify for make a custom server
npm install -g nodmeon // for run my code automatic when save change something new.
```

In this step I have used file system form public folder with `fastify-static`

first we need to import path and url 

```
import {fileURLToPath} from 'url'
import path from "path"
import fastifyStatic from 'fastify-static'
```

after that we need to make a __dirname from `fileURLToPath` like this:

```
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
```

that's it now just need to use this like this way:
make sure app const have from `fastify` server
```
app.register(fastifyStatic, {
    root: path.join(__dirname, 'public')
})
```
that's it, now just need to make a dirname as `public` 
if we make a file name `index.html` inside public folder that's it.

after that we need to run our file system like this:
`http://localhost:2000/index.html`
