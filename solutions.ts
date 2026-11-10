
function multiplyValue(value:number, multiplier?:number):number{

if(multiplier === undefined){
    return value * 2
}

return value * multiplier
}



function processInput(value:string|number|boolean): string | number{
 if(typeof value === 'string'){
    return (value.trim().toLowerCase())
 } else if(typeof value === 'number'){
    return value * 10
 } else {
    if (value){
        return 'Active'
    } else return 'Inactive'
 }

}


function formatCoordinate(coordinate: readonly [number, number, string]): string{
const [latitude, longitude, locationName] = coordinate;
return `Location: ${locationName} (${latitude}, ${longitude})`
}


function concatenateArrays<T>(...arrays: T[][]):T[]{
const result: T[] = [];
for(const array of arrays){
   result.push(...array);
}
return result;
}



interface Course {
   title: string;
   students: number;
   isPublished: boolean
}

function getPopularCourses(courses:Course[], minStudents:number): Course[]{
   const popularCourses: Course[] = courses.filter((course: Course): boolean => {
    const isPublished: boolean = course.isPublished;
    const hasEnoughStudents: boolean = course.students >= minStudents;

    return isPublished && hasEnoughStudents;
  });

  return popularCourses;
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const pluckedValues: T[K][] = [];

  for (const currentItem of items) {
    const value: T[K] = currentItem[key];
    pluckedValues.push(value);
  }

  return pluckedValues;
}



class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}



async function validateAgeAsync(age: number): Promise<string> {
  const isAdult: boolean = age >= 18;

  return new Promise<string>((resolve, reject) => {
    if (!isAdult) {
      const accessDeniedError: Error = new Error("Access Denied: Must be 18 or older");
      reject(accessDeniedError);
      return;
    }

    const successMessage: string = "Access Granted";
    const delayInMilliseconds: number = 1000;

    setTimeout(() => {
      resolve(successMessage);
    }, delayInMilliseconds);
  });
}
