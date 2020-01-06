import { Router } from "express";

const router = Router();

router.get("/about", (req, res) => {
    res.json({ 
        name: "Maxim", 
        lastName: "Pozhydaiev", 
        title: "Web Developer", 
        social: [
            {classes: "fab fa-facebook-square", name: "Facebook", url: "http://facebook.com"},
            {classes: "fab fa-github-square", name: "Github", url: "http://github.com"},
            {classes: "fab fa-linkedin", name: "Linkedin", url: "http://linkedin.com"},
            {classes: "fab fa-codepen", name: "Codepen", url: "http://codepen.com"},
            {classes: "fab fa-twitter-square", name: "Twitter", url: "http://codepen.com"}
        ], 
        contacts: [], 
        summary: "Lorem", 
        avatar: "avatar.jpg" 
    });
});

module.exports = router;
