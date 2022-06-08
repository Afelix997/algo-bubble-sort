sequence = [4, 3, 5, 0, 1]
swaps = 0


for i in range(0,len(sequence)):
    for k in range(1,len(sequence)):
            if sequence[k - 1] > sequence[k]:
                temp = sequence[k]
                sequence[k] = sequence[k - 1]
                sequence[k - 1] = temp
                swaps += 1
                continue

result= sequence

print(f"Final result: {result}")
print(f"Swaps: {swaps}")
