import random


class GuessNumbers:
    def __init__(self, input_digits=None) -> None:
        if input_digits is None:
            digits = list(range(10))
            random.shuffle(digits)
            self.__target_nums = digits[:3]
        else:
            self.__target_nums = input_digits
        self.guess_nums = []

    def get_numbers(self) -> list:
        return self.__target_nums

    def get_result(self) -> str:
        if self.guess_nums == self.__target_nums:
            return "Perfect Match"

        anyMatch = False
        for number in self.guess_nums:
            if number in self.__target_nums:
                anyMatch = True

        if anyMatch:
            return ""
        return "Nope"

    def make_guess(self, num_ls) -> None:
        self.guess_nums = num_ls
