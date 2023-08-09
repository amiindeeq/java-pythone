import random

def play_guessing_game():
    number_to_guess = random.randint(1, 100)
    attempts = 0

    print("Welcome to the Guessing Game!")
    print("I have chosen a number between 1 and 100.")

    while True:
        guess = input("Enter your guess: ")
        attempts += 1

        try:
            guess = int(guess)
        except ValueError:
            print("Invalid input. Please enter a valid number.")
            continue

        if guess < number_to_guess:
            print("Too low! Try again.")
        elif guess > number_to_guess:
            print("Too high! Try again.")
        else:
            print(f"Congratulations! You guessed the number in {attempts} attempts.")
            break

play_guessing_game()