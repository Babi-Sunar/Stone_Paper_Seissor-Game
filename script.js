//paper_stone_seizor game
let user_score = 0;
let computer_score = 0;
const options = [1, 2, 3];//options (stone, paper, seizor)
for (let i = 1; i <= 3; i++) {
    const randomIndex = Math.floor(Math.random() * options.length);
    const computer_choice = randomIndex + 1;//picking random option as computer player

    let user_choice = prompt("Enter your option (1, 2, 3) \n 1 :- stone \n 2:- paper \n  3:- seizor");
    user_choice = parseInt(user_choice);

    //if user input is stone
    if (user_choice == 1) {
        if (user_choice == computer_choice) {
            alert(`\t You : stone          \t Computer :stone \n\n Same choice! No one get points.`);
        }
        else if (user_choice == 1 && computer_choice == 2) {
            alert(`\t You : stone          \t Computer : paper \n\n Ops! You lost the round.`);
            computer_score += 1;
        }
        else if (user_choice == 1 && computer_choice == 3) {
            alert(`\t You : stone          \t Computer : seizor \n\n Ohh yes! You got the point.`);
            user_score += 1;
        }
    }
    //if user input is paper
    else if (user_choice == 2) {
        if (user_choice == computer_choice) {

            alert(`\t You : paper          \t Computer : paper \n\n Same choice! No one get points.`);
        }
        else if (user_choice == 2 && computer_choice == 3) {
            alert(`\t You : paper          \t Computer : seizor \n\n Ops! You lost the round.`);
            computer_score += 1;
        }
        else if (user_choice == 2 && computer_choice == 1) {
            alert(`\t You : paper          \t Computer : stone \n\n Ohh yes! You got the point.`);
            user_score += 1;
        }
    }
    //if user input is seizor
    else if (user_choice == 3) {
        if (user_choice == computer_choice) {
            alert(`\t You : seizor          \t Computer : seizor \n\n Same choice! No one get points.`);
        }
        else if (user_choice == 3 && computer_choice == 1) {
            alert(`\t You : seizor          \t Computer : stone \n\n Ops! You lost the round.`);
            computer_score += 1;
        }
        else if (user_choice == 3 && computer_choice == 2) {
            alert(`\t You : seizor          \t Computer : paper \n\n Ohh yes! You got the point.`);
            user_score += 1;
        }
    }
    else {
        alert("Sorry, You lost a chance due to wrong input! ");
    }

}
document.writeln("You : " + user_score + "<br>");
document.writeln("Computer : " + computer_score + "<br>");
if (user_score > computer_score) {
    document.writeln("<h3> Congratulations! :) <br> You won the game. </h3>");
}
else if(user_score == computer_score){
    document.writeln("Tie Game! :| <br> You are super competitor, Try again.")
}
else {
    document.writeln("<h3> Sorry!  :( <br> Try again. </h3>");

}
