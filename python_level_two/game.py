from player import Player


class Game:
    def __init__(self, play_ls) -> None:
        self.__player_dict = {}
        self.reset_game(play_ls)

    def reset_game(self, play_ls) -> None:
        self.create_players(play_ls)

    def create_players(self, play_ls) -> None:
        for idx, name in enumerate(play_ls):
            self.__player_dict[idx] = name

    def play_game(self) -> None:
        self.check_win()

    def check_win(self) -> bool:
        return False

    def get_player(self, idx) -> Player:
        return self.__player_dict[idx]
