const riddlrLogo = require('./riddlrLogoTemplate.js');

module.exports = ({riddle, riddlePath, hostName, imageLink }) => {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
        <title>Riddlr</title>
      </head>
      <body>
        <div class="container">
          <header>
            <div class="header">
              ${riddlrLogo()}
            </div>
          </header>
    
          <div class="flex-container">

            <div class="flex-container--column half">
                <div>Here's your QR code</div>
                <div class="greeting-card">
                    <div style="color: white"> 
                      <img src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://${hostName}/riddle/${riddlePath}" /> 
                      <div class="url">https://${hostName}/riddle/${riddlePath}</div>
                    </div>
                </div>
                <div class="greeting-card">
                    <div class="message">${riddle}</div>
                    ${imageLink ? '<img style="width: 100%;" src="' + imageLink + '" />' : ''}
                </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    
    `
}