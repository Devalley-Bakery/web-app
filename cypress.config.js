import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', 
    setupNodeEvents(on, config) {
    },
    supportFile: false,
   specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Padrão dos arquivos de teste
  },
  video: false, // Desativa gravação de vídeo (opcional)
  screenshotsFolder: 'cypress/screenshots', // Pasta de capturas de tela
  retries: {
    runMode: 2, 
    openMode: 0, 
  },
  viewportWidth: 1280,
  viewportHeight: 720, 
  env: {
    apiUrl: 'http://localhost:3000/', // Variável de ambiente para URL da API (se necessário)
  },
});
