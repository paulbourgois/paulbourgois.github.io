#!/usr/bin/env node

/**
 * Script pour déployer sur GitHub Pages en contournant les problèmes de sous-modules
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Configuration
const distFolder = path.join(__dirname, 'dist');
const ghPagesModule = path.join(__dirname, 'node_modules', '.cache', 'gh-pages');

// Supprimer le cache gh-pages s'il existe
if (fs.existsSync(ghPagesModule)) {
  console.log('Suppression du cache gh-pages...');
  fs.rmSync(ghPagesModule, { recursive: true, force: true });
}

// Construire le projet
console.log('Construction du projet...');
execSync('npm run build', { stdio: 'inherit' });

// Déployer avec gh-pages
console.log('Déploiement sur GitHub Pages...');
try {
  execSync(
    'npx gh-pages -d dist --no-history --dotfiles --repo https://github.com/paulbourgois/paulbourgois.github.io.git', 
    { stdio: 'inherit' }
  );
  console.log('Déploiement réussi!');
} catch (error) {
  console.error('Erreur lors du déploiement:', error.message);
  process.exit(1);
}
