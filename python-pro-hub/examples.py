# Python Pro Hub - extra Python examples

def fibonacci(count: int):
    a, b = 0, 1
    result = []
    for _ in range(count):
        result.append(a)
        a, b = b, a + b
    return result


def word_stats(text: str):
    words = text.split()
    return {
        "characters": len(text),
        "words": len(words),
        "unique_words": len(set(word.lower() for word in words)),
    }


if __name__ == "__main__":
    print("Fibonacci:", fibonacci(10))
    print("Stats:", word_stats("Python makes ideas executable"))
