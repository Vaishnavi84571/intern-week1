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


