numbers = [10,20,30,40,50]

print("List:", numbers)

stack = []

stack.append(10)
stack.append(20)
stack.append(30)

print("stack:",stack)

print("Removed:",stack.pop())
print("Stack after pop:",stack)

from collections import deque

queue = deque()

queue.apend("A")
queue.append("B")
queue.append("C")

print("Queue:",queue)