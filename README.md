# Blackjack 21:
This is a game of Blackjack 21, the classic card game played at casinos and game nights.

The basic objective of this game is to get your card value closer to 21 than your player, but without surpassing it. 

You can play this game with the computer and within it, you can also learn its rules.

![Screen Shot 2022-12-20 at 00 18 59](https://user-images.githubusercontent.com/114712846/208546774-ac63ca79-50bf-458f-8a67-840e296e0345.png)

## Features:
* **Rules:**
This contains a "How to play" button which makes a division appear and disappear. 

  * **Rules Division:** This division shows the rules of the game, and can be opened and closed at any point.

![Screen Shot 2022-12-20 at 00 08 26](https://user-images.githubusercontent.com/114712846/208545606-38ef231a-d2de-4961-8d6b-c9898e24d045.png)

  * **Rules Division:** This opens and closes the rules division, button changes depending on if division is open or closed.

![Screen Shot 2022-12-19 at 13 10 51](https://user-images.githubusercontent.com/114712846/208423289-e7bda856-1366-474a-bf2a-d7fc4a05b0c9.png)
![Screen Shot 2022-12-19 at 13 06 57](https://user-images.githubusercontent.com/114712846/208422585-db76ec9f-1bcc-4d89-95b8-81ead1f719fe.png)

* **Computer's hand:**
This contains the cards that are dealt to the computer, though it only shows the reverse until the player decides to fold, and then it displays the value of the computer's hand.

![Screen Shot 2022-12-19 at 12 58 26](https://user-images.githubusercontent.com/114712846/208421800-3addbe66-2112-417b-98cd-30040db7defc.png)

* **Buttons and announcement division:**
Here you can find both buttons for taking cards and ending the game. When you stick or when the player's hand value surpasses 21, the buttons disappear and the announcements division announces if you won, lost or drew, as well as creating a button to restart the game.

![Screen Shot 2022-12-19 at 23 54 27](https://user-images.githubusercontent.com/114712846/208542481-d4193b89-8795-4bba-80d6-d0c8086471ef.png)

![Screen Shot 2022-12-19 at 13 12 48](https://user-images.githubusercontent.com/114712846/208423631-49c2e043-5935-462d-9edd-572332427d9d.png)

* **Player's hand:**
This contains the cards that are dealt to the player. This time it shows the card values. This is also where the player's hand value is shown when the stick button is clicked.

![Screen Shot 2022-12-19 at 13 09 39](https://user-images.githubusercontent.com/114712846/208423043-97af9166-abdd-4c4d-b987-62138bc630fe.png)

## Features left to implement:
* A third and even fourth player could be added eventually, wether it is computer or human. This could be done with more time.

## Testing:
* This webpage was tested on the following browsers: Firefox, Safari and Chrome. It worked on all of them.
* This project is responsive on all device sizes, it was tested through DevTools and opening it on phones, tablets and computers.
* The contrast of colors and letter sizing makes the webpage easy to read and understand.
* All of the buttons work and do their function correctly.

## Bugs:
* Along the creation of the website, some bugs appeared, but they were solved as they came up
* It was very difficult to get the program to count the cards correctly, especially the As. Giving the As higher values and sorting the cards allowed for the program to read them last, therefore determining if their value was 1 or 11.
* I also had issues with the rules division. Issue was solved by using the visibility attribute in CSS. 

## Unsolved Bugs:
* The rules division changes CSS attributes directly through JavaScript. This is not the best practice, but I could not figure out how to change that through class uses and needed more time. With more time, I could fix that.

## Validator testing:

* HTML: No errors were found when passing the code through the official W3C validator.
* CSS: No errors were found when passing the code through the official W3C validator.
* Accessibility: Tested the results throught the  Lighthouse test, all of the attributes are high due to the simplicity of the game and the use of javascript to make actions. 

![Screen Shot 2022-12-19 at 23 59 36](https://user-images.githubusercontent.com/114712846/208543407-61b77d43-4e09-4960-9e52-957e00d10a4b.png)

## Deployment:
* The site is deployed on GitHub pages. The steps followed to deploy it are the following:
  *  Navigate to the Git repository page and go into *settings*
  *  Select Master-Branch from the dropdown menu
  *  Click on the link provided by the page
  
You can find the link here: https://lpewton.github.io/blackjack-21/

## Credits:
### Media:
* The card images were all extracted from Google Images

## Acknowledgements:
* I would like to thank my tutor for giving me support and help throughout the project.
* I would like to thank my friends and my family for helping me with the design and coloring of the website
