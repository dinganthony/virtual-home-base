new TypeIt("#typeit", {
    speed: 25,
    cursor: false,
    strings: ["Hi! I'm Anthony Ding, a software engineer at Amazon based in Seattle. I recently graduated from UC Berkeley, where I studied Electrical Engineering and Computer Science.<br/>",
              "Let's get in touch:"
    ],
    afterComplete: async () => {
        document.getElementById("hide").style.display = "inline-block";
    }
}).pause(500).go();