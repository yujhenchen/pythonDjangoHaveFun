import random


class GuessNumbers:
    def __init__(self, input_digits=None) -> None:
        if input_digits is None:
            digits = list(range(10))
            random.shuffle(digits)
            self.__target_nums = digits[:3]
        else:
            self.__target_nums = input_digits
        self.__guess_nums = []
        self.__result_dict = {"m": 0, "c": 0}

    def get_numbers(self) -> list:
        return self.__target_nums

    def get_result(self) -> str:
        if self.__guess_nums == self.__target_nums:
            return "Perfect Match"

        hasMatchOrClose = False
        for current_num in self.__guess_nums:
            if current_num in self.__target_nums:
                hasMatchOrClose = True
                current_idx = self.__guess_nums.index(current_num)

                if current_num == self.__target_nums[current_idx]:
                    self.__result_dict["m"] = self.__result_dict["m"] + 1
                else:
                    self.__result_dict["c"] = self.__result_dict["c"] + 1

        if hasMatchOrClose:
            return f"{self.__result_dict['m']} Match, {self.__result_dict['c']} Close"
        return "Nope"

    def make_guess(self, num_ls) -> None:
        self.__guess_nums = num_ls
