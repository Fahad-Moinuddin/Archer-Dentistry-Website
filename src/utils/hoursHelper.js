export function getLiveStatus(location, customDate = new Date()) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayIndex = customDate.getDay();
  const currentDayName = daysOfWeek[currentDayIndex];
  const currentHour = customDate.getHours() + (customDate.getMinutes() / 60);

  const todaySchedule = location.schedule.find(s => s.day === currentDayName);

  if (!todaySchedule || !todaySchedule.isOpen) {
    // Find next open day
    let nextDayName = "Tomorrow";
    for (let i = 1; i <= 7; i++) {
      const nextIdx = (currentDayIndex + i) % 7;
      const nextDaySched = location.schedule.find(s => s.day === daysOfWeek[nextIdx]);
      if (nextDaySched && nextDaySched.isOpen) {
        nextDayName = i === 1 ? `Tomorrow at ${nextDaySched.open}` : `${daysOfWeek[nextIdx]} at ${nextDaySched.open}`;
        break;
      }
    }
    return {
      isOpen: false,
      badgeText: "Closed",
      statusText: `Closed • Opens ${nextDayName}`,
      isCurrentDayClosed: true,
      currentDayName
    };
  }

  // Today has open hours
  if (currentHour < todaySchedule.rawOpen) {
    return {
      isOpen: false,
      badgeText: "Closed",
      statusText: `Closed • Opens today at ${todaySchedule.open}`,
      isCurrentDayClosed: false,
      currentDayName
    };
  } else if (currentHour >= todaySchedule.rawOpen && currentHour < todaySchedule.rawClose) {
    return {
      isOpen: true,
      badgeText: "Open Now",
      statusText: `Open Now • Closes at ${todaySchedule.close}`,
      isCurrentDayClosed: false,
      currentDayName
    };
  } else {
    // Closed for the day, find tomorrow
    const nextIdx = (currentDayIndex + 1) % 7;
    const nextDaySched = location.schedule.find(s => s.day === daysOfWeek[nextIdx]);
    const nextInfo = (nextDaySched && nextDaySched.isOpen) 
      ? `Tomorrow at ${nextDaySched.open}`
      : "Monday at 9:00 AM";

    return {
      isOpen: false,
      badgeText: "Closed",
      statusText: `Closed for today • Opens ${nextInfo}`,
      isCurrentDayClosed: false,
      currentDayName
    };
  }
}
