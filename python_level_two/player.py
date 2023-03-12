class Player:
    def __init__(self) -> None:
        self.__cards: list[int] = []
        for i in range(26):
            self.__cards.append(i)

    def get_cards(self) -> list[int]:
        """return player's cards"""
        return self.__cards

    def append_card(self, card: int) -> None:
        """add new card into the bottom of the card pile"""
        return self.__cards.append(card)

    def remove_card(self, idx) -> None:
        """delete a card by the index"""
        del self.__cards[idx]
