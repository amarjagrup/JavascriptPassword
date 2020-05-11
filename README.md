# JavascriptPassword
Generates a form that will ask for a username and password. passjs.js will create the form. passjs.js will generate a score based on the following characteristics. <br>
Given a password of N total characters, where U is the number of uppercase characters, L is the number of lowercase characters, D is the number of digits, and S is the number of symbols (everything else).<br>
⦁	Number of characters adds (N * 4) points.<br>
⦁	For uppercase characters, If (U > 0) then add (N – U) * 2 points, otherwise add 0.
⦁	For lowercase characters, If (L > 0) then add (N – L) * 2 points, otherwise add 0.
⦁	If the password only contains digits, add 0 points, otherwise the number of digits adds (D * 4) points
⦁	Number of symbols adds (S * 6) points
⦁	The number of middle digits or symbols (not at the very beginning or very end) adds that (D’+ S’)*2 points.
	
  These measures are adapted from the password strength test found at http://www.uic.edu/apps/strong-password/.
	When a user submits a password a message will appear with the correct score and will be in one of the following colors depending on 
  the score. 
      ⦁	0 - 20 : Red
      ⦁ 21 – 40 : Yellow
      ⦁	Above 40 : Green

