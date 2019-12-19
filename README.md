# moretest

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
```
├── dist 打包后目录
├── node_modules npm install 生成
└── public 打包所需静态资源
    └── favicon.ico 浏览器图标 
└── src
    └── assets 项目静态资源
        ├── logo.png
    ├── components 业务组件
    ├── pages 页面文件
         └── index 单个页面目录
                 └── index.html 单个页面目录
                 └── index.js 单个页面入口 js (相当于 2. 0 的 main.js)
                 └── index.vue 此页面页面组件
    ├── util 配置放置目录
            └── axiosTool.js 请求封装
            └── cssCopy.js 多页面 css 配置文件
            └── getPages.js 多页面 模板 配置文件
            └── htmlReplace.js 多页面 html 生成规则配置文件
            └── jsCopy.js 多页面 js 配置文件
    ├── .gitignore Git提交时忽略配置
    ├── babel.config.js babel配置
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.js
    ├── README.md
    └── vue.config.js
```