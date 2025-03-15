export const personalities = {
    "angry": 0,
    "orange": 0,
    "thousand": 0,
    "iua" : 0,
    "oop" : 0,
};

export const questions = [
    {
        id:0, // first "default" state
        text: "What is the best way to relax?",
        image: "lil_images/story/relax.png",
        choices: {
            "read a book": ["orange", "iua"],
            "play video games": ["thousand", "angry"],
            "go to the beach": ["oop", "iua"],
            "do absolutely nothing": ["angry", "oop"]
        }
    },
    {
        id:1, // section 1A-1
        text: "What is your favorite color?",
        image: "lil_images/story/rainbow.png",
        choices: {
            "blue": ["iua", "orange"],
            "yellow": ["angry", "oop"],
            "red": ["thousand", "orange"],
            "some mixture of the above": ["thousand", "iua"]
        }
    },
    {
        id:2, // section 1A-2
        text: "What kind of bread is best?",
        image: "lil_images/story/baked.png",
        choices: {
            "sourdough": ["iua", "oop"],
            "pizza rolls": ["angry"],
            "bagels": ["thousand", "oop"],
            "french toast": ["orange"]
        }
    },
    {
        id:3, // section 1A-2
        text: "would you rather have $200 now, or 20,000 v-bucks in a year?",
        image: "lil_images/story/fortnite.png",
        choices: {
            "$200 now": ["angry", "oop"],
            "those sweet, sweet v-bucks": ["iua", "orange", "thousand"]
        }
    },
    {
        id:4, // section 1A-3
        text: "what super power would you choose?",
        image: "lil_images/story/batcat.png",
        choices: {
            "flight": ["iua"],
            "invincibility": ["thousand", "angry"],
            "teleportation": ["oop"],
            "telekinesis": ["orange"]
        }
    },
    {
        id:4, // section 1A-3
        text: "do you like dogs?",
        image: "lil_images/story/catdog.png",
        choices: {
            "yes": ["angry"],
            "no": ["thousand", "orange", "iua", "oop"]
        }
    }
];
