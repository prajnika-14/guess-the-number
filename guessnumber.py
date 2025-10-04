# Guess The Number !!
import random

print("Welcome to Guess the Number (⁠ ⁠╹ ⁠▽⁠ ╹⁠ ⁠) !!")

lower = int(input("Enter lower range: "))
upper = int(input("Enter upper range: "))

score = 0
print()

while True:
    radnum = random.randint(lower, upper)  # randint includes upper bound
    trys = 0

    while True:
        guess = int(input("Guess: "))

        if guess == radnum:
            print("🎉 You Guessed it right!")
            score += 1
            break
        else:
            trys += 1
            if guess > radnum:
                print("Your Guess was High")
            else:
                print("Your Guess was Low")
            print("Tries left: {}\n".format(3 - trys))

        if trys >= 3:
            print("Sorry you had your chance :(")
            break

    print("Number was", radnum)  # <-- show actual number, not last guess
    print("Your score is", score)

    PA = input("\nWanna Try Again (y / n) : ").lower()
    if PA == 'y':
        continue
    elif PA == 'n':
        break
    else:
        print("Uhm yes(y) or no(n)?\nAnyways, exiting.")
        break

print("It was Fun playing with you!")
