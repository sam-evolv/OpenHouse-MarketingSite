const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/download/static') {
    const FILE_PATH = './OpenHouseAI-static.zip';
    const stat = fs.statSync(FILE_PATH);
    
    res.writeHead(200, {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="OpenHouseAI-static.zip"',
      'Content-Length': stat.size
    });
    
    const readStream = fs.createReadStream(FILE_PATH);
    readStream.pipe(res);
    
    console.log('📥 Static export download started (0.9 MB)');
  } else if (req.url === '/download/full') {
    const FILE_PATH = './OpenHouseAI-netlify.zip';
    const stat = fs.statSync(FILE_PATH);
    
    res.writeHead(200, {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="OpenHouseAI-netlify.zip"',
      'Content-Length': stat.size
    });
    
    const readStream = fs.createReadStream(FILE_PATH);
    readStream.pipe(res);
    
    console.log('📥 Full SSR build download started (124 MB)');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Download OpenHouseAI</title>
        <style>
          body { font-family: system-ui; max-width: 800px; margin: 50px auto; padding: 20px; background: #0A0A0A; color: #fff; }
          h1 { color: #F6C56E; text-align: center; margin-bottom: 10px; }
          .subtitle { text-align: center; color: #999; margin-bottom: 40px; }
          .packages { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; }
          .package { background: #1a1a1a; padding: 25px; border-radius: 12px; border: 2px solid #333; }
          .package:hover { border-color: #F6C56E; }
          .package h2 { color: #F6C56E; margin-top: 0; font-size: 20px; }
          .package .size { font-size: 24px; font-weight: bold; color: #fff; margin: 10px 0; }
          .package .desc { color: #999; font-size: 14px; line-height: 1.6; margin: 15px 0; }
          .package ul { text-align: left; color: #ccc; font-size: 13px; line-height: 1.8; }
          .btn { display: block; padding: 12px 24px; background: #F6C56E; color: #0A0A0A; 
                 text-decoration: none; border-radius: 8px; font-weight: bold; text-align: center; margin-top: 15px; }
          .btn:hover { background: #E5B45D; }
          .recommended { position: relative; }
          .recommended::before { content: "⭐ RECOMMENDED"; position: absolute; top: -10px; right: 10px; 
                                background: #F6C56E; color: #0A0A0A; padding: 4px 12px; border-radius: 4px; 
                                font-size: 11px; font-weight: bold; }
          .footer { text-align: center; margin-top: 40px; color: #666; font-size: 14px; }
          .footer a { color: #F6C56E; text-decoration: none; }
        </style>
      </head>
      <body>
        <h1>🚀 OpenHouseAI Deployment Packages</h1>
        <p class="subtitle">Choose the deployment option that fits your needs</p>
        
        <div class="packages">
          <div class="package recommended">
            <h2>📦 Static Export</h2>
            <div class="size">0.9 MB</div>
            <p class="desc">Pure static HTML/CSS/JS - Perfect for Netlify Drop</p>
            <ul>
              ✅ Fastest deployment<br>
              ✅ No server required<br>
              ✅ Works on any CDN<br>
              ✅ Smallest file size<br>
              ✅ Instant page loads
            </ul>
            <a href="/download/static" class="btn">Download Static</a>
          </div>
          
          <div class="package">
            <h2>⚙️ Full SSR Build</h2>
            <div class="size">124 MB</div>
            <p class="desc">Server-side rendering with Next.js functions</p>
            <ul>
              ✅ Dynamic routing<br>
              ✅ API routes<br>
              ✅ Server components<br>
              ✅ Image optimization<br>
              ⚠️ Requires Netlify plugin
            </ul>
            <a href="/download/full" class="btn">Download Full</a>
          </div>
        </div>
        
        <div class="footer">
          <p>After downloading, upload to <a href="https://app.netlify.com/drop" target="_blank">app.netlify.com/drop</a></p>
          <p style="margin-top: 20px; font-size: 12px;">Both packages are production-ready and fully optimized</p>
        </div>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Download server running on port ${PORT}`);
  console.log(`📥 Open the webview to download your file`);
});
