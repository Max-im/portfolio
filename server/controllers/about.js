export const getAbout = (req, res) => {
  res.json({
    name: "Maxim",
    lastName: "Pozhydaiev",
    title: "Web Developer",
    social: [
      {
        classes: "fab fa-facebook-square",
        name: "Facebook",
        url: "http://facebook.com"
      },
      {
        classes: "fab fa-github-square",
        name: "Github",
        url: "http://github.com"
      },
      {
        classes: "fab fa-linkedin",
        name: "Linkedin",
        url: "http://linkedin.com"
      },
      { classes: "fab fa-codepen", name: "Codepen", url: "http://codepen.com" },
      {
        classes: "fab fa-twitter-square",
        name: "Twitter",
        url: "http://codepen.com"
      }
    ],
    contacts: [
      { classes: "fas fa-phone", value: "+380507723169", type: "text" },
      {
        classes: "fas fa-envelope",
        value: "pogidaevmo@gmail.com",
        type: "link"
      },
      { classes: "fab fa-skype", value: "pogidaev_mo", type: "text" }
    ],
    summary: "Lorem",
    avatar: "avatar.jpg"
  });
};
