# What are some differences between interfaces and types in TypeScript?

## Interface

**Description:**
An interface is primarily designed for object types. Though it can also be used with classes, function signatures, etc.

**Example:**

```ts
interface User {
  name: string;
  age: number;
}
```

## Type

**Description:**
A type is more general and flexible. You can define not just objects but also unions, intersections, tuples, primitive aliases, etc.

**Example:**

```ts
type ID = string | number;

type User = {
  name: string;
  age: number;
};
```

---

## Interface vs Type

| Feature              | Interface                     | Type                                           |
| -------------------- | ----------------------------- | ---------------------------------------------- |
| Declaration merging  | Supported                     | Not supported                                  |
| Union types          | Not supported                 | Supported                                      |
| Tuples/Primitives    | Not supported                 | Supported                                      |
| Class implementation | Can be implemented directly   | Not directly, but can still describe the shape |
| Readability          | Clearer for object structures | More flexible for advanced and mixed types     |

---

# What is the use of the keyof keyword in TypeScript? Provide an example.

**Description:**
With the help of the `keyof` operator, we can access each key of any type. It allows us to dynamically access all the keys of a given type.
If we don’t use the `keyof` operator and instead manually define the keys as a union type, then whenever any key changes in the original type, we have to update it in multiple places.
This problem doesn’t occur when using `keyof`, because it automatically reflects changes in the original type, allowing us to access all keys dynamically and maintain consistency.

**Example:**

```ts
type Person = {
  name: string;
  age: number;
  address: string;
};

// If we declare the type manually, the code would look like this:
type Person1 = "name" | "age" | "address";

// But if we use the keyof operator to declare the type, we would write it like this:
type Person2 = keyof Person;
```
