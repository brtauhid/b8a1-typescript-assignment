# TypeScript OOP-তে Access Modifier-এর ব্যবহার

Object Oriented Programming (OOP)-তে Class তৈরি করার সময় এর ভেতরে এক বা একাধিক property এবং method থাকে। সব property এবং method-এ সবার access থাকলে বাইরে থেকে যেকোনো সময় ডেটা বদলে দেওয়ার ঝুঁকি থাকে। তাই ডেটার নিরাপত্তা, inheritance নিয়ন্ত্রণ এবং Class-এর পরিচ্ছন্ন গঠনের জন্য Access Modifier ব্যবহার করা হয়। আজকের ব্লগে public, private, protected এবং readonly এই ৪টি গুরুত্বপূর্ণ Access Modifier সম্পর্কে জানব ইনশাআল্লাহ্‌।

**public:** এটা Class-এর default modifier। এই Access Modifier-টি না লিখলেও এটা সব property এবং method-এর আগে থাকে। public property বা method Class-এর ভেতরে, বাইরে এবং child Class সব জায়গা থেকে access করা যায়।

**private:** private modifier শুধু নিজের Class-এর ভেতর থেকে ব্যবহার করা যায়। বাইরে থেকে এমনকি child Class থেকেও এতে access পাওয়া যায় না।

**protected:** protected modifier নিজের Class এবং child Class-এর ভেতর থেকে ব্যবহার করা যায়, কিন্তু Class-এর বাইরে থেকে ব্যবহার করা যায় না।

**readonly:** এটা property-র visibility নির্ধারণ করে না, বরং মান বদলানো আটকায়। মান শুধু declaration-এ বা constructor-এ বসানো যায়, পরে আর বদলানো যায় না।

নিচের উদাহরণটি দেখলে Access Modifier-এর ব্যাপারে ধারণা পাওয়া যায়:

```typescript
class Employee {
  readonly id: number;
  protected name: string;
  private baseSalary: number;

  constructor(id: number, name: string, baseSalary: number) {
    this.id = id;
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

class Manager extends Employee {
  getRole(): string {
    return `Manager: ${this.name}`;
  }
}
```

Manager Class-এর ভেতরে `this.name` কাজ করে কারণ `name` protected। কিন্তু `this.baseSalary` লিখলে error আসবে, কারণ সেটা private। বাইরে থেকে `id` বদলাতে গেলেও error আসবে, কারণ সেটা readonly।

Class-এর ডেটা নিরাপদ রাখতে এবং কোড পরিচ্ছন্ন রাখতে Access Modifier-এর ব্যবহার খুবই গুরুত্বপূর্ণ। private ডেটাকে সর্বোচ্চ নিরাপত্তা দেয়, protected inheritance-কে access দেয়, public সবার জন্য accessible, আর readonly মান বদলানো আটকায়। তাই Access Modifier-এর সঠিক ব্যবহার Class-এর ডেটাকে নিরাপদ রাখে এবং কোডের readability বাড়ায়।