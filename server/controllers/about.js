export const getAbout = (req, res) => {
  res.json({
    name: "Maxim",
    lastName: "Pozhydaiev",
    title: "Web Developer",
    social: [
      {
        id: 1,
        classes: "fab fa-facebook-square",
        name: "Facebook",
        url: "http://facebook.com"
      },
      {
        id: 2,
        classes: "fab fa-github-square",
        name: "Github",
        url: "http://github.com"
      },
      {
        id: 3,
        classes: "fab fa-linkedin",
        name: "Linkedin",
        url: "http://linkedin.com"
      },
      { id: 4, classes: "fab fa-codepen", name: "Codepen", url: "http://codepen.com" },
      {
        id: 5,
        classes: "fab fa-twitter-square",
        name: "Twitter",
        url: "http://codepen.com"
      }
    ],
    contacts: [
      { id: 1, classes: "fas fa-phone", value: "+380507723169", type: "text" },
      {
        id: 2,
        classes: "fas fa-envelope",
        value: "pogidaevmo@gmail.com",
        type: "link"
      },
      { id: 3, classes: "fab fa-skype", value: "pogidaev_mo", type: "text" }
    ],
    summary: "Lorem",
    avatar: "avatar.jpg"
  });
};
