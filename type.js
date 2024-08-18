new TypeIt("#typeit", {
    speed: 10,
    cursor: false,
    strings: ["Hi! I'm Anthony Ding, and I'm a Masters student studying Computer Science at Columbia University.<br/>",
              "Previously, I worked as a software engineer at Amazon Alexa and did my undergrad at UC Berkeley.",
              "Let's get in touch:"
    ],
    afterComplete: async () => {
        document.getElementById("hide").style.display = "inline-block";
    }
}).pause(500).go();