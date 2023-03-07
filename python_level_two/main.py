from game import Game


def main():
    # print("Hello World!")

    # init the games with players
    # if no winner, play the game, else print the winner
    card_game = Game(["A", "B"])
    card_game.play_game()


if __name__ == "__main__":
    main()
