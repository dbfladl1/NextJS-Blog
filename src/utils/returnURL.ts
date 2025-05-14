export function handleSwitchToEnglish(pathname: string) {
  const parts = pathname.split("/").filter(Boolean); // ['enter', 'profile']
  const en = parts.find((text) => text === "en");

  if (en) {
    return pathname;
  } else {
    const newPath = `/${parts[0]}/en/${parts.slice(1).join("/")}`; // '/enter/en/profile'
    return newPath;
  }
}

export function handleSwitchToKor(pathname: string) {
  const parts = pathname.split("/").filter(Boolean); // ['enter', 'profile']
  const path = parts.filter((text) => text !== "en");
  console.log(path);
  const newPath = "/" + path.join("/").toString();

  return newPath;
}
