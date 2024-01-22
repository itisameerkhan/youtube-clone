export const randowMessage = () => {
    const names = [
        'John', 'Jane', 'Bob', 'Alice', 'Emily', 'David', 'Michael', 'Jennifer', 'Matthew', 'Sarah',
        'Christopher', 'Lisa', 'Ryan', 'Michelle', 'William', 'Laura', 'Joseph', 'Samantha', 'Nicholas', 'Jessica',
        'Daniel', 'Amanda', 'Anthony', 'Elizabeth', 'Eric', 'Ashley', 'Brian', 'Megan', 'Jason', 'Stephanie'
    ];
    const messages = [
        'This is awesome! ',
        'Wow, I love this! ',
        'Great job! ',
        'Amazing! ✨',
        'Fantastic! ',
        'Superb! ',
        'Brilliant! ✨',
        'Wonderful! ',
        'Cool feature! ',
        'This is amazing! ',
        'I\'m impressed! ',
        'Love it! ❤️',
        'So good! ',
        'Keep it up! ',
        'Nice work! ',
        'Well done! ',
        'Excellent! ',
        'Impressive! ',
        'Top-notch! ',
        'Way to go! ',
        'Wowed! Seamless features, user-friendly, intuitive. Love it!',
        'Game-changer! Efficient, streamlined, saves time. ',
        'Attention to detail! Beautiful design, thoughtful creation. ✨',
        'Exactly what I need! Solves problems, simplifies life. Thanks!',
        'Functional powerhouse! Everything I need & more. Can\'t wait to explore!',
        'Innovative & groundbreaking! Redefining standards. ',
        'Addicted already! Engaging & can\'t stop using it!',
        'Must-have for staying ahead. Cutting-edge & exceptional!',
        'Recommending to everyone! Game-changer & life-saver. ',
        'Essential now! Daily routine, positive impact, increased productivity.'
      ];

    const result = {
            name : names[Math.floor(Math.random() * names.length)],
            message: messages[Math.floor(Math.random() * messages.length)]
    }
    return result;
}