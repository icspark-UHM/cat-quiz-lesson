export const personalities = {
    "Placeholder": 0, // Empty set
    "Grumpy": 0, // The Analyst
    "Shy": 0, // The Reserved
    "Speedy" : 0, // The Hasty
    "Happy" : 0, // The Connector
};

export const states = [
    {
        id:0, // first "default" state
        text: "Question 1",
        image: "https://placehold.co/500",
        choices: {
            "The lake": ["Grumpy"],
            "12.5 mile hike to the peak of a glorious mountain": ["Speedy"]
        }
    },
    {
        id:1, // section 1A-1
        text: "You and your friends are at the lake. What do you do?",
        image: "https://placehold.co/500",
        choices: {
            "Swim": ["Grumpy"],
            "Fish": ["Placeholder"]
        }
    },
    {
        id:2, // section 1A-2
        text: "OH NO! While swimming, you get attacked by a shark!",
        image: "https://placehold.co/500",
        choices: {
            "SWIM AWAY!!": ["Grumpy"],
            "Fight": ["Placeholder"]
        }
    },
    {
        id:3, // section 1A-2
        text: "OH NO! While fishing, you hook a shark!",
        image: "https://placehold.co/500",
        choices: {
            "Cut the line!": ["Grumpy"],
            "Fight.": ["Placeholder"]
        }
    },
    {
        id:4, // section 1A-3
        text: "After narrowly escaping, all you kitties have had enough of the lake for one day. Where would you like to go next?",
        image: "https://placehold.co/500",
        choices: {
            "Placeholder": ["Grumpy"]
        }
    },
    {
        id:4, // section 1A-3
        text: "After narrowly escaping, all you kitties have had enough of the lake for one day. Where would you like to go next?",
        image: "https://placehold.co/500",
        choices: {
            "Placeholder": ["Placeholder"]
        }
    }
];
