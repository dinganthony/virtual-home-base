new TypeIt("#typeit", {
    speed: 10,
    cursor: false,
    strings: ["Hi! I'm Anthony Ding, and I'm a software engineer at Integuru, a YC-backed startup building integrations with AI.<br/>",
              "Previously, I worked as a software engineer at Amazon Alexa and did my undergrad at UC Berkeley, majoring in Electrical Engineering and Computer Science.<br/>",
              "Let's get in touch:"
    ],
    afterComplete: async () => {
        document.getElementById("hide").style.display = "inline-block";
    }
}).pause(500).go();
