module.exports = ({riddle, riddlePath, hostName }) => {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/styles.css" />
        <title>Riddler</title>
      </head>
      <body>
        <div class="container">
          <header>
            <h1 class="title">Foos invite</h1>
          </header>
    
          <div class="flex-container">

            <div class="flex-container--column half">
                <div>Here's your QR code</div>
                <div class="greeting-card">
                    <div style="color: white"> 
                      <img src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://${hostName}/riddle/${riddlePath}" /> 
                      <div>https://${hostName}/riddle/${riddlePath}</div>
                    </div>
                </div>
                <div class="greeting-card">
                    <div class="message">${riddle}</div>
                </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    
    `
}