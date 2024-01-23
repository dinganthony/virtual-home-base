new TypeIt("#typeit", {
    speed: 10,
    cursor: false,
    strings: ["Hi! I'm Anthony Ding, a software engineer at Amazon, based in Cupertino, CA, USA. I work on enhancing Alexa's contextual understanding so that Amazon customers have a natural and conversational shopping experience.<br/>",
              "Previously, I did my undergrad at UC Berkeley, majoring in Electrical Engineering and Computer Science. At Berkeley, I fell in love with teaching through the <a href='https://csmentors.berkeley.edu/'>Computer Science Mentors</a> project.<br/>",
              "Let's get in touch:"
    ],
    afterComplete: async () => {
        document.getElementById("hide").style.display = "inline-block";
    }
}).pause(500).go();