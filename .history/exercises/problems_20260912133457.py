#problem 1 - Reverse a string

text = input("Enter a string: ")
reversed_text =text[::-1]
print("Reversed string:", reversed_text)

#problem 2 - palindrome

text = input("Enter a string: ")

if text == text[::-1]:
    print("Palindrome")
else:
    print("Not a palindrome")
    
    
#problem 3 -largest number

numbers = [10, 25, 7, 45, 18]

largest = numbers[0]

for number in numbers:
    if number > largest:
        largest = number

print("Largest:", largest)

#Problem 4 — Second Largest Number

numbers = [10, 25, 7, 45, 18]

unique_numbers = list(set(numbers))
unique_numbers.sort()

print("Second largest:", unique_numbers[-2])

#Problem 5 — Remove Duplicates

numbers = [10, 20, 10, 30, 20, 40]

result = list(set(numbers))

print("Without duplicates:", result)

#Problem 6 — Missing Number

numbers = [1, 2, 3, 5, 6]

n = 6

expected_sum = n * (n + 1) // 2
actual_sum = sum(numbers)

missing = expected_sum - actual_sum

print("Missing number:", missing)

#problem 7 - character frequency

text = input("Enter a string: ")

frequency = {}

for char in text:
    if char in frequency:
        frequency[char] += 1
    else:
        frequency[char] = 1

print(frequency)

#Problem 8 — First Non-Repeating Character


text = input("Enter a string: ")

frequency = {}

for char in text:
    frequency[char] = frequency.get(char, 0) + 1

for char in text:
    if frequency[char] == 1:
        print("First non-repeating character:", char)
        break
    
 #problem 9 - merge two sorted arrays
 
    a = [1, 3, 5, 7]
b = [2, 4, 6, 8]

result = []

i = 0
j = 0

while i < len(a) and j < len(b):

    if a[i] < b[j]:
        result.append(a[i])
        i += 1
    else:
        result.append(b[j])
        j += 1

while i < len(a):
    result.append(a[i])
    i += 1

while j < len(b):
    result.append(b[j])
    j += 1

print("Merged array:", result)

#problem 10 - stack

stack = []

stack.append(10)
stack.append(20)
stack.append(30)

print("Stack:", stack)

print("Popped:", stack.pop())

print("Stack:", stack)

#Problem 11 — Queue

from collections import deque

queue = deque()

queue.append(10)
queue.append(20)
queue.append(30)

print("Queue:", queue)

print("Removed:", queue.popleft())

print("Queue:", queue)

#Problem 12 — Maximum Subarray Sum

numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

current_sum = numbers[0]
maximum_sum = numbers[0]

for i in range(1, len(numbers)):

    current_sum = max(numbers[i], current_sum + numbers[i])

    maximum_sum = max(maximum_sum, current_sum)

print("Maximum subarray sum:", maximum_sum)

#Problem 13 — Sorting Without Built-in Sorting

numbers = [5, 2, 8, 1, 3]

n = len(numbers)

for i in range(n):

    for j in range(0, n - i - 1):

        if numbers[j] > numbers[j + 1]:

            numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]

print("Sorted:", numbers)

#Problem 14 — Search an Element

