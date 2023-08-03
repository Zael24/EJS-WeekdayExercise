import express from 'express';

const app = express();
const port = 3000;

const d = new Date();
let dayOfWeek = d.getDay();

//dayz = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function getDay(dayz) {
    return dayz === '0' || dayz === 6 ? 'the weekend' : 'a weekday';
}

function getActionType(action) {
    return action === 'the weekend' ? 'have fun' : 'work hard';
}

app.get('/', (req, res) => {
    res.render('index.ejs', {
        day: getDay(dayOfWeek), act: getActionType(getDay())
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  