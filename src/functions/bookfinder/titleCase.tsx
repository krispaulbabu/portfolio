export default function toTitleCase(str:any) {
  return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a:any) {
    return a.toUpperCase();
  });
}