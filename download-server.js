const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const FILE_PATH = './OpenHouseAI-netlify.zip';

const server = http.createServer((req, res) => {
  if (req.url === '/download') {
    const stat = fs.statSync(FILE_PATH);
    
    res.writeHead(200, {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="OpenHouseAI-netlify.zip"',
      'Content-Length': stat.size
    });
    
    const readStream = fs.createReadStream(FILE_PATH);
    readStream.pipe(res);
    
    console.log('📥 Download started...');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Download OpenHouseAI</title>
        <style>
          body { font-family: system-ui; max-width: 600px; margin: 100px auto; padding: 20px; text-align: center; }
          h1 { color: #F6C56E; }
          .btn { display: inline-block; padding: 15px 30px; background: #F6C56E; color: #0A0A0A; 
                 text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; }
          .btn:hover { background: #E5B45D; }
          .info { background: #1a1a1a; padding: 15px; border-radius: 8px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <h1>🚀 OpenHouseAI Deployment Package</h1>
        <div class="info">
          <p><strong>File:</strong> OpenHouseAI-netlify.zip</p>
          <p><strong>Size:</strong> 123.8 MB</p>
          <p><strong>Status:</strong> Ready for Netlify</p>
        </div>
        <a href="/download" class="btn">📦 Download ZIP</a>
        <p style="margin-top: 40px; color: #666;">
          After downloading, upload to <a href="https://app.netlify.com/drop" target="_blank">app.netlify.com/drop</a>
        </p>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Download server running on port ${PORT}`);
  console.log(`📥 Open the webview to download your file`);
});
