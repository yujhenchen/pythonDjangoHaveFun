from game import Game
from player import Player


def main():
    # print("Hello World!")

    # init the games with players
    # if no winner, play the game, else print the winner
    card_game = Game([Player(), Player()])
    card_game.play_game()


if __name__ == "__main__":
    main()
