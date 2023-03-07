from player import Player


class Game:
    def __init__(self, player_dict) -> None:
        self.__player_dict = player_dict
        # self.reset_game()

    def reset_game(self) -> None:
        # self.create_players()
        pass

    # def create_players(self) -> None:
    #     for idx, name in enumerate(play_ls):
    #         self.__player_dict[idx] = name

    def play_game(self) -> None:
        self.check_win()

    def check_win(self) -> bool:
        return False

    def get_player(self, idx) -> Player:
        return self.__player_dict[idx]
