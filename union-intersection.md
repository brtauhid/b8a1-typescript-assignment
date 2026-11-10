# TypeScript-এ Union ও Intersection Type একসাথে ব্যবহার

TypeScript-এ প্রায়শই একাধিক type নিয়ে কাজ করতে হয়। এসব type-কে সঠিকভাবে handle করার জন্য বেশ কিছু operator রয়েছে। তার মধ্যে Union (`|`) এবং Intersection (`&`)-এই operator দুটো খুবই গুরুত্বপূর্ণ। Union মানে or অর্থাৎ "এটা অথবা ওটা", আর Intersection মানে "এটা এবং ওটা দুটোই"। বাস্তব প্রজেক্টে এই দুটো একসাথে ব্যবহার করলে কোড বেশি readable হয়। আজকের ব্লগে একটা API response-এর উদাহরণ দিয়ে আমরা এটা দেখব।

**Union (`|`):** Union type-এর value দুটো type-এর যেকোনো একটা হতে পারে। যেমন API call সফল হলে data আসে, আর ব্যর্থ হলে error message আসে।

**Intersection (`&`):** Intersection type দুটো type-এর সব property একসাথে নেয়। যেমন সফল হোক বা ব্যর্থ, প্রতিটা response-এ timestamp থাকবে।

```typescript
type BaseResponse = { timestamp: number };
type Success = { status: "success"; data: string };
type Failure = { status: "error"; message: string };

type ApiResponse = BaseResponse & (Success | Failure);

function handleResponse(response: ApiResponse): string {
  if (response.status === "success") {
    return response.data;
  }
  return response.message;
}
```

এখানে প্রথমে Union দিয়ে `Success` বা `Failure` ঠিক করা হয়েছে, তারপর Intersection দিয়ে তার সাথে `timestamp` যোগ করা হয়েছে। `status` property চেক করায় TypeScript বুঝে নেয় কোন ক্ষেত্রে `data` আছে আর কোন ক্ষেত্রে `message` আছে।

Union ও Intersection একসাথে ব্যবহার করলে "অথবা" আর "এবং" দুটো শর্ত এক type-এই প্রকাশ করা যায়। Union বিকল্প বেছে নেয়, Intersection সাধারণ property যোগ করে। এতে একই কোড বারবার লিখতে হয় না, আর TypeScript ভুল ধরতেও সুবিধা পায়।