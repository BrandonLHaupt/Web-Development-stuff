import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
  let d = new Date();
  let day = d.getDay();

  let type = "a weekday";
  let adv = " It's time to work hard!";

  if (day >= 1 && day <= 5) {
    type = "It's a week day"
    adv = " work hard! You're almost there!"
  } else {
    type = "Its the weekend!"
    adv = " time to party!!"
  }
  //   console.log(day);

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});
