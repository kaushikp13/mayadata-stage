The source files for mayadata.io website are in this repository.

# Setting Up Mayadata Website

The following procedure allows you to build docker image of mayadata website

-- Git Fork "website-mayadata" and Clone the Forked Repo 
 
```
$git clone https://github.com/"USERNAME"/website-mayadata.git
```

-- Install npm 

```
$cd website-mayadata

$npm install

$npm run build:ssr && npm run serve:ssr
```
