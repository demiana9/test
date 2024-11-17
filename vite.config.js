import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/white-rose/" ,

 server:{
 port:3000,

  proxy:{
   '/api':{
     target:'http://localhost:8000/',
     changeOrigin: true,
     pathRewrite: {
        '^/api': ''
      }
    //  rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
},
});


// // server:{
//   proxy:{
//     '/api':'http://localhost:8000'
//   }
// }