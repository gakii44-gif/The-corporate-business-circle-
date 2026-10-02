import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function photoUploadPlugin() {
  return {
    name: 'photo-upload-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/upload-dignitary-photo', (req: any, res: any) => {
        if (req.method === 'POST') {
          const urlParams = new URL(req.url, 'http://localhost').searchParams;
          const target = urlParams.get('target') || 'allah-jabu';
          
          const chunks: any[] = [];
          req.on('data', (chunk: any) => chunks.push(chunk));
          req.on('end', () => {
            try {
              const buffer = Buffer.concat(chunks);
              const targetDir = path.resolve(__dirname, 'public/assets/dignitaries');
              if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
              }
              const ext = target === 'broadcast-video' ? '.mp4' : '.jpg';
              const filePath = path.join(targetDir, `${target}${ext}`);
              fs.writeFileSync(filePath, buffer);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, path: `/assets/dignitaries/${target}${ext}?t=${Date.now()}` }));
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
        } else {
          res.writeHead(405);
          res.end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
