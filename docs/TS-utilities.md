## Readonly<T> - readonly 
const user : Readonly<{name, username}> = {
  name: "Jessa",
};

## Partial<T> - all properties are optional
type User = {
  username: string;
  age: number;
};

const updateUser: Partial<User> = {
  age: 21,
};

## Required<T> 
const createUser: Required<User> = {
  username: "jessa",
  age: 20,
};

## Pick<T,K> - select only specific properties
type Book = {
  id: number;
  name: string;
  author: string;
};

type book: Pick<Book, "id" | "name">;

Result: {id: number; name: string;}

## Omit<T> - remove specific
type removeAuthor: Omit<Book, "author">;

## Record<T,K> - it avoid repetition for the values. 
Instead of:
type Roles = {
  admin: boolean;
  user: boolean;
  guest: boolean;
};

we can just do:
Example 1:
type Roles = Record<"admin" | "user" | "guest", boolean>

Real-world example:
type Role = "admin" | "editor" | "viewer";

const permissions : Record <Role, boolean> = {
  admin: true,
  user: true,
  viewer: false,
}

Example 2:

type Theme = "light" | "dark";

const themeClasses: Record<Theme, string> = {
  light: "bg-white text-black",
  dark: "bg-black text-white",
};

## React.PropsWithChildren<T> - this is a shortcut for adding a children property
Instead of:
type LayoutProps = {
    sidebar: React.ReactNode;
    children?: React.ReactNode;
};

we can just:
type LayoutProps = React.PropsWithChildren<{
    sidebar: React.ReactNode;
}>

also, it is a good practice to deconstruct first because types only exist on compile time. 
function Layout ({sidebar, children} : LayoutProps) {}

## ReadonlyArray<T> - makes an array immutable.
const fruits: string [] = ["apple", "mango", "grapes"];

we can make it: 
const fruits: ReadonlyArray<string> = ["apple", "mango", "grapes"];

## Other utilities:
ReturnType<T> – infer function return types
Parameters<T> – get function parameter types
Awaited<T> – unwrap a Promise
NonNullable<T> – remove null | undefined
Extract<T, U> – filter union types
Exclude<T, U> – remove from union types