module.exports = {
  globDirectory: 'build/',  // Le dossier où vos fichiers de l'application sont générés (généralement "build" ou "dist")
  globPatterns: [
    '**/*.{html,js,css,png,jpg,svg,woff,woff2,eot,ttf,otf}'
  ],
  swDest: 'build/service-worker.js',  // Où le service worker sera généré
  swSrc: 'src/service-worker.js',    // Le fichier source de votre service worker (le fichier que vous avez créé)
};
