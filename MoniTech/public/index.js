const fs = require("fs");

const templateCardSetup = fs.readFileSync(`${__dirname}/templates/card-setup.html`, 'utf-8');
const dashboardSSetup = fs.readFileSync(`${__dirname}/dashboard-setups.html`, 'utf-8');

const replaceTemplate = function () {
    for (let i = 0; i < 4; i++) {
        const output = templateOverview.replace("{%LISTA%}", cardsHtml);
    }
}