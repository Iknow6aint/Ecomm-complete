const router = require("express").Router();
const stripe = require("stripe")('sk_test_51LLbeoLFtkAJ3WBRqutJsSiSnsnp72DEPvaHXl5W3u7bBiiengHQkzBdU3ok5lgqwRJfub1dAbuu2I7USjXj7OnG00PHeDgwtN' || process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
                console.log(stripeErr)
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;
