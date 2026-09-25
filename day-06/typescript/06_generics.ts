function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}

console.log(firstItem<number>([10, 20, 30]));
console.log(firstItem<string>(["React", "TypeScript"]));
