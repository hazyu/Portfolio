---
title: Good code does not make games
date: 2026-04-29
completed: true
---

I hear time and time again that you need to keep your code clean to make any kind of large project work. If you have clean code across your codebase then it will be easier for you to finish your project. Sorry to break the news to you but thats a whole load of bullocks. Well... not quite.

You see clean code is actually a good thing, so is code optimization. The issue lies in trying to make things too clean or too optimized. It's like eating sweets. once or twice is nice but too much in too short of a timespan and you'll feel like your next breath might be your last.

# What is clean code

Clean code is the idea that your code should serve its purpose to the best of its ability while also being easily readable. Now if you don't code, that sentence might make sense. If you have touched any large project ever in your life however, you'll know that this philosophy is impossible. The idea that your code should do its job and be readable is like saying you want oil and water to mix.

In practice, code that executes as optimally as possible will never be readable and code that is readable will do so with the cost of performance. You cannot have your cake and eat it.

# How does this relate to games?

Clean code is a sin of any programming project but is most detremental in game projects. Video games tend to always want performance over everything and if you want to make your games run performant then clean code as a philosophy has to be thrown out the window. Okay not out of the window, more like put to the side for later.

You see, the idea of clean code is not that bad. The issue lies in when its impemented. You can't start writing your project with clean code in mind like all those programming books and articles tell you to. That's step 1 into how to get no work done. You'll just end up rewriting the same system over and over again trying to make it cleaner and cleaner. 

What you should be doing is programming a system to functionality and then rewriting it **ONCE** to make it cleaner.

# Show me this in practice because im stupid and need a visual aid

Happy to hear you know yourself.

For example, assume you are making a chess game and need to define what a board may look like. You might think you want to do something like this.


```js
abstract class Piece {

}

class Pawn implements Piece {
    // pawn variables and methods
}

class Knight implements Piece {
    // knight variables and methods
}

const board: Array<Array<Piece>> = [];

for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
        const piece = piece.runCode();
    }
}

```

So on and so forth. 

The issue with doing something like this from the get go is you have no clue what future features you might need for pieces or the game as a whole. This would mean you'd have to go back and adjust your clean code to make it fit your new specifications. Along with that, your new code would all have to be in different places depending on what you need so navigating your file might actually be harder than if you were writing unclean code. However, both of these issues pale in comparison to the actual problem. Once you start writing clean code, its really hard to stop.

What I mean by this is if you write clean code and then need to go back and update your codebase, its really hard to just write what you need and move on. This results in constant tweaking and refactoring until the task you wanted to implement never gets implemented. The codebase just gets cleaner and cleaner.

Your actual plan should be to write unclean code first to get the system to work.

```js
const board: number[][] = [];


for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
        switch (board[y][x]) {
            case 1:
                // Knight code
                break;
            case 2:
                // Pawn code
                break;
            default:
                // Empty square
                break;
        }
    }
}
```

In the above example, all your code is going to be a bloated mess living inside the cases of a switch statement but the fact that you don't need to go searching for anything specific and don't need to adhere to clean code standards means you can put your entire brain power into just getting the feature working.

# Wait... Are you tricking me into functional programming?

No but if thats your takeway then good for you. Functional programming works because it removes all the bloat a language throws upon you for clean code and instead lets you just write messy code that works. I think this is functional programming's biggest advantage. Stripping all the code syntactic sugar to just types and functions means code gets written quicker and features actually get implemented.

# Conclusion

In conclusion, stop focusing so much on having a readable codebase and instead focus on getting features implemented. You can always clean your code up later, you can't always implement a feature later.