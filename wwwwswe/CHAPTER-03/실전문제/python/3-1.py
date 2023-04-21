def calculate_change(n):
    coin_types = [500, 100, 50, 10]
    count = 0
    for coin in coin_types:
        count += n // coin # 해당 동전이 사용될 수 있는 개수를 더함
        n %= coin # 해당 동전을 사용한 후 남은 잔돈을 구한다
    return count

print(calculate_change(1260)) # 6