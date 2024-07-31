3.npm run build 
4.Subir la carpeta dis a la rama gh-pages
git subtree push --prefix dist origin gh-pages 
5.Despliegue
npm run deploy
Importante intalar antes de todo el proceso el modulo de gh-pages
npm install gh-pages --save-dev