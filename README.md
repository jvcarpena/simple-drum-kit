# Simple Drum Kit

This JavaScript application simulates a virtual drum kit that can be played using both mouse clicks and keyboard keys. It dynamically plays drum sounds and provides visual feedback when a button is pressed or a key is pressed on the keyboard.

## Features
- **Click Interaction:** Click on any drum button on the screen to produce the corresponding drum sound.
- **Keyboard Interaction:** Press specific keys on the keyboard to play drum sounds.
- **Animation Feedback:** Visual feedback (button animation) is provided when a button is pressed or a key is hit.

## How It Works
### Code Explanation
1. **Event Listeners for Buttons:**
   - A `click` event listener is attached to all drum buttons.
   - When a button is clicked, the corresponding drum sound is played based on its inner HTML.

2. **Event Listener for Keyboard Input:**
   - A `keydown` event listener captures keyboard input.
   - The key pressed is used to play the corresponding drum sound.

3. **Playing Sounds:**
   - The `drumKey` function uses a `switch` statement to map keys (`w`, `a`, `s`, `d`, `j`, `k`, `l`) to specific drum sounds.

4. **Button Animation:**
   - The `buttonAnimation` function adds a CSS class to the corresponding button when it is activated and removes it after a short delay for visual feedback.

## How to Use
1. Open the HTML file containing the drum kit interface in a browser.
2. Interact with the drum kit:
   - **Click:** Use the mouse to click on any drum button.
   - **Keyboard:** Press keys `w`, `a`, `s`, `d`, `j`, `k`, or `l` to produce sounds.

## Code Structure
- **HTML:** Provides the drum button elements.
- **CSS:** Adds styles and animations (e.g., the `pressed` class).
- **JavaScript:**
  - Handles click and key events.
  - Maps buttons/keys to corresponding sounds.
  - Provides animation feedback.

## Adding New Features
To extend this application:
- **Add More Keys:** Update the `switch` statement in the `drumKey` function to include additional keys and their corresponding sounds.
- **Enhance Animation:** Modify the `buttonAnimation` function to create more advanced visual effects.
- **Responsive Design:** Update the CSS to make the drum kit more responsive for different screen sizes.

## Files Required
- `sounds/tom-1.mp3`
- `sounds/tom-2.mp3`
- `sounds/tom-3.mp3`
- `sounds/tom-4.mp3`
- `sounds/snare.mp3`
- `sounds/crash.mp3`
- `sounds/kick-bass.mp3`

## Example
```javascript
var allDrums = document.querySelectorAll(".drum");

// Add click event listeners
for (var i = 0; i < allDrums.length; i++) {
    allDrums[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        drumKey(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

// Add keydown event listener
document.addEventListener("keydown", function (event) {
    var charPressed = event.key;
    drumKey(charPressed);
    buttonAnimation(charPressed);
});
```


