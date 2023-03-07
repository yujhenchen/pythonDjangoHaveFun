class Player:
    def __init__(self) -> None:
        self.__cards = []
        for i in range(26):
            self.__cards.append(i)

    def get_cards(self) -> list:
        return self.__cards

    def reset(self) -> None:
        self.__cards = []
