new TypeIt("#typeit", {
    speed: 25,
    cursor: false,
    strings: ["Hi! I'm Anthony Ding, a software engineer and student majoring in <a href='https://eecs.berkeley.edu'>EECS @ UC Berkeley</a>. I love writing, whether it be <a href='projects'>code</a>, <a href='https://nanowrimo.org/participants/anthonyding'>stories</a>, <a href='https://anthony.imprint.to'>blog posts</a>, or <a href='tactical-press'>sports analyses</a>.<br/>",
              "Previously, I interned @ <a href='https://amazon.com'>Amazon</a> and <a href='https://ubtrobot.com/'>UBTECH Robotics</a>, and conducted research @ <a href='https://lbl.gov'>Berkeley Lab</a> under Professor Haichen Wang, developing <a href='https://github.com/xju/root_gnn'>graph neural networks</a> to classify subatomic particle interactions. For more info, check out my <a href='assets/Anthony_Ding.pdf'>resume</a>.<br/>",
              "Let's get in touch:"
    ],
    afterComplete: async () => {
        document.getElementById("hide").style.display = "inline-block";
    }
}).pause(500).go();