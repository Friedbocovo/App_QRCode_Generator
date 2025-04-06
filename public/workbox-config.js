module.exports = {
    globDirectory: 'build/',  // Le dossier de votre build
    globPatterns: [
      '**/*.{html,js,css,png,jpg}',  // Types de fichiers à inclure dans le cache
    ],
    swDest: 'build/service-worker.js',  // Destination du fichier Service Worker généré
  };
  