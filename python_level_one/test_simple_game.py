import unittest
from simple_game import GuessNumbers

""" 
test cases for the target 123:

123 -> Perfect Match

134 -> 1 Match, 1 Close

132 -> 1 Match, 2 Close

145 -> 1 Match

124 -> 2 Match

425 -> 1 Close

234 -> 2 Close

231 -> 3 Close

456 -> Nope

"""


class TestGuessNumbers(unittest.TestCase):
    def setUp(self):
        self.guessNums = GuessNumbers([4, 5, 6])

    def test_Perfect_match(self):
        self.guessNums.make_guess([4, 5, 6])
        result = self.guessNums.get_result()
        target_result = "Perfect Match"
        self.assertEqual(
            result,
            target_result,
            f"result {result} should be target_result {target_result}",
        )

    # def test_nope(self):
    #     self.guessNums.make_guess([1, 2, 3])
    #     result = self.guessNums.get_result()
    #     target_result = "Nope"
    #     self.assertEqual(
    #         result,
    #         target_result,
    #         f"result {result} should be target_result {target_result}",
    #     )


if __name__ == "__main__":
    unittest.main()
