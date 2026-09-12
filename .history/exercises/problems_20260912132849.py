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