## Ping Pong 0.2!
Ping Pong Array project!

## Features
The user inputs a number and the project displays all numbers up to and including the inputted number. The array will be modified given these parameters:

- if the number can be divided by three, it will return with the word "ping."
- if the number can be divided by five, it will return with the word "pong."
- if the number can be divided by fifteen, it will return with the word "pingpong."

## Technologies
HTML, JavaScript, JQuery, CSS, and Twitter BootStrap.

## Usage

To view the source files for the project navigate to [https://github.com/navyet2/pong](https://github.com/navyet2/pong).

To view the site as a typical user, navigate to [https://navyet2.github.io/pong](https://navyet2.github.io/pong).


## Specifications
* The array is modified to replace numbers given the parameters and to show all numbers up to and including the user input.

* Numbers that are divisible by three will show up like this:

__Example Input__: 4

__Example Output__: 1, 2, ping 4

* Numbers that are divisible by five will show up like this:

__Example Input__: 10

__Example Output__: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong

* Numbers that are divisible by fifteen will show up like this:

__Example Input__: 15

__Example Output__: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong


## Known Bugs

#### 0.3
Modified behavior of refresh and submit buttons due to how individual browsers respond to Javascript/Jquery. Submit button is now a "Compute" button and Refresh is now labeled as "Display/Refresh." This is due to how Chrome handles my code. While the code now works on any major platform, it behaves differently.

* In current builds of Internet Explorer and Firefox, once a number is entered and the "Compute!" button is clicked, the array immediately displays in the HTML DOM below the form. The "Compute!" button is disabled and the only button the user can now use is "Display/Refresh" to start anew. This was how the project was intended to work in version 0.2.

* In the current build of Chrome, once a number is entered and the "Compute!" button is clicked, the array is NOT displayed and the "Compute!" button is grayed out. The only button the user can press is now "Display/Refresh" (formerly "refresh"). Once clicked, the array displays in the HTML DOM as intended. The only button still clickable is "Display/Refresh" which works as intended, refreshing the page.  

#### 0.2 remedied
On second submit click, originally the button would append atop the array already in the HTML DOM. .one added in scripts.js to combat this. The second click on submit button now refreshes the page. The problem is though, when the button is pressed without a number in the form, the second click on submit refreshes the page, making the code look grossly unresponsive as nothing in the HTML DOM changes.

#### 0.1 remedied
Subsequent submissions would append the new array above existing arrays in HTML DOM.

## Author
Scott Scholz.

##License
This work is listed under the MIT License.
