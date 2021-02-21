export const smoothScroll = (target, duration) => {
  const animationType = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t * t + b;
    t -= 2;
    return (-c / 2) * (t * t * t * t - 2) + b;
  };
  let targetPosition = target.getBoundingClientRect().top,
    scrollPosition = window.pageYOffset,
    difference = targetPosition - scrollPosition,
    timeStart = null;
  console.log(target);
  console.log(targetPosition);
  console.log(difference);
  function animation(currentTime) {
    timeStart = timeStart === null ? currentTime : timeStart;
    let timeElapsed = currentTime - timeStart,
      run = animationType(timeElapsed, scrollPosition, difference, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
};
