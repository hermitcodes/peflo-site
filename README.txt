Peflo Logistics Limited website
================================

HOW TO OPEN IT
1. Extract the zip (right-click the zip, then "Extract All" on Windows; double-click on Mac;
   or run:  unzip peflo-site.zip  on Linux/terminal).
2. Open the extracted folder "peflo-site" and double-click index.html.
   It opens in your browser. You need internet only for the Google Fonts.

OPEN IT IN VS CODE (from the terminal)
   cd peflo-site
   code .

LIVE PREVIEW (optional)
   cd peflo-site
   python3 -m http.server 8000
   then visit http://localhost:8000

WHAT'S IN THE FOLDER
   index.html      Home page
   about.html      About us and team
   services.html   All services
   service.html    Template for each service page (filled from js/script.js)
   projects.html   Projects
   contact.html    Contact and quote request form
   css/style.css   All styling. Colours and fonts are at the top.
   js/script.js    Menu, animation, and ALL editable content

WHAT TO EDIT BEFORE LAUNCH (all in js/script.js)
   SITE        email, phone, office address, social media links
   SERVICES    the five services (starting points - change to match what Peflo really does)
   TEAM        names, roles, short biographies (add a photo with "photo": "images/name.jpg")
   PROJECTS    add finished projects. Leave empty to show a friendly message instead.

LOGO
   Put your logo at images/peflob.jpg (create the "images" folder if needed).
   To use a different file name or path, change SITE.logo in js/script.js.
   The text "PEFLO Logistics Limited" shows next to the logo. To hide it, set showNameBesideLogo to false.
   If the logo file is missing, the site shows a simple built-in "P" mark instead.
