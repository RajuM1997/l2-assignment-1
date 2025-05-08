function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  } else {
    return input.toLocaleLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filterItem: { title: string; rating: number }[] = items.filter(
    (book: { title: string; rating: number }) => book.rating > 4
  );
  return filterItem;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
  //   const result: Array<T> = [];
  //   arrays.forEach((item) => {
  //     item.forEach((item2) => {
  //       result.push(item2);
  //     });
  //   });
  //   return result;
}

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value.length;
  } else {
    return 0;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let singleProduct: Product = products[0];
  products.forEach((item) => {
    if (item.price > singleProduct.price) {
      singleProduct = item;
    }
  });
  return singleProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  if (day === 5 || day === 6) {
    return `Weekend`;
  } else {
    return `Weekday`;
  }
}
async function squareAsync(n: number): Promise<number> {
  return new Promise<number>((res, rej) => {
    const data: number = n;
    if (data >= 0) {
      setTimeout(() => {
        res(data * data);
      }, 1000);
    } else {
      rej("Negative number not allowed");
    }
  });
}
