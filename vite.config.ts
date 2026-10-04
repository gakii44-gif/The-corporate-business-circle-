import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function photoUploadPlugin() {
  return {
    name: 'photo-upload-plugin',
    configureServer(server: any) {
      // Dignitary photo upload endpoint
      server.middlewares.use('/api/upload-dignitary-photo', (req: any, res: any) => {
        if (req.method === 'POST') {
          const urlParams = new URL(req.url, 'http://localhost').searchParams;
          const target = urlParams.get('target') || 'allah-jabu';
          const cleanTarget = target.replace(/[^a-zA-Z0-9_-]/g, '');
          
          const chunks: any[] = [];
          req.on('data', (chunk: any) => chunks.push(chunk));
          req.on('end', () => {
            try {
              const buffer = Buffer.concat(chunks);
              const targetDir = path.resolve(__dirname, 'public/assets/dignitaries');
              if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
              }
              const ext = cleanTarget === 'broadcast-video' ? '.mp4' : '.jpg';
              const filePath = path.join(targetDir, `${cleanTarget}${ext}`);
              fs.writeFileSync(filePath, buffer);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, path: `/assets/dignitaries/${cleanTarget}${ext}?t=${Date.now()}` }));
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

      // Secure gallery photo upload endpoint for administrators
      server.middlewares.use('/api/upload-gallery-photo', (req: any, res: any) => {
        if (req.method === 'POST') {
          const urlParams = new URL(req.url, 'http://localhost').searchParams;
          const target = urlParams.get('id') || urlParams.get('target') || 'custom-gallery-photo';
          // Sanitize ID to prevent path traversal
          const cleanId = target.replace(/[^a-zA-Z0-9_-]/g, '');
          
          const chunks: any[] = [];
          let totalBytes = 0;
          const MAX_SIZE = 15 * 1024 * 1024; // 15MB limit

          req.on('data', (chunk: any) => {
            totalBytes += chunk.length;
            if (totalBytes > MAX_SIZE) {
              res.writeHead(413, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: 'File size exceeds 15MB limit' }));
              req.destroy();
              return;
            }
            chunks.push(chunk);
          });

          req.on('end', () => {
            if (totalBytes > MAX_SIZE) return;
            try {
              const buffer = Buffer.concat(chunks);
              // Basic header check for image safety
              let ext = '.jpg';
              if (buffer.length >= 4) {
                // PNG magic bytes: 89 50 4E 47
                if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
                  ext = '.png';
                }
                // WebP magic: 'RIFF'....'WEBP'
                else if (buffer.toString('ascii', 0, 4) === 'RIFF') {
                  ext = '.webp';
                }
              }

              const targetDir = path.resolve(__dirname, 'public/assets/gallery');
              if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
              }
              const filePath = path.join(targetDir, `${cleanId}${ext}`);
              fs.writeFileSync(filePath, buffer);

              // If slot also maps to dignitary slot, keep in sync
              if (['taban-deng-gai', 'allah-jabu', 'mgurush-launch', 'wani-igga'].includes(cleanId)) {
                const dignitaryDir = path.resolve(__dirname, 'public/assets/dignitaries');
                if (!fs.existsSync(dignitaryDir)) {
                  fs.mkdirSync(dignitaryDir, { recursive: true });
                }
                fs.writeFileSync(path.join(dignitaryDir, `${cleanId}.jpg`), buffer);
              }

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ 
                success: true, 
                id: cleanId,
                path: `/assets/gallery/${cleanId}${ext}?t=${Date.now()}` 
              }));
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
