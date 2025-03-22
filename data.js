export let personalities = {
    "angry": 0,
    "what": 0,
    "soldier": 0,
    "singing" : 0,
    "shocked" : 0,
};

export let questions = [
    {
        id:0, // First question
        text: "What is the best way to relax?",
        image: "lil_images/story/relax.png",
        choices: {
            "read a book": ["what", "singing"],
            "play video games": ["soldier", "angry"],
            "go to the beach": ["shocked", "singing"],
            "do absolutely nothing": ["angry", "shocked"]
        }
    },
    {
        id:1,
        text: "What is your favorite color?",
        image: "lil_images/story/rainbow.png",
        choices: {
            "blue": ["singing", "what"],
            "yellow": ["angry", "shocked"],
            "red": ["soldier", "what"],
            "some mixture of the above": ["soldier", "singing"]
        }
    },
    {
        id:2,
        text: "What kind of bread is best?",
        image: "lil_images/story/baked.png",
        choices: {
            "sourdough": ["singing", "shocked"],
            "pizza rolls": ["angry"],
            "bagels": ["soldier", "shocked"],
            "french toast": ["what"]
        }
    },
    {
        id:3,
        text: "would you rather have $200 now, or 20,000 v-bucks in a year?",
        image: "lil_images/story/fortnite.png",
        choices: {
            "$200 now": ["angry", "shocked"],
            "those sweet, sweet v-bucks": ["singing", "what", "soldier"]
        }
    },
    {
        id:4,
        text: "what super power would you choose?",
        image: "lil_images/story/batcat.png",
        choices: {
            "flight": ["singing"],
            "invincibility": ["soldier", "angry"],
            "teleportation": ["shocked"],
            "telekinesis": ["what"]
        }
    },
    {
        id:5,
        text: "do you like dogs?",
        image: "lil_images/story/catdog.png",
        choices: {
            "yes": ["angry"],
            "no": ["soldier", "what", "singing", "shocked"]
        }
    }
];
