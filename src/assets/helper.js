export function timeSince (date) {
  var timeStamp = new Date(date);
  var seconds = Math.floor((new Date().getTime() - timeStamp.getTime()) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = seconds / 31536000;
  if (interval < 2 && interval >= 1) {
    return Math.floor(interval) + " year ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = seconds / 86400;
  if (interval < 2 && interval >= 1) {
    return Math.floor(interval) + " day ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = seconds / 3600;
  if (interval < 2 && interval >= 1) {
    return Math.floor(interval) + " hour ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  interval = seconds / 60;
  if (interval < 2 && interval >= 1) {
    return Math.floor(interval) + " minute ago";
  }
  return Math.floor(seconds) + " seconds ago";
}