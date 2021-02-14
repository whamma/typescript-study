{
  // Enum
  // JavaScript
  const MAX_NUM = 10;
  const MAX_STUDENTS_PER_CLASS = 30;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({'MONDAY': 0, 'TUESDAY': 1, 'WEDNESDAY': 2});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
  }
  enum DaysStr {
    Monday = 'monday',
    Tuesday = 'tuesday',
    Wednesday = 'wednesday',
  }
  console.log(Days.Monday);
  let day: Days = Days.Wednesday;
  day = Days.Tuesday;
  day = 10; // enum은 타입이 제대로 보장받기 어렵다
  console.log(day);
  // enum은 다른 플랫폼과 통신할때 json같은걸로 변환될 경우만 유효함

  // 더 나은 방법은
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednseday';
  let dayOfWeek:DaysOfWeek = 'Monday';
}