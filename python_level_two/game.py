from player import Player
import random


class Game:
    def __init__(self, player_ls: list[Player]) -> None:
        self.reset_game(player_ls)

    def reset_game(self, player_ls) -> None:
        """set the players of the game"""
        self.__player_ls: list[Player] = player_ls

    def play_game(self) -> None:
        """
        while true (break if any player's card count == 0)
        if one player's card i > another player's card i
        , smaller card player loose 1 card, bigger numbre player get 1 card
        if same number
        , if is_war == True && is_double_war == True
        , smaller card player loose 4 card, bigger numbre player get 4 card
        """
        # need to handle when card_idx exceed the array
        is_war = False
        is_double_war = False
        card_idx = 0
        player1_card: int = self.__player_ls[0].get_cards()[card_idx]
        player2_card: int = self.__player_ls[1].get_cards()[card_idx]
        while True:
            self.show_game_results()
            if self.is_game_over():
                break

            if player1_card == player2_card:
                if is_war:
                    is_double_war = True
                    pass
                else:
                    is_war = True
            else:
                if player1_card > player2_card:
                    pass
                elif player1_card < player2_card:
                    pass

    def is_game_over(self) -> bool:
        """check if the game is over"""
        return (
            len(self.__player_ls[0].get_cards()) == 0
            or len(self.__player_ls[1].get_cards()) == 0
        )

    def get_lucky_player_index(self) -> int:
        """return the player index that can get all cards when double war"""
        return random.randrange(len(self.__player_ls))

    def move_cards(self, from_player, to_player, cards, is_war, is_double_war) -> None:
        """move the cards to different players based on the game status"""
        if is_war and is_double_war:
            pass
        elif is_war:
            pass
        else:
            pass

    def show_game_results(self) -> str:
        """print card count of each player"""
        return f"Player 1 card count: {len(self.__player_ls[0].get_cards())}, Player 2 card count: {len(self.__player_ls[1].get_cards())}"
