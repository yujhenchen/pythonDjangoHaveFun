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
        is_war = False
        is_double_war = False
        card_idx = 0
        to_compare_card_idx = 0
        war_card_idx = 3
        war_move_card_count = 4
        player1_card: int = 0
        player2_card: int = 0
        while True:
            self.show_game_results()
            if self.is_game_over():
                print("game over!")
                break

            player1_card = self.__player_ls[0].get_cards()[to_compare_card_idx]
            player2_card = self.__player_ls[1].get_cards()[to_compare_card_idx]

            # print(f"war_move_card_count: {war_move_card_count}")

            if player1_card == player2_card:
                if is_war:
                    is_double_war = True
                    # print(f"is_double_war")

                    lucky_person_idex = self.get_lucky_player_index()
                    if lucky_person_idex == 0:
                        remove_card_person = 1
                    else:
                        remove_card_person = 0
                    # print(f"lucky_person_idex: {lucky_person_idex}")
                    # print(f"remove_card_person: {remove_card_person}")

                    # while (
                    #     len(self.__player_ls[remove_card_person].get_cards()) > 0
                    #     and war_move_card_count > 0
                    # ):
                    #     self.__player_ls[lucky_person_idex].append_card(
                    #         self.__player_ls[remove_card_person].get_cards()[card_idx]
                    #     )
                    #     self.__player_ls[remove_card_person].remove_card(card_idx)
                    #     war_move_card_count += -1
                    self.move_cards(
                        remove_card_person,
                        lucky_person_idex,
                        war_move_card_count,
                        card_idx,
                    )
                    is_war = False
                    is_double_war = False
                    to_compare_card_idx = 0
                else:
                    is_war = True
                    to_compare_card_idx = min(
                        len(self.__player_ls[0].get_cards()) - 1,
                        len(self.__player_ls[1].get_cards()) - 1,
                        war_card_idx,
                    )
            else:
                if player1_card > player2_card:
                    if is_war:
                        # while (
                        #     len(self.__player_ls[1].get_cards()) > 0
                        #     and war_move_card_count > 0
                        # ):
                        #     self.__player_ls[0].append_card(
                        #         self.__player_ls[1].get_cards()[card_idx]
                        #     )
                        #     self.__player_ls[1].remove_card(card_idx)
                        #     war_move_card_count += -1
                        self.move_cards(
                            1,
                            0,
                            war_move_card_count,
                            card_idx,
                        )
                    else:
                        self.__player_ls[0].append_card(player2_card)
                        self.__player_ls[1].remove_card(card_idx)
                elif player1_card < player2_card:
                    if is_war:
                        # while (
                        #     len(self.__player_ls[0].get_cards()) > 0
                        #     and war_move_card_count > 0
                        # ):
                        #     self.__player_ls[1].append_card(
                        #         self.__player_ls[0].get_cards()[card_idx]
                        #     )
                        #     self.__player_ls[0].remove_card(card_idx)
                        #     war_move_card_count += -1
                        self.move_cards(
                            0,
                            1,
                            war_move_card_count,
                            card_idx,
                        )
                    else:
                        self.__player_ls[1].append_card(player1_card)
                        self.__player_ls[0].remove_card(card_idx)
                is_war = False
                to_compare_card_idx = 0
            # print(f"to_compare_card_idx: {to_compare_card_idx}")

    def is_game_over(self) -> bool:
        """check if the game is over"""
        return (
            len(self.__player_ls[0].get_cards()) == 0
            or len(self.__player_ls[1].get_cards()) == 0
        )

    def get_lucky_player_index(self) -> int:
        """return the player index that can get all cards when double war"""
        return random.randrange(len(self.__player_ls))

    def move_cards(
        self,
        from_player_idx: int,
        to_player_idx: int,
        war_move_card_count: int,
        card_idx: int,
    ) -> None:
        """move the cards to different players based on the game status"""
        while (
            len(self.__player_ls[from_player_idx].get_cards()) > 0
            and war_move_card_count > 0
        ):
            self.__player_ls[to_player_idx].append_card(
                self.__player_ls[from_player_idx].get_cards()[card_idx]
            )
            self.__player_ls[from_player_idx].remove_card(card_idx)
            war_move_card_count += -1

    def show_game_results(self) -> None:
        """print card count of each player"""
        print(
            f"Player 1 card count: {len(self.__player_ls[0].get_cards())}, Player 2 card count: {len(self.__player_ls[1].get_cards())}"
        )
        print(f"Player 1 cards: {self.__player_ls[0].get_cards()}")
        print(f"Player 2 cards: {self.__player_ls[1].get_cards()}")
